const fs = require("node:fs");

const XlsxPopulate = require("xlsx-populate");
const XlsxDataFill = require("xlsx-datafill");
const Xlsx = require("xlsx");

const XlsxPopulateAccess = XlsxDataFill.XlsxPopulateAccess;
const { read, utils } = Xlsx;

// TODO получение данных из SQL и через alias намапим (прокачиваем мапинг)
const tempData = {
  params: {
    groupName: "Дилер",
    period: "май 2024",
    TO: "1,2,3,4,5",
    periodFrom: "1",
    periodTo: "3",
    typeClient: "Юр. лицо, Физ. лицо",
    dealersPravo: "Интеркар, Авалон",
    dealers: "Авалон",
    semeistvo: "Все семейства",
  },
  vertical: [
    {
      i: 1,
      name: "Авалон",
      city: "БЕЛГОРОД",
      code: "48414200",
      inn: "3123297340",
      bir: "64306895",
      oblast: "Белгородская обл.",
      fo: "ЦФО",
    },
  ],
  horizontal: [
    {
      title: "TO - 1",
      subTitle1: "Количество а/м, проданных в период продаж",
      subTitle2: "Количество а/м, приехавших на ТО",
      subTitle3: "% возращения",
      countSale: 1,
      countTO: 2,
      returnPersent: 3,
    },
    {
      title: "TO - 2",
      subTitle1: "Количество а/м, проданных в период продаж",
      subTitle2: "Количество а/м, приехавших на ТО",
      subTitle3: "% возращения",
      countSale: 4,
      countTO: 5,
      returnPersent: 6,
    },
  ],
};

const processData = async (path, data) => {
  const wb = await XlsxPopulate.fromFileAsync(path);
  const xlsxAccess = new XlsxPopulateAccess(wb, XlsxPopulate);
  const dataFill = new XlsxDataFill(xlsxAccess);
  dataFill.fillData(data);

  return xlsxAccess;
};

(async () => {
  // fill template
  const xlsxAccess = await processData("./templates/template2.xlsx", tempData);
  await xlsxAccess.workbook().toFileAsync("./out/template2_out.xlsx");

  // export template to html
  const wb = read("./out/template2_out.xlsx", { type: "file" });
  const ws = wb.Sheets[wb.SheetNames[0]];
  const html = utils.sheet_to_html(ws);
  fs.writeFileSync("./out/html_out.html", html);
})();
