const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get('/', function(req, res){
    res.render("home");
});

app.get("/about", function(req,res){
    res.render("about")
});

app.get('/contact', function(req,res){
    res.render("contact")
});

app.get('/classes', function(req,res){
    res.render("classes")
});

app.get('/faq', function(req,res){
    res.render("faq")
});

app.get('/events', function(req,res){
    res.render("events")
});

app.get('/resources', function(req,res){
    res.render("resources")
});

app.get('/admin', function(req,res){
    res.render("admin");
    console.log("Works");
});

app.listen(port, function(){
    console.log("Server started on port " + port);
});