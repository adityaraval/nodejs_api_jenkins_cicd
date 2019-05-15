//modules import
const dotenv = require('dotenv');
const express = require('express');

const adder = require('./services/adder');
const subtractor = require('./services/subtractor');
const multiplier = require('./services/multiplier');
const divider = require('./services/divider');

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use('/coverage', express.static('coverage/lcov-report'));
app.use('/docs', express.static('docs'));

app.get('/', (req, res) => {
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
app.get('/add', function(req, res) {
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
app.get('/subtract', function(req, res) {
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
app.get('/multiply', function(req, res) {
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
app.get('/divide', function(req, res) {
  res.send(handleCalculatorRequest(divider.divide, req.query.numberA, req.query.numberB));
});

// Handle 404 - Keep this as a last route
app.use((req, res) => {
  res.status(404).send('NOT FOUND');
});

//running the server
app.listen(PORT, () => {
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
