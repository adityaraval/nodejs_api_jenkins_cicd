'use strict';

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//modules import
_dotenv2.default.config();
var app = (0, _express2.default)();
var PORT = process.env.PORT;

/**
 * @api {get} /api/hello Hello World
 * @apiName Hello
 * @apiGroup Hello
 *
 * @apiParam {}
 * @apiParam {}
 * @apiSuccess {Object} Hello World.
 */
app.get('/v1/hello', function (req, res) {
  res.json({ message: 'Hello World' });
});
app.get('/v1/hello3', function (req, res) {
  res.json({ message: 'Hello World3' });
});

// Handle 404 - Keep this as a last route
app.use(function (req, res) {
  res.status(404).send('NOT FOUND');
});

//running the server
app.listen(PORT, function () {
  console.log('Running on ', PORT);
});
//# sourceMappingURL=server.js.map