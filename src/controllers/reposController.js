const reposService = require('../services/reposService');

const getRepos = async (req, res) => {
  const repos = await reposService.getRepos(req.params);
  if (repos.err) return res.status(repos.err.status).json(repos.err.message);
  return res.status(repos.resp.status).json(repos.resp.content);
};

module.exposts = {
  getRepos,
};