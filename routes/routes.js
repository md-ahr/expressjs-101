const router = require('express').Router();
const fs = require('fs');

const localMiddleware = require('../middlewares/localMiddleware');

const { homeController, aboutController, helpController } = require('../controllers/controllers');

router.get('/', homeController);

router.get('/about', localMiddleware, aboutController);

router.get('/help', helpController);

module.exports = router;
