const fs = require("node:fs");
const express = require("express");
const bodyParser = require("body-parser");
const { formatQuery } = require("react-querybuilder");
const cors = require("cors");

const { prepareData, processData } = require("./helpers");
const sequelize = require("./db/db.service");

const app = express();
const PORT = 3005;

app.use(cors()).use(bodyParser.json());

app.post("/api/dealer", async (req, res) => {
  const query = req.body.query;
  const paramsIn = req.body.params;
  const templateName = paramsIn.template;

  const { sql, params } = formatQuery(query, {
    format: "parameterized",
    quoteFieldNamesWith: `"`,
  });

  let getDataResult;

  try {
    const selectRowData = `select * from public."Dealers" where ${sql} limit ${paramsIn.limit}`;

    getDataResult = await sequelize.query(selectRowData, {
      replacements: params,
      type: "SELECT",
    });
  } catch (e) {
    return res.status(422).json({ error: "Problems with SQL." });
  }

  if (getDataResult?.length === 0) {
    return res.status(404).json({ error: "No data found." });
  } else {
    const path = `./templates/${templateName}.xlsx`;
    const fillTemplateResult = await processData(
      prepareData(getDataResult, query),
      path
    );

    await fillTemplateResult
      .workbook()
      .toFileAsync(`./out/${templateName}_out.xlsx`);

    // send file
    const file = fs.createReadStream(`./out/${templateName}_out.xlsx`);
    const filename = new Date().toISOString();
    res.setHeader(
      "Content-Disposition",
      'attachment: filename="' + filename + '"'
    );

    file.pipe(res);
  }
});

app.listen(PORT, () => console.log(`Listen on ${PORT}`));
