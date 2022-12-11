const { Type } = require('../models/models');
const ApiError = require('../error/api.error');

const create = async (req, res) => {
  const { name } = req.body;
  console.log(name);
  const type = await Type.create({ name });
  return res.json(type);
};

const getAll = async (req, res) => {
  const types = await Type.findAll();
  return res.json(types);
};

module.exports = { create, getAll };
