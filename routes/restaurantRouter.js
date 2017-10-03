var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var Restaurants = require('../models/restaurants');
//import {restaurant} from '../models/restaurant';
//restnt : restaurant;
var restaurant = {
    "_id":'',
    "name":'',
    "menu":''
}
//  var menu ={
//     name:"",
//     price:"",
//     description:""
// }
/* GET  listing. */
router.get('/', function (req, res, next) {
  Restaurants.find({}, function (err, restaurant) {
    if (err) throw err;
    //res.json(user);
    res.send(JSON.stringify(restaurant));
    console.log(restaurant);
    restaurant = JSON.parse(JSON.stringify(restaurant[0]));
    console.log(restaurant.menu[0].name);
  });
  // res.send('respond with a resource');
})
.post('/', function (req, res, next) {
  Restaurants.find({}, function (err, restaurant) {
    if (err) //error payload
      throw err;
    //res.json(user);
    
    let response = {
      err :"",
      data:  JSON.stringify(restaurant)
    }
    res.send(response);
    console.log(restaurant);
    restaurant = JSON.parse(JSON.stringify(restaurant[0]));
    console.log(restaurant.menu[0].name);
  });
  // res.send('respond with a resource');
});

/* fetch by id. */
 router.route('/:id')
  .get(function (req, res, next) {
    console.log(req);
    Restaurants.findById(req.params.id, function (err, restaurant) {
      if (err) throw err;
      res.json({
        "payload": restaurant
      });
    });
  })
  .post(function (req, res, next) {
    console.log(req.params.id);
   // let payload = req.body.PayLoad;
   // console.log("/id::"+payload);
   // let query = req.params.id;
    Restaurants.findById(req.params.id,
       function (err, restaurant) {
      if (err) throw err;
      if (!restaurant) {
        return res.status(404).send({
          payload: {
            err: "error",
            message: " failed"
          }
        });
      }
      if (restaurant) {
        res.status(200);
        res.json({
          payload: {
            err: "",
            message: "success",
            data: JSON.stringify(restaurant)
          }
        });
      } else {
        res.status(200);
        res.json({
          payload: {
            err: "error",
            message: "login failed"
          }
        });
      }
    });
  })

module.exports = router;