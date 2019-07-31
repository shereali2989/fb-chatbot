const express = require('express');
const bodyParser = require('body-parser');
const verifyWebhook = require('./verify-webhook');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(3000, () => console.log('Express server is listening on port 3000'));

app.get('/', verifyWebhook);

// console.log("hi");
