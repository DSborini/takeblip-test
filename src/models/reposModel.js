const api = require('./github');

const getRepos = async (info) => {
  // const { qnt, lang } = info;
    const repos = await api.get('orgs/takenet/repos?sort=created&direction=asc&per_page=5');
    return repos;
};

module.exports = {
  getRepos,
};
