const express = require('express');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', async (req, res, next) => {
  res.json({
    message: 'Welcome to NODE DB SPrint Challenge',
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
