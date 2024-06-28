const express = require("express");
const routes = express.Router();

const { getDeliverablesList } = require("./controllers");

routes.get("/getlist", getDeliverablesList);

module.exports = routes;
