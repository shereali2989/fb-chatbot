const express = require('express');
const bodyParser = require('body-parser');
const verifyWebhook = require('./verify-webhook');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(process.env.PORT || 5000, () => console.log('Express server is listening on port 5000'));

app.get('/', verifyWebhook);

// console.log("hi");
