const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  "postgres://postgres:postgres@localhost:5432/DealerPassport"
);

try {
  sequelize.authenticate();
  console.log("establish connection to db");
} catch (e) {
  console.error(e);
}

const execute = (sql) =>
  sequelize.query(sql, {
    // logging: true,
  });

module.exports = execute;
