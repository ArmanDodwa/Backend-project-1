const express = require("express");

const {cityMiddleware} = require("../../middlewares");
const { cityController } = require("../../controllers");

const router = express.Router();


router.post("/", cityMiddleware.validateCity,  cityController.createCity);

module.exports = router;