const express = require("express");
const app = express(); // host - app
const port = 2210;
app.listen(port,function(){
    console.log("Server is running...");
})
app.set("view engine","ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
// connect database
require("./src/db/connect");

// routes

// app.get("/auth/register",function(req,res){
//     res.render("auth/register");
// })

// app.post("/auth/register",function(req,res){
//     const data = req.body;
//     const userModel = require("./src/models/user.model");
//     const u = new userModel(data);
//     u.save();
//     res.send("Done");
// })
//thay bang
const auth_route = require("./src/routes/auth.route");
app.use("/auth",auth_route);


app.get("/product/add_new",function(req,res){
    res.render("product/add_new");
})
app.post("/product/add_new",function(req,res){
    const data = req.body;
   
    const addModel = require("./src/models/add.model");
    const a = new addModel(data);
    a.save();
    res.send("Done");
})

app.get("/",function(req,res){
    res.render("home/home")
})