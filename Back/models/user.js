const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const passwordComplexity = require('joi-password-complexity'); // Import passwordComplexity

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
        },
    email : { 
        type : String,
        required : true
        },
    password : {
        type : String,
        required : true
        },
    rubriques: [{
         type: mongoose.Schema.Types.ObjectId, ref: 'Rubrique' 
        }]
    });

    userSchema.methods.generateAuthToken = function() {
        const token = jwt.sign({_id:this._id}, process.env.JWT_PRIVATE_KEY, {expiresIn: '7d'});
        return token;
    }

    const User = mongoose.model('User', userSchema);

    const validate = (data) => {
        
        const schema = Joi.object({
            name:Joi.string().required().label('First Name'),
            email: Joi.string().required().label('Email'),
            password: passwordComplexity().required().label('Password')
            });
        return schema.validate(data);
    };
    module.exports = {User, validate};