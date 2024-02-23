require('dotenv').config()
let bodyParser = require('body-parser')
let express = require('express');
let app = express();

console.log("Hello World");

app.use(function middleware(req, res, next) {
    console.log(req.method + " " + req.path + " - " + req.ip);
    next();
  });

  app.use(bodyParser.urlencoded({ extended: false }));

app.use("/public",express.static(__dirname + "/public"))

app.get('/', (req, res) =>{
   res.sendFile(__dirname + '/views/index.html')
});

app.get("/now", (req,res,next)=>{
    req.time = new Date().toString()
    next()
},(req,res)=> {
    res.json({"time": req.time})
});

app.get('/json',(req,res)=>{
    
    if (process.env.MESSAGE_STYLE === "uppercase") {
        response = "Hello json".toUpperCase();
      } else {
        response = "Hello json";
      }
      res.json({
          message:response
      }); 
});

app.get('/:word/echo',(req,res) => {
    let { word } = req.params;
    res.json({
        echo : word
    })
})

app.get('/name', (req,res) => {
    let {first,last} = req.query;
    res.json({name: `${first} ${last}`})
})

app.post('/name', (req,res) => {
    let {first, last} =req.body;
    res.json({name: `${first} ${last}`})
})




























 module.exports = app;
