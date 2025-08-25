const express = require("express");

// const {airplanecontroller} = require("../../controllers");
const { airplaneController } = require("../../controllers");

const router = express.Router();

router.post("/", airplaneController.createAirplane);

module.exports = router;