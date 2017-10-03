var express = require('express');
var router = express.Router();
var Users = require('../models/users');
/* GET users listing. */
router.get('/', function (req, res, next) {
  Users.find({}, function (err, user) {
    if (err) throw err;
    res.json(user);
  });
  // res.send('respond with a resource');
});

/* Login. */
router.route('/login')
  .get(function (req, res, next) {
    console.log(req);
    Users.find({}, function (err, user) {
      if (err) throw err;
      res.json({
        "payload": ""
      });
    });
  })
  .post(function (req, res, next) {
    let payload = JSON.parse(req.body.PayLoad);
    console.log(payload);

    Users.findOne({
      username: payload.username,
      password: payload.password
    }, function (err, user) {
      if (err) throw err;
      if (!user) {
        return res.status(404).send({
          payload: {
            err: "error",
            message: "login failed"
          }
        });
      }
      if (user) {
        res.status(200);
        res.json({
          payload: {
            err: "",
            message: "login success"
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