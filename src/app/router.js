const router = require('express').Router();

const indexController = require('./controllers/index.controller');

// Index controller
router.get('/', indexController.index);

// Match all
router.all('*', (req, res) => {
  res.status(404).json({
    message: 'No path found!',
  });
});

module.exports = router;
