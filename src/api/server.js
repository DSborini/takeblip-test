require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const { PORT = 3000 } = process.env;

app.use(bodyParser.json());

app.get('/', (request, response) => {
  response.send();
});

app.listen(PORT, () => console.log(`Conectado na porta ${PORT}`));