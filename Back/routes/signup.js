const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/', (req, res) => {
	res.render('signup');
});

router.post('/', async (req, res) => {
	const pass = req.body.password;
	const confirmPassword = req.body.confirmPassword;
	if (pass === confirmPassword) {
		// 	res.render('signup', { errorMessage: 'Passwords do not match' });
		// } else {
		const user = new User({
			name: req.body.name,
			email: req.body.email,
			password: req.body.password,
		});
    }
    else {
        res.render('signup',{ errorMessage: 'Password dont match' });
	}
	try {
		const newUser = await user.save();
	} catch {
		res.render('signup', { errorMessage: 'Failed' });
	}
});

module.exports = router;
