const R = require("ramda");

const sequelize = require("./db/db.service");
const { processData, prepareData } = require("./helpers");

sequelize
  .query(`select id, type, "DealerName" from public."Dealers" limit 3`)
  .then((result) => prepareData(R.head(result)))
  .then((result2) => processData("./templates/ruamds1.xlsx", result2))
  .then((result3) => result3.workbook().toFileAsync("./out/ruamds1_out.xlsx"));
