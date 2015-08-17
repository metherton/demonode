var express = require('express');
var router = express.Router();
var twilio = require('twilio');

// Load configuration information from system environment variables.
var TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID,
    TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN,
    TWILIO_NUMBER = process.env.TWILIO_NUMBER;

// Create an authenticated client to access the Twilio REST API
var client = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/sms', function(req, res, next) {
  res.render('sendsms', { title: 'Send SMS' });
});

router.post('/sms', function(req, res, next) {

  //res.header("Access-Control-Allow-Origin", "*");
  //res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE, OPTIONS');
  //res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");


  client.sendSms({
    to: req.param('phone'),
    from: TWILIO_NUMBER,
    body: req.param('message')
  }, function(err, data) {
    res.send('Message sendsms1 is really inbound yo !');
  });
});

module.exports = router;
