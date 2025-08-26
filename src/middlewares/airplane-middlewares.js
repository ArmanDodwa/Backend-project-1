const { StatusCodes } = require('http-status-codes');
const {ErrorResponse} = require('../utils/common');
const AppError = require('../utils/errors/app-error');

const validateAirplane = (req, res, next) => {
    if(!req.body.modelNumber){
        ErrorResponse.message = "Something went wrong in the create method of the Airplane repository";
        ErrorResponse.error = new AppError(["Model Number is required"], StatusCodes.BAD_REQUEST);
        res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    next();
}

module.exports = {validateAirplane};