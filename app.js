const express = require("express");
const app = express();
const port = 3000;

app.use(express.static('public'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

app.get("/",function(req,res){
    res.sendFile(__dirname+"/public/index.html")
})

app.get("/browse",function(req,res){
    res.sendFile(__dirname+"/public/browse.html")
})