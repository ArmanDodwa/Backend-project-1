const { StatusCodes } = require('http-status-codes');
const {ErrorResponse} = require('../utils/common');
const AppError = require('../utils/errors/app-error');

const validateCity = (req, res, next) => {
    if(!req.body || !req.body.name){
        ErrorResponse.message = "Something went wrong in the create method of the City repository";
        ErrorResponse.error = new AppError([" Name is required"], StatusCodes.BAD_REQUEST);
        res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    next();
}

module.exports = {validateCity};