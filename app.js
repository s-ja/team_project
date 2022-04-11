const express = require("express")
const app = express()
const port = 3000

app.use(express.static('public'))

// 라우팅 : 페이지를 요청(request)하면 응답(response)
app.get("/", function(req,res){
    // res.send("server is running!")
    
    res.sendFile(__dirname+"/public/index.html")
}).listen(port, function(){
    console.log("server port : "+port)
})

app.get("/slider", function(req,res){
    res.sendFile(__dirname+"/public/bxslider.html")
})