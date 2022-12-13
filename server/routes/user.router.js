const Router = require('express');
const router = new Router();
const authMiddleware = require('../middleware/Auth.middleware');

const userController = require('../controllers/user.controller');

router.post('/registration', userController.registration);
router.post('/login', userController.login);
router.get('/auth', authMiddleware, userController.check);

module.exports = router;
