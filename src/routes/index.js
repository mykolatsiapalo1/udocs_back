const express = require("express");
const router = express.Router();

const deliverablesRoutes = require("../domains/deliverables");

router.use("/deliverables", deliverablesRoutes);

module.exports = router;
