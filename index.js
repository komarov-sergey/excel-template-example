const { bindParams, getData, fillTemplate, wrileToFile } = require("./helpers");

// case 1
bindParams()
  .then(getData)
  .then(fillTemplate)
  .then(wrileToFile)
  .catch((e) => console.log(e));

// case 2
// const myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/json");

// const raw = JSON.stringify({
//   tableName: "Table name",
//   filters: [
//     {
//       label: "label1",
//       condition: "condition1",
//     },
//     {
//       label: "label2",
//       condition: "condition2",
//     },
//     {
//       label: "label3",
//       condition: "condition3",
//     },
//     {
//       label: "label4",
//       condition: "condition4",
//     },
//     {
//       label: "label5",
//       condition: "condition5",
//     },
//   ],
//   vertical: [
//     {
//       id: "1230451",
//       type: "Дилер",
//       DealerName: "Канск-Лада",
//     },
//     {
//       id: "708120633",
//       type: "Дилер",
//       DealerName: "ПРАЙД (филиал)",
//     },
//     {
//       id: "1373228951",
//       type: "Дилер",
//       DealerName: "Орехово-АвтоЦентр(Электросталь)",
//     },
//   ],
// });

// const requestOptions = {
//   method: "POST",
//   headers: myHeaders,
//   body: raw,
//   redirect: "follow",
// };

// fetch(
//   "http://localhost:5000/api/fill_template?file_name=21&type=custom",
//   requestOptions
// )
//   .then((response) => response.text())
//   .then((result) => console.log(result))
//   .catch((error) => console.error(error));
