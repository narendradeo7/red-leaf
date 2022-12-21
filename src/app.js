// requiring express 


const express = require("express");

const bodyParser =require("body-parser");

const ejs=require("ejs");

const lds= require("lodash");

const path =require('path');

// var enforce = require('express-sslify');
 


const app=express();

// using ejs 
const port =process.env.PORT || 3000;

// public static path for css and images 
const static_path =path.join(__dirname,"../public");

// we have got static path by going one dir back and using path join operator 


// getting all paths for views and partials 

const templates_path=path.join(__dirname,"../templates/views");

// setting views and partials for dynamic page 

app.set("view engine",'ejs');
app.set('views',templates_path);
// ejs.registerPartials(partials_path);

// use of bodyParser to get data from the route
app.use(bodyParser.urlencoded({extended:true}));

// making our express use static files 

app.use(express.static(static_path));

// routing
// callback for home router 

app.get ("/",(req,res)=>{
    res.render("home");
    
    })
    
    
    // listening to the port on server 
    
    app.listen(port,()=>{
    
        console.log('listening to the port at ${}')
    })

