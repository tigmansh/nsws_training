const express = require("express");
const morgan = require("morgan");
const fs = require("fs");
const app = express();


const logger = (morgan(function (tokens, req, res) {
  const x = [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens["user-agent"](req, res),
  ];

  fs.appendFileSync("./logs.txt", `${x}\n`);
}));

module.exports = { logger };
