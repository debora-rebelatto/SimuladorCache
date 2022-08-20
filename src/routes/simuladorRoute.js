const express = require("express");

const router = express.Router();

const simuladorController = require("../controller/simuladorController");

router.get("/", simuladorController.getSimulador);

module.exports = app => app.use("/sim", router);