const uuid = require('uuid');
const path = require('path');
const { Device, DeviceInfo } = require('../models/models');
const ApiError = require('../error/api.error');

const create = async (req, res, next) => {
  try {
    let { name, price, brandId, typeId, info } = req.body;
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

    if (info) {
      info = JSON.parse(info);
      info.forEach((i) => {
        DeviceInfo.create({
          title: i.title,
          description: i.description,
          deviceId: device.id,
        });
      });
    }

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
    devices = await Device.findAndCountAll();
  }
  if (brandId && !typeId) {
    devices = await Device.findAndCountAll({
      where: { brandId },
    });
  }
  if (!brandId && typeId) {
    devices = await Device.findAndCountAll({
      where: { typeId },
    });
  }
  if (brandId && typeId) {
    devices = await Device.findAndCountAll({
      where: { typeId, brandId },
    });
  }

  return res.json(devices);
};

const getOne = async (req, res) => {
  const { id } = req.params;
  const device = await Device.findOne({
    where: {
      id,
    },
    include: [{ model: DeviceInfo, as: 'info' }],
  });

  return res.json(device);
};

module.exports = { create, getAll, getOne };
