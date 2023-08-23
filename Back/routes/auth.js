const express = require('express');
const router = express.Router();
const {User} = require('../models/user');
const Joi = require('joi');
const bcrypt = require('bcrypt');


router.post('/', async(req, res) => {
	try {
		const{error} = validate(req.body);
		console.log(req.body );
		if (error) 
			return res.status(400).send(error.details[0].message);
		const user = await User.findOne({email : req.body.email});
		console.log(user)
		if(!user){
			console.log("User not found")
			return res.status(404).send({message : 'User not found'});}
		const validPassword = await bcrypt.compare(req.body.password, user.password);

		if (!validPassword) 
		return res.status(401).send({message : 'Invalid email or password'});

		const token = user.generateAuthToken();
		res.status(200).send({token:token , message : 'Logged in successfully'});
	} catch (error) {
		res.status(500).send({message : 'Internal server error'});
		console.log(error);
	}
});

const validate = (data) => {
	const schema = Joi.object({
		email : Joi.string().email().required().label('Email'),
		password : Joi.string().required().label('Password')
	});
	return schema.validate(data);
}


module.exports = router;
