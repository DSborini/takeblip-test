const Joi = require('joi');
// const { parse, stringify } = require('flatted');
const reposModel = require('../models/reposModel');

const genericError = {
  err: {
    status: 500,
    message: {
      message: 'Undefined error',
    },
} };

const getRepos = async (info) => {
  try {
    const repos = await reposModel.getRepos(info);
    return {
      resp: {
        status: 200,
        content: repos.data,
      },
    };
  } catch (e) { return genericError; }
};

module.exports = {
  getRepos,
};