const Router = require('express');
const router = new Router();

router.post('/registration');
router.post('/login');
router.get('/auth', (req, res) => {
  res.json({ message: 'work 123' });
});

module.exports = router;
