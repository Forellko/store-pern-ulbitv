const uuid = require('uuid');
const path = require('path');
const { Device } = require('../models/models');
const ApiError = require('../error/api.error');

const create = async (req, res, next) => {
  try {
    const { name, price, brandId, typeId } = req.body;
    console.log(req.body);
    const { img } = req.files;
    let fileName = uuid.v4() + '.jpg';
    img.mv(path.resolve(__dirname, '..', 'static', fileName));

    const device = await Device.create({
      name,
      price,
      brandId,
      typeId,
      img: fileName,
    });

    return res.json(device);
  } catch (e) {
    next(ApiError.badRequest(e.message));
  }
};

const getAll = async (req, res) => {
  let { brandId, typeId, limit, page } = req.query;

  page = page || 1;
  limit = limit || 9;

  const offset = page * limit - limit;

  let devices;

  if (!brandId && !typeId) {
    devices = await Device.findAll({ limit, offset });
  }
  if (brandId && !typeId) {
    devices = await Device.findAll({ where: { brandId, limit, offset } });
  }
  if (!brandId && typeId) {
    devices = await Device.findAll({ where: { typeId, limit, offset } });
  }
  if (brandId && typeId) {
    devices = await Device.findAll({
      where: { typeId, brandId, limit, offset },
    });
  }

  return res.json(devices);
};

const getOne = (req, res) => {};

module.exports = { create, getAll, getOne };
