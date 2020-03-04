const { Router } = require("express");

const { trophies } = require.main.require("./ressources");

module.exports = new Router()
  .post("/", (req, res, next) => {
    trophies
      .getAMonth(req)
      .then(response => res.json(response))
      .catch(next);
  })
  .get("/fill", (req, res, next) => {
    trophies
      .fillDays()
      .then(response => res.json(response))
      .catch(next);
  })
  .post("/update", (req, res, next) => {
    trophies
      .updateDay(req)
      .then(response => res.json(response))
      .catch(next);
  });
