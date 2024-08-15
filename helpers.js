const XlsxPopulate = require("xlsx-populate");
const XlsxDataFill = require("xlsx-datafill");
const R = require("ramda");
const moment = require("moment");

const sequelize = require("./db/db.service");

const XlsxPopulateAccess = XlsxDataFill.XlsxPopulateAccess;

const processSQL = (sql) => {
  let i = 0;
  return sql.replace(/\?/g, () => {
    i++;
    return `$${i}`;
  });
};

const getData = async (sql, replacements) => {
  return await sequelize.query(sql, {
    replacements,
    type: "SELECT",
  });
};

const processData = async (data, path) => {
  const wb = await XlsxPopulate.fromFileAsync(path);
  const xlsxAccess = new XlsxPopulateAccess(wb, XlsxPopulate);
  const dataFill = new XlsxDataFill(xlsxAccess);
  dataFill.fillData(data);

  return xlsxAccess;
};

const prepareData = (data, query) => {
  const time = moment();
  console.log("prepareData -->", data);
  console.log("prepareData -->", query);

  const search = query.rules.map((el) => ({
    condition: `${el.field} ${el.operator} ${el.value}`,
  }));

  console.log("prepareData -->", search);
  console.log("prepareData -->", time);

  return {
    search,
    date: time.format("YYYY-MM-DD"),
    time: time.format("HH:MM:SS"),
    table: data,
  };
};

const fillTemplate = R.pipe(prepareData, (data) => {
  const path = "./templates/ruamds1.xlsx";
  return processData(data, path);
});

const wrileToFile = (res) =>
  res.workbook().toFileAsync("./out/ruamds1_out.xlsx");

module.exports = {
  processSQL,
  getData,
  processData,
  prepareData,
  fillTemplate,
  wrileToFile,
};
