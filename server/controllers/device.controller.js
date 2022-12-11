const uuid = require('uuid')

const create = async (req, res) => {
  const { name, price, brandId, typeId, info } = req.body;
  const {img} = req.files
  let fileName = 
};

const getAll = async (req, res) => {};

const getOne = (req, res) => {};

module.exports = { create, getAll, getOne };
