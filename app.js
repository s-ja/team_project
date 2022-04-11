const express = require("express");
const app = express();
const port = 5000

app.use(express.static('public'))

app.get("/",function(req,res){
    res.sendFile(__dirname+"/public/index.html")
})

app.get("/browse",function(req,res){
    res.sendFile(__dirname+"/public/browse.html")
}) 