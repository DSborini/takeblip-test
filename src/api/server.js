require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const reposController = require('../controllers/reposController');

// const path = require('path');

const app = express();
const { PORT = 3000 } = process.env;

app.use(bodyParser.json());

// const { org, sort, dir, qnt }
app.get('/repos/:org/:sort/:dir/:qnt/:lang', reposController.getRepos);

app.listen(PORT, () => console.log(`Conectado na porta ${PORT}`));