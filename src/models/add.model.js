

const mongoose = require("mongoose");
const add_schema = new mongoose.Schema({
    //id
    project_name: String,
    project_description: String,
   
    client_company : String,
    project_leader: String
});
module.exports = mongoose.model("Add", add_schema);