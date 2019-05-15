'use strict';

//modules import
var dotenv = require('dotenv');
var express = require('express');

var adder = require('./services/adder');
var subtractor = require('./services/subtractor');
var multiplier = require('./services/multiplier');
var divider = require('./services/divider');

dotenv.config();
var app = express();
var PORT = process.env.PORT;

app.use('/coverage', express.static('coverage/lcov-report'));
app.use('/docs', express.static('docs'));

app.get('/', function (req, res) {
  res.json({ message: 'Hello World' });
});

/**
 * @api {get} /add Add Two Numbers
 * @apiName Add Two Numbers
 * @apiGroup Adder
 *
 * @apiParam {numberA} numberA NumberA.
 * @apiParam {numberB} numberB NumberB.
 * @apiSuccess {Object} Addition Addition Of Two Numbers.
 */
app.get('/add', function (req, res) {
  res.send(handleCalculatorRequest(adder.add, req.query.numberA, req.query.numberB));
});

/**
 * @api {get} /subtract Subtract Two Numbers
 * @apiName Subtract Two Numbers
 * @apiGroup Subtract
 *
 * @apiParam {numberA} numberA NumberA.
 * @apiParam {numberB} numberB NumberB.
 * @apiSuccess {Object} Subtraction Subtraction Of Two Numbers.
 */
app.get('/subtract', function (req, res) {
  res.send(handleCalculatorRequest(subtractor.subtract, req.query.numberA, req.query.numberB));
});

/**
 * @api {get} /multiply Multipy Two Numbers
 * @apiName Multipy Two Numbers
 * @apiGroup Multipy
 *
 * @apiParam {numberA} numberA NumberA.
 * @apiParam {numberB} numberB NumberB.
 * @apiSuccess {Object} Multiplication  Multiplication Of Two Numbers.
 */
app.get('/multiply', function (req, res) {
  res.send(handleCalculatorRequest(multiplier.multiple, req.query.numberA, req.query.numberB));
});

/**
 * @api {get} /divide Divide Two Numbers
 * @apiName Divide Two Numbers
 * @apiGroup Divide
 *
 * @apiParam {numberA} numberA NumberA.
 * @apiParam {numberB} numberB NumberB.
 * @apiSuccess {Object} Division Division Of Two Numbers.
 */
app.get('/divide', function (req, res) {
  res.send(handleCalculatorRequest(divider.divide, req.query.numberA, req.query.numberB));
});

// Handle 404 - Keep this as a last route
app.use(function (req, res) {
  res.status(404).send('NOT FOUND');
});

//running the server
app.listen(PORT, function () {
  console.log('Running on ', PORT);
});

module.exports = app;

function handleCalculatorRequest(func, numberA, numberB) {
  var numberA = parseInt(numberA);
  var numberB = parseInt(numberB);
  var result = func(numberA, numberB);

  if (result) {
    return result.toString();
  }

  throw 'Calculation Error';
}
//# sourceMappingURL=server.js.map