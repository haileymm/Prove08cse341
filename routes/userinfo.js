const express = require('express');

const userController = require('../controllers/userinfo');

const router = express.Router();

// GET /professional
router.get('/professional', userController.getInfo);

// POST /feed/post
// router.post('/postinfo', userController.postInfo);

module.exports = router;