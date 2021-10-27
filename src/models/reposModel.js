const api = require('./github');

const getRepos = async (info) => {
    // takenet, created, asc, 30
    const { org, sort, dir, qnt } = info;
    const repos = await api.get('orgs/takenet/repos?sort=created&direction=asc&per_page=50');
    return repos;
};

module.exports = {
  getRepos,
};
