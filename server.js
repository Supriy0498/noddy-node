const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const login = require('./routes/login');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.static("public"));
app.set("view engine","ejs");
app.use('/login', login);

const PORT = process.env.PORT || 8080;

app.get("/",(req,res)=>{
    res.render("home");
});

app.listen(PORT,()=>console.log("Sever started"));