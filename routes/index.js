const router = require('express').Router();
const request = require('request');

const response = [];
const categories = "news";
const pageRequested = 90;
const baseurl = `https://api.dailymotion.com/videos?channel=${categories}&limit=${pageRequested}`;
const array = "";
request(baseurl,{json:true},(req,res,data)=>{
  response.push(data);
});

const video_Thum = [];

router.get('/',(req,res)=>{
//  console.log(response[0].list);
    res.render('index',{
      'New_Data': response
    });

});

router.post('/cat/:id',(req,res)=>{

    console.log(req.body);

});









module.exports = router;
