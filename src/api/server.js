require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const reposController = require('../controllers/reposController');
const defaultController = require('../controllers/defautlController');

const app = express();
const { PORT = 3000 } = process.env;

app.use(bodyParser.json());

app.get('/', defaultController.defaultResp);

app.get('/repos/:org/:sort/:dir/:qnt/:lang', reposController.getRepos);

app.listen(PORT, () => console.log(`Conectado na porta ${PORT}`));