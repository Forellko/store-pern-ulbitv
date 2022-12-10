const ApiError = require('../error/api.error');

const registration = async (req, res) => {};

const login = async (req, res) => {};

const check = async (req, res, next) => {
  const { id } = req.query;

  if (!id) return next(ApiError.badRequest('id undefined'));

  res.json(id);
};

module.exports = { registration, login, check };
