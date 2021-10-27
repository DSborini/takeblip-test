const api = require('./github');

const getRepos = async (info) => {
    const { org, sort, dir, qnt } = info;
    const repos = await api.get(`orgs/${org}/repos?sort=${sort}&direction=${dir}&per_page=${qnt}`);
    return repos;
};

module.exports = {
  getRepos,
};
