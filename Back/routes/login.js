const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/', (req, res) => {
	res.render('login');
});

router.post('/', (req, res) => {
	res.send(req.body.username);
});

router.get('/signUp', (req, res) => {
	res.render('login/signUp');
});

// router.post('/register', (req, res) => {
// 	res.send('creat');
// });

module.exports = router;
