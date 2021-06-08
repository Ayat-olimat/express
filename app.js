const express = require('express')
const app = express()
const bodyParser = require("body-parser")
const path = require("path")
const fs = require("fs")

app.use(express.static(__dirname + '/public'));

const bodyParserMW = bodyParser.urlencoded({
    extended: true
})
app.get("/", (req, res, next)=>{
  res.sendFile(path.join(__dirname,"..","assignment-express","home.html"))
})
app.get("/form", (req, res , next)=>{
  res.sendFile(path.join(__dirname,"..","assignment-express","index.html"))
})
app.post("/SignUP", bodyParserMW, (req, res, next)=>{
    console.log(req.body)
    fs.writeFileSync("message.txt" ,JSON.stringify(req.body));
    res.end();
})
app.listen(3001, ()=>{
    console.log("listening on 3000...")
})