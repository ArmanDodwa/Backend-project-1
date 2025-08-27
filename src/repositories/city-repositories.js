const crudRepository = require("./crud-repositories");
const {City} = require("../models");

class CityRepositories extends crudRepository {
    constructor(){
        super(City);
    }
}

module.exports = CityRepositories;