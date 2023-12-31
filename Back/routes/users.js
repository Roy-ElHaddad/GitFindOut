const express = require('express');
const router = express.Router();
const {User, validate} = require('../models/user');
const bcrypt = require('bcrypt');

router.post('/', async(req, res) => {
	console.log(req.body);
	try {
		const {error} = validate(req.body);
		if (error)
			return res.status(400).send(error.details[0].message);

		const user = await User.findOne({email: req.body.email});
		if (user)
			return res.status(409).send({message :'Utilisateur déjà existant'});
		const salt = await bcrypt.genSalt(Number(process.env.SALT));
		const hashPassword = await bcrypt.hash(req.body.password, salt);

		await new User({...req.body, password: hashPassword}).save();
		res.status(201).send({message : 'Utilisateur créé'});
	} catch (error) {
		console.log(error);
		res.status(500).send({message : "Internal server error"});
	}
});


module.exports = router;
