//modules import
import dotenv from 'dotenv';
import express from 'express';

dotenv.config();
const app = express();
const PORT = process.env.PORT;

/**
 * @api {get} /api/hello Hello World
 * @apiName Hello
 * @apiGroup Hello
 *
 * @apiParam {}
 * @apiParam {}
 * @apiSuccess {Object} Hello World.
 */
app.get('/v1/hello', (req, res) => {
  res.json({ message: 'Hello World' });
});
app.get('/v1/hello2', (req, res) => {
  res.json({ message: 'Hello World2' });
});

// Handle 404 - Keep this as a last route
app.use((req, res) => {
  res.status(404).send('NOT FOUND');
});

//running the server
app.listen(PORT, () => {
  console.log('Running on ', PORT);
});
