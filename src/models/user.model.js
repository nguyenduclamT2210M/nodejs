const mongoose = require("mongoose");
const user_schema = new mongoose.Schema({
    //id
    full_name: {
        type: String,
        required: [true,"Truong nay bat buoc phai nhap du lieu"],
        minLength:[6,"Do dai bat buoc la 6"]

    },
    email: {
        type:String,
        required:true,
        minLength:6,
        unique:true,
        validate: {
            validator: (v)=>{
                // bộ quy tắc kiểm tra email
                const rule = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;// email regex
                return v.match(rule);
            },
            message: (t)=> "Giá trị vừa nhập không phải email"
        }
    },
    passWord: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model("User",user_schema);// tu tim den users