require('dotenv').config()
let express = require('express');
let app = express();

console.log("Hello World");

app.use("/public",express.static(__dirname + "/public"))

app.get('/', (req, res) =>{
   res.sendFile(__dirname + '/views/index.html')
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
































 module.exports = app;
