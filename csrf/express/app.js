require('dotenv').config();
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
var logger = require('morgan');
const cors = require('cors');
var session = require('express-session');
var paymentRouter = require('./routes/payment');
var sessionRouter = require('./routes/session');
const csurf = require("csurf");

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
  secret: process.env.SESSION_SECRET,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24
  }
}));

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Origin', "http://localhost:3002");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
  next();
});

const csrfProtection = csurf({ cookie: true });
app.use(csurf({ cookie: true }));









app.use(express.static(path.join(__dirname, 'public')));
app.use('/session', sessionRouter);
app.use('/payment', paymentRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({ error: err })
});

module.exports = app;
