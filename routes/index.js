'use strict';
var express = require('express');

var router = express.Router();


var myAK = "1Dg3NBLuLQWDGrfdFeVQnA5Gri8K8d29";
var tianqiuser = {
    "appid":"95524623" ,
    "appsecret":"TIi1iG5Z"
}

/* GET home page. */
router.get('/', function (req, res) {
    res.render('test2', { title: 'HTML' });
});


router.post("/weather_post", function (req, res) {

   // var address



})

module.exports = router;
