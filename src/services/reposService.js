const reposModel = require('../models/reposModel');

const genericError = {
  err: {
    status: 500,
    message: {
      message: 'Erro na requisição ao GitHub',
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
    const info = { name, description, language, avatar_url };
    return info;
  });
  return filter;
};

// Source: https://forum.blip.ai/t/acessando-dados-de-um-array-de-objetos/
const arrayToDictionary = (array) => {
  const dictionary = {};
  array.forEach((value, index) => {
      dictionary[index] = value;
  });
  return dictionary;
};

const filterByLang = (repos, lang) => {
  const essentialRepos = getEssentialInfo(repos);
  const filter = essentialRepos.filter(({ language }) => language === lang);
  if (filter.length < 1) return langNotFoundError;
  return arrayToDictionary(filter);
};

const getRepos = async (info) => {
  const { lang } = info;
  const repos = await reposModel.getRepos(info);
  try {
    return {
      resp: {
        status: 200,
        content: filterByLang(repos.data, lang),
      },
    };
  } catch (e) { return genericError; }
};

module.exports = {
  getRepos,
};