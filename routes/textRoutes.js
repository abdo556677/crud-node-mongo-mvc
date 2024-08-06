const express = require('express')
const router = express.Router();
const textControllers = require('../controllers/textControllers')

router.get('/home',textControllers.readTexts);
router.get('/create',textControllers.createText);
router.post('/create',textControllers.createText);
router.get('/show/:id',textControllers.readText);
router.get('/edit/:id',textControllers.updateText);
router.post('/edit/:id',textControllers.updateText);
router.get('/delete/:id',textControllers.deleteText);

module.exports = router;
