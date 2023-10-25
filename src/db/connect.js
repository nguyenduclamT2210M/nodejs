const mongoose = require("mongoose");
const sever ="mongodb://localhost:27017"; 
const db_name = "t2210m";

class Database{
    constructor(){
                mongoose.connect(`${sever}/${db_name}`) 
        .then(() => {
            console.log(`Connection database ${db_name}`);
        }).catch(err =>{
            console.log(err);
        })
    }
}
module.exports = new Database();