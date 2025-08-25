const crudRepository = require("./crud-repositories");
const {Airplane} = require("../models");
class AirplaneRepositories extends crudRepository {
    constructor(){
        super(Airplane);
    }
}

module.exports = AirplaneRepositories;