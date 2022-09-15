const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const intitializeDBConnection = require('./db/db.connnect');
const { errorHandler } = require('./middlewares/errorHandler');
const app = express();

intitializeDBConnection();

app.use(cors());
app.use(bodyParser.json());


app.use(errorHandler);