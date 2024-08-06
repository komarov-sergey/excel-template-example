const XlsxPopulate = require("xlsx-populate");
const XlsxDataFill = require("xlsx-datafill");

const XlsxPopulateAccess = XlsxDataFill.XlsxPopulateAccess;

const processData = async (path, data) => {
  const wb = await XlsxPopulate.fromFileAsync(path);
  const xlsxAccess = new XlsxPopulateAccess(wb, XlsxPopulate);
  const dataFill = new XlsxDataFill(xlsxAccess);
  dataFill.fillData(data);

  return xlsxAccess;
};

const prepareData = (result) => {
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
    vertical: result,
    header1: "Заголовок 1",
    header2: "Заголовок 2",
    header3: "Заголовок 3",
  };
};

module.exports = { processData, prepareData };
