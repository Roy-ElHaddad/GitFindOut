const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const passwordComplexity = require('joi-password-complexity'); // Import passwordComplexity

const userSchema = new mongoose.Schema({
    uniqueId: String,
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
    // rubriques: [{
    //      type: mongoose.Schema.Types.ObjectId, ref: 'Rubrique' 
    //     }]
    });

    userSchema.methods.generateAuthToken = function() {
        const token = jwt.sign({_id:this._id}, process.env.JWT_PRIVATE_KEY, {expiresIn: '7d'});
        return token;
    }

    userSchema.pre('save', async function (next) {
        const emailParts = this.email.split('@');
        const uniqueIdBase36 = (Date.now() - new Date('2020-01-01').getTime()).toString(36);
        this.uniqueId = emailParts[0][0] + uniqueIdBase36 + emailParts[0][emailParts[0].length - 1];
        next();
    });

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