const Logger = require("../config");

class curbRepositories {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    // try {
      const response = await this.model.create(data);
      return response;
    // } catch (error) {
    //   console.log("Error in CRUD repo create:", error);
    //   Logger.error(
    //     "Something went wrong in the create method of the curb repository"
    //   );
    //   throw error;
    // }
  }
  async distory(data) {
    try {
      const response = await this.model.destroy({
        where: {
          id: data,
        },
      });
      return response;
    } catch (error) {
      Logger.error(
        "Something went wrong in the destory method of the curb repository"
      );
      throw error;
    }
  }
  async get(data) {
    try {
      const response = await this.model.findByPk(data);
      return response;
    } catch (error) {
      Logger.error(
        "Something went wrong in the Get method of the curb repository"
      );
      throw error;
    }
  }
  async getAll(data) {
    try {
      const response = await this.model.findAll();
      return response;
    } catch (error) {
      Logger.error(
        "Something went wrong in the Get method of the curb repository"
      );
      throw error;
    }
  }
  async update(id, data) {
    try {
      const response = await this.model.update(data, {
        where: {
          id: id,
        },
      });
      return response;
    } catch (error) {
      Logger.error(
        "Something went wrong in the Get method of the curb repository"
      );
      throw error;
    }
  }
}

module.exports = curbRepositories;
