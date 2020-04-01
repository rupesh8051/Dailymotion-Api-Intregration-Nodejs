const express = require('express');
const app = express();
const ejs = require('ejs');
const dotenv = require('dotenv');
const router = require('./routes/index');

const port = process.env.PORT || 300

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.use('/',router);

app.listen(port, (err)=>{
  if(err){
    console.log('Problem in Server');
  }else{
    console.log(`Server is Running on https://localhost:${port}`);
  }
});
