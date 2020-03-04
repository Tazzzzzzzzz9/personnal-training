const sequelize = require("sequelize");
const { db } = require("./");

module.exports = db.define("trophies", {
    user: sequelize.STRING,
    weekDay: sequelize.STRING,
    dayNumber :sequelize.INTEGER,
    month:sequelize.INTEGER,
    status: sequelize.STRING,
    description: sequelize.STRING
});