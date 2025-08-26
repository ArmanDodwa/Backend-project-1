const express = require("express");

const {airplaneMiddleware} = require("../../middlewares");
const { airplaneController } = require("../../controllers");

const router = express.Router();

router.post("/", airplaneMiddleware.validateAirplane, airplaneController.createAirplane);

module.exports = router;