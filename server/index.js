const express = require('express');
const cors = require('cors');
const request = require('request');
const querystring = require('querystring');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const path = require('path');
const bodyparser = require('body-parser');
const router = require('./router.js')

const app = express();

app.use('/', express.static(path.join(__dirname, '../public')))
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(bodyparser.json());
app.use(morgan('dev'));
app.use(cookieParser());

const port = 3000;

app.use('/api', router);

app.listen(port, () => {
  console.log(`server is listening on http://localhost:${port}`)
});

// app.get('/', (req, res) => {
//   res.send('hello world');
// })