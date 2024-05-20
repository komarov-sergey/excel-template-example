const execute = require("./models/AnyModel");

(async () => {
  const [result] = await execute(
    `select type, "DealerName" from public."Dealers" limit 2`
  );

  console.log(result);
})();
