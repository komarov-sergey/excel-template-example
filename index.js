const { getData, fillTemplate, wrileToFile } = require("./helpers");

getData()
  .then(fillTemplate)
  .then(wrileToFile)
  .catch((e) => console.log(e));
