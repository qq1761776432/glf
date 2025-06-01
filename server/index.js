import company from './company.js';

const express = require('express');
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/company', company);



module.exports = app;