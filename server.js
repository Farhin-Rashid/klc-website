const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get("/", function(req, res){
    console.log("Works");
    res.render("home");
});

app.listen(port, function(){
    console.log("Server started on port " + port);
});