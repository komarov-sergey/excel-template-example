const XlsxPopulate = require("xlsx-populate");
const XlsxDataFill = require("xlsx-datafill");
const R = require("ramda");

const sequelize = require("./db/db.service");

const XlsxPopulateAccess = XlsxDataFill.XlsxPopulateAccess;

const bindParams = async () => {
  const nameCondition = "like";
  const nameValue = "Лада%";
  const typeCondition = "=";
  const typeValue = "Дилер";
  const limit = 1;

  return `
  select 
    id, type, "DealerName"
  from 
    public."Dealers"
  where 
    "DealerName" ${nameCondition} '${nameValue}' and
    "type" ${typeCondition} '${typeValue}'
    limit ${limit};
  `;
};

const getData = (sql) =>
  sequelize.query(sql, {
    type: "SELECT",
  });

const processData = async (data, path) => {
  const wb = await XlsxPopulate.fromFileAsync(path);
  const xlsxAccess = new XlsxPopulateAccess(wb, XlsxPopulate);
  const dataFill = new XlsxDataFill(xlsxAccess);
  dataFill.fillData(data);

  return xlsxAccess;
};

const prepareData = (data) => {
  console.log(data);

  const filters = [
    {
      condition: `${"like"} ${"Лада%"}`,
    },
    {
      condition: "condition2",
    },
    {
      condition: "condition3",
    },
  ];

  return {
    tableName: "Table name",
    filters,
    vertical: data,
  };
};

const fillTemplate = R.pipe(prepareData, (data) => {
  const path = "./templates/ruamds1.xlsx";
  return processData(data, path);
});

const wrileToFile = (res) =>
  res.workbook().toFileAsync("./out/ruamds1_out.xlsx");

module.exports = {
  bindParams,
  getData,
  processData,
  prepareData,
  fillTemplate,
  wrileToFile,
};
