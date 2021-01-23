const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const bodyparser = require('body-parser');

const app = express();

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));
app.use(bodyparser.json());

const port = 3000;

app.listen(port, () => {
  console.log(`server is listening on http://localhost:${port}`)
});

app.get('/', (req, res) => {
  res.send('hello world');
})