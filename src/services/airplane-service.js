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

async function getAirplanes(){
    try {

        const airplane = await airplaneRepositories.getAll();
        return airplane
    } catch (error) {
        throw new AppError('Cannot fetch data of airplane', StatusCodes.INTERNAL_SERVER_ERROR);
    }
};
async function getAirplane(id){
    try {

        const airplane = await airplaneRepositories.get(id);
        
        return airplane
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError('The airplane you requested is not found', error.statusCode );
        }

        throw new AppError('Cannot fetch data of airplane', StatusCodes.INTERNAL_SERVER_ERROR);
    }

};

async function distoryAirplane(id){
    try {

        const response = await airplaneRepositories.distory(id);
        return response
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError('The airplane you requested to delete is not found', error.statusCode );
        }
        throw new AppError('Cannot fetch data of airplane', StatusCodes.INTERNAL_SERVER_ERROR);
    }
};

module.exports = {createAirplane, getAirplanes, getAirplane, distoryAirplane};