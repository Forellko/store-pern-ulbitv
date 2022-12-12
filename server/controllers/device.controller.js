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
      img: fileName,
    });

    return res.json(device);
  } catch (e) {
    next(ApiError.badRequest(e.message));
  }
};

const getAll = async (req, res) => {
  const { brandId, typeId } = req.body;
  let devices;

  if (!brandId && !typeId) {
    devices = await Device.findAll();
  }
  if (brandId && !typeId) {
    devices = await Device.findAll({ where: { brandId } });
  }
  if (!brandId && typeId) {
    devices = await Device.findAll({ where: { typeId } });
  }
  if (brandId && typeId) {
    devices = await Device.findAll({ where: { typeId, brandId } });
  }

  return res.json(devices);
};

const getOne = (req, res) => {};

module.exports = { create, getAll, getOne };
