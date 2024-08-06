const XlsxPopulate = require("xlsx-populate");
const XlsxDataFill = require("xlsx-datafill");
const R = require("ramda");

const sequelize = require("./db/db.service");

const XlsxPopulateAccess = XlsxDataFill.XlsxPopulateAccess;

const getData = (
  sql = `select id, type, "DealerName" from public."Dealers1" limit 3`
) => sequelize.query(sql);

const processData = async (data, path) => {
  const wb = await XlsxPopulate.fromFileAsync(path);
  const xlsxAccess = new XlsxPopulateAccess(wb, XlsxPopulate);
  const dataFill = new XlsxDataFill(xlsxAccess);
  dataFill.fillData(data);

  return xlsxAccess;
};

const prepareData = (data) => {
  const filters = [
    {
      name: "name1",
      condition: "condition1",
    },
    {
      name: "name2",
      condition: "condition2",
    },
    {
      name: "name3",
      condition: "condition3",
    },
    {
      name: "name4",
      condition: "condition4",
    },
    {
      name: "",
      condition: "",
    },
  ];

  return {
    filters,
    vertical: R.head(data),
    header1: "Заголовок 1",
    header2: "Заголовок 2",
    header3: "Заголовок 3",
  };
};

const fillTemplate = R.pipe(prepareData, (data) => {
  const path = "./templates/ruamds1.xlsx";
  return processData(data, path);
});

const wrileToFile = (res) =>
  res.workbook().toFileAsync("./out/ruamds1_out.xlsx");

module.exports = {
  getData,
  processData,
  prepareData,
  fillTemplate,
  wrileToFile,
};
