const { StatusCodes } = require("http-status-codes");
const { CityRepositories } = require("../repositories");

const AppError = require("../utils/errors/app-error");

const cityRepositories = new CityRepositories();

async function createCity(data) {
  try {
    const city = await cityRepositories.create(data);
    return city;
  } catch (error) {
    if (error.name == "SequelizeValidationError" || error.name == "SequelizeUniqueConstraintError") {
      let explanation = [];
      error.errors.forEach((err) => {
        explanation.push(err.message);
      });
      console.log(explanation);

      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }
    throw error;
  }
};

module.exports = {
  createCity,
};
