const create = async (req, res) => {
  const { name, price, brandId, typeId, info } = req.body;
  const {img} = req.files
};

const getAll = async (req, res) => {};

const getOne = (req, res) => {};

module.exports = { create, getAll, getOne };
