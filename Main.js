const express = require("express");
const bodyParser = require("body-parser");
const { check, validationResult, body, Result } = require("express-validator");
const ejs = require("ejs");
const app = express();

var path = require("path");
const exp = require("constants");
const { execPath } = require("process");

//Setting Ejs
app.set("view engine", "ejs");

app.use(express.json());

app.use(express.static(path.join(__dirname,"public")))

//Getting the Route up
app.get("/Home", ( req, res ) => {
    res.render("index")
})
app.get("/Caso1", ( req, res ) => {
    
    res.render("caso1")
})
app.get("/Caso2", ( req, res ) => {
    
    res.render("caso2")
})
app.get("/Contacto", ( req, res ) => {
    
    res.render("contacto")
})
//Opening the port for the WEB
app.listen(3001, ( req, res ) => {  

})

app.get("/", (req,res) => {
    res.render("contacto")
})



