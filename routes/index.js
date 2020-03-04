const { Router } = require("express");

module.exports = new Router()

  .use("/", require("./trophies"))
  .use((err, req, res) => {
    console.log(err);
    res.status(500).json(err.message);
  });
