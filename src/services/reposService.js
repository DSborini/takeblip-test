const Joi = require('joi');
// const { parse, stringify } = require('flatted');
const reposModel = require('../models/reposModel');

const genericError = {
  err: {
    status: 500,
    message: {
      message: 'Opa, alguma coisa deu errado :(',
    },
} };

const langNotFoundError = {
  err: {
    status: 404,
    message: {
      message: 'Desculpe, nenhum repositório foi encontrado, ou as especificações estão inválidas',
    },
  },
};

const getEssentialInfo = (repos) => {
  const filter = repos.map(({ name, description, language, owner: { avatar_url } }) => {
    console.log('nao lint');
    return { name, description, language, avatar_url };
  });
  return filter;
};

const filterByLang = (repos, lang) => {
  const essentialRepos = getEssentialInfo(repos);
  const filter = essentialRepos.filter(({ language }) => language === lang);
  if (filter.length < 1) return langNotFoundError;
  return {
    resp: {
      status: 200,
      content: filter,
    },
  };
};

const getRepos = async (info) => {
  const { lang } = info;
  console.log(lang);
  try {
    const repos = await reposModel.getRepos(info);
    return filterByLang(repos.data, lang);
  } catch (e) { return genericError; }
};

module.exports = {
  getRepos,
};