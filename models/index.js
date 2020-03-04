require("dotenv").config();
const sequelize = require("sequelize");

module.exports.db = new sequelize(process.env.DATABASE_URL, {
    dialectOptions: { ssl: true },
    logging: false
});

module.exports.trophies = require("./trophies");