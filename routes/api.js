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

router.get('/order/:id/cargo/:cointype/:end_date', function(req, res, next) {
  var id = req.params.id;
  var data;
  switch(id){
    case '13552': data={"buy":5500.0,"sell":8125.0,"hold":-2625.0};
    break;
    case '13434': data={"buy":5600.0,"sell":8125.0,"hold":-2525.0};
    break;
    case '13435': data={"buy":5700.0,"sell":8125.0,"hold":-2425.0};
    break;
    case '13553': data={"buy":5800.0,"sell":8125.0,"hold":-2325.0};
    break;
    case '13436': data={"buy":5900.0,"sell":8125.0,"hold":-2225.0};
    break;
  }
  res.json(data);
});

router.get('/order/:id/:cointype/:start_date/:end_date', function(req, res, next) {
  var id = req.params.id;
  var data;
  switch(id){
    case '13552': data=[{"user_id":13552,"side":"SELL","price":0.1000000000000000,"volume":2625.0000000000000000,"avg_price":0.1000000000000000,"deal_volume":2625.0000000000000000,"status":2,"ctime":"2018-09-16T23:58:06+08:00","mtime":"2018-09-16T23:59:59+08:00"},
      {"user_id":13552,"side":"BUY","price":0.0450000000000000,"volume":5500.0000000000000000,"avg_price":0.0450000000000000,"deal_volume":5500.0000000000000000,"status":1,"ctime":"2018-09-15T00:02:59+08:00","mtime":"2018-09-17T02:43:05+08:00"},
    {"user_id":13552,"side":"BUY","price":0.0450000000000000,"volume":5500.0000000000000000,"avg_price":0.0450000000000000,"deal_volume":5500.0000000000000000,"status":5,"ctime":"2018-09-17T00:02:59+08:00","mtime":"2018-09-17T02:43:05+08:00"}];
    break;
    case '13434': data=[{"user_id":13434,"side":"SELL","price":0.2000000000000000,"volume":2625.0000000000000000,"avg_price":0.1000000000000000,"deal_volume":2625.0000000000000000,"status":2,"ctime":"2018-09-16T23:58:06+08:00","mtime":"2018-09-16T23:59:59+08:00"},
    {"user_id":13434,"side":"BUY","price":0.0450000000000000,"volume":5500.0000000000000000,"avg_price":0.0450000000000000,"deal_volume":5500.0000000000000000,"status":2,"ctime":"2018-09-17T00:02:59+08:00","mtime":"2018-09-17T02:43:05+08:00"}];
    break;
    case '13435': data=[{"user_id":13435,"side":"SELL","price":0.3000000000000000,"volume":2625.0000000000000000,"avg_price":0.1000000000000000,"deal_volume":2625.0000000000000000,"status":2,"ctime":"2018-09-16T23:58:06+08:00","mtime":"2018-09-16T23:59:59+08:00"},
    {"user_id":13435,"side":"BUY","price":0.0450000000000000,"volume":5500.0000000000000000,"avg_price":0.0450000000000000,"deal_volume":5500.0000000000000000,"status":2,"ctime":"2018-09-17T00:02:59+08:00","mtime":"2018-09-17T02:43:05+08:00"}];
    break;
    case '13553': data=[{"user_id":13553,"side":"SELL","price":0.4000000000000000,"volume":2625.0000000000000000,"avg_price":0.1000000000000000,"deal_volume":2625.0000000000000000,"status":2,"ctime":"2018-09-16T23:58:06+08:00","mtime":"2018-09-16T23:59:59+08:00"},
    {"user_id":13553,"side":"BUY","price":0.0450000000000000,"volume":5500.0000000000000000,"avg_price":0.0450000000000000,"deal_volume":5500.0000000000000000,"status":2,"ctime":"2018-09-17T00:02:59+08:00","mtime":"2018-09-17T02:43:05+08:00"}];
    break;
    case '13436': data=[{"user_id":13436,"side":"SELL","price":0.5000000000000000,"volume":2625.0000000000000000,"avg_price":0.1000000000000000,"deal_volume":2625.0000000000000000,"status":2,"ctime":"2018-09-16T23:58:06+08:00","mtime":"2018-09-16T23:59:59+08:00"},
    {"user_id":13436,"side":"BUY","price":0.0450000000000000,"volume":5500.0000000000000000,"avg_price":0.0450000000000000,"deal_volume":5500.0000000000000000,"status":2,"ctime":"2018-09-17T00:02:59+08:00","mtime":"2018-09-17T02:43:05+08:00"}];
    break;
  }
  res.json(data);
});




module.exports = router;
