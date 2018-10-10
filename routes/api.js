var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/user', function(req, res, next) {
  res.json({"user": [ {"id":13552,"showNickName":null,"mobileNumber":"13333823462","pushLevel":1,"upperId":13422} ]});
});

router.get('/branch', function(req, res, next) {
  res.json([
  {"id":13552,"showNickName":null,"mobileNumber":"13333823462","pushLevel":1,"upperId":13422},
    {"id":13434,"showNickName":null,"mobileNumber":"13453708029","pushLevel":1,"upperId":13422},
    {"id":13435,"showNickName":null,"mobileNumber":"13333823462","pushLevel":2,"upperId":13434},
    {"id":13553,"showNickName":null,"mobileNumber":"13333823462","pushLevel":2,"upperId":13552},
    {"id":13436,"showNickName":null,"mobileNumber":"13333823462","pushLevel":3,"upperId":13435}
  ]
);
});

router.get('/order', function(req, res, next) {
  res.json([{"user_id":11230,"side":"SELL","price":0.1000000000000000,"volume":2625.0000000000000000,"avg_price":0.1000000000000000,"deal_volume":2625.0000000000000000,"status":2,"ctime":"2018-09-16T23:58:06+08:00","mtime":"2018-09-16T23:59:59+08:00"},{"user_id":11230,"side":"BUY","price":0.0450000000000000,"volume":5500.0000000000000000,"avg_price":0.0450000000000000,"deal_volume":5500.0000000000000000,"status":2,"ctime":"2018-09-17T00:02:59+08:00","mtime":"2018-09-17T02:43:05+08:00"}]);
});

router.get('/cargo', function(req, res, next) {
  res.json({"buy":5500.0,"sell":8125.0,"hold":-2625.0});
});


module.exports = router;
