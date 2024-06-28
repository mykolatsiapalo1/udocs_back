require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const routes = require("./routes");

const origin = process.env.CURRENT_CLIENT_DOMAIN;

const app = express();
app.use(cors({ credentials: true, origin: origin }));
app.use(cookieParser());
app.use(express.json());
app.use(routes);

module.exports = app;
