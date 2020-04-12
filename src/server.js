/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
const { router } = require('./routes/main');

const app = express();

// middlewares
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PORT = 3000 || process.env.PORT;

app.get('/', (req, res) => {
  res.json({ message: 'success welcome to api/v1 version' });
});
app.use('/api/v1/', router);
// 404 Error
app.get('*', (req, res) => {
  res.json({
    message: '404 Route Not found'
  });
});
app.listen(PORT, () => console.log(`server started on http://localhost:${PORT}`));
