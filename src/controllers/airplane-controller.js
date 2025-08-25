
const { StatusCodes } = require('http-status-codes');

const {airplaneService} = require("../services");

async function createAirplane(req, res){
    try {
        const airplane = await airplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        });

        return res
        .status(StatusCodes.CREATED)
        .json({
            success: true,
            message: "Successfully created an airplane",
            data: airplane,
            err: { }
        });
    } catch(error) {
        return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({
            success: false,
            message: "Failed to create an airplane",
            data: { },
            err: error
        });
    }
}

module.exports = {createAirplane};