const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "postgres://postgres:postgres@localhost:5432/DealerPassport"
);

sequelize.authenticate().catch((e) => console.log(e));

module.exports = sequelize;
