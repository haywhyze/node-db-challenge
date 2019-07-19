const express = require('express');
const helmet = require('helmet');
const routes = require('./routes');

const app = express();
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', async (req, res, next) => {
  res.json({
    message: 'Welcome to NODE DB SPrint Challenge',
  });
});

app.use('/api', routes);

app.all('*', (req, res) => {
  res.status(404).send({
    message: 'The resource you are looking for does not exist',
  });
});

app.use((err, req, res, next) => {
  console.error('ERROR:', err);
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
});

app.listen(4000, () => {
  console.log('listening on 4000');
});
