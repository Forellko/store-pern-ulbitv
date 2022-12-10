const { Type } = require('../models/models');
const ApiError = require('../error/api.error');

const create = async (req, res) => {
  const { name } = req.body;
  const type = await Type.create({ name });
  return res.json(type);
};

const getAll = async (req, res) => {};

module.exports = { create, getAll };
