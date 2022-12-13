const ApiError = require('../error/api.error');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User, Basket } = require('../models/models');

const generateJWT = (id, email, role) => {
  return jwt.sign({ id, email, role }, process.env.SECRET_KEY, {
    expiresIn: '24h',
  });
};

const registration = async (req, res, next) => {
  const { email, password, role } = req.body;
  if (!email || !password) {
    return next(ApiError.badRequest('Некорректный email или password'));
  }

  const candidate = await User.findOne({ where: { email } });

  if (candidate) {
    return next(
      ApiError.badRequest('Пользователь с таким email уже существует')
    );
  }

  const hashPassword = await bcrypt.hash(password, 5);
  const user = await User.create({ email, role, password: hashPassword });
  console.log(user, 'user');
  const basket = await Basket.create({ userId: user.dataValues.id });

  const token = generateJWT(user.id, user.email, user.role);

  return res.json({ token });
};

const login = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });

  if (!user) {
    return next(ApiError.internal('Пользователь не найден'));
  }

  let comparePassword = bcrypt.compareSync(password, user.password);

  if (!comparePassword) {
    return next(ApiError.internal('Указан неверный пароль'));
  }

  const token = generateJWT(user.id, user.email, user.role);

  return res.json({ token });
};

const check = async (req, res, next) => {};

module.exports = { registration, login, check };
