require("dotenv").config();

const http = require("http");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const api = express();

api
  .use(cors())
  .use(morgan(process.env.NODE_ENV))
  .use(express.json())
  .use("/api", require("./routes"))
  .use(express.static("./dist"))
  .use("*", (req, res) => res.sendFile("index.html", { root: "./dist" }));


const server = http.createServer(api);

server.listen(
  process.env.PORT,
  console.log(`API Listenning on port ${process.env.PORT}`)
);
