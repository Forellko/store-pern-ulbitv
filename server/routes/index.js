const Router = require('express');
const router = new Router();
const brandRouter = require('./brand.router');
const deviceRouter = require('./device.router');
const typeRouter = require('./type.router');
const userRouter = require('./user.router');

router.use('/brand', brandRouter);
router.use('/type', typeRouter);
router.use('/device', deviceRouter);
router.use('/user', userRouter);

module.exports = router;
