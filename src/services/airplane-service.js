const {StatusCodes} = require("http-status-codes");
const {AirplaneRepositories} = require("../repositories");

const airplaneRepositories = new AirplaneRepositories();

const AppError = require("../utils/errors/app-error");

async function createAirplane(data){
    try {

        const airplane = await airplaneRepositories.create(data);
        return airplane
    } catch (error) {
        if(error.name == 'SequelizeValidationError'){
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            }); 
            console.log(explanation);

            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        throw error
    }
};

module.exports = {createAirplane};