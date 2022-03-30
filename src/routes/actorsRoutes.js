const express = require('express');
const {body, check} = require('express-validator')
const router = express.Router();
const actorsController = require('../controllers/actorsController');

router.get('/actors', actorsController.list);
router.get('/actors/detail/:id', actorsController.detail);


module.exports = router