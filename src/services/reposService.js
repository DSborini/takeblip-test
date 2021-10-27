const Joi = require('joi');
const reposModel = require('../models/reposModel');

const genericError = {
  err: {
    status: 500,
    message: {
      message: 'Undefined error',
    },
} };

const getRepos = async (info) => {
  const repos = reposModel.getRepos(info);
  try {
    return {
      resp: {
        status: 200,
        content: repos,
      },
    };
  } catch (e) { return genericError; }
};

module.exports = {
  getRepos,
};