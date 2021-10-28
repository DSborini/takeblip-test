const defaultResp = async (req, res) => {
  const content = { 
    message: 'API da Lora, verifique como usar em: "https://github.com/DSborini/takeblip-test"',
  };
  return res.status(200).json(content);
};

module.exports = {
  defaultResp,
};