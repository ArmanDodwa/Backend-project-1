const express = require("express");

const {airplaneMiddleware} = require("../../middlewares");
const { airplaneController } = require("../../controllers");

const router = express.Router();

router.post("/", airplaneMiddleware.validateAirplane, airplaneController.createAirplane);
router.get("/", airplaneController.getAirplanes);
router.get("/:id", airplaneController.getAirplane);
router.delete("/:id", airplaneController.distoryAirplanes);

module.exports = router;