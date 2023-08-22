const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Rubrique = require('../models/rubrique');
const jwt = require('jsonwebtoken');


router.post('/', authenticate, async (req, res) => {
   const userId = req.user._id
   console.log(req.user._id)
   console.log(userId)
   console.log(req.user.iat)
    try {
        console.log(req.body)
        const key  = req.body.key;
        const ownerId = userId.toString()
        // Delete a rubrique and send the rest 
        await Rubrique.deleteOne({  key : key , ownerId : ownerId});
        const newRubrique = await Rubrique.find({ownerId:ownerId}).exec();
        console.log(newRubrique)
        res.status(201).json({ message: 'Rubrique removed successfully' , data: newRubrique});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

function authenticate(req, res , next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1] ;
    if (token == null) return res.sendStatus(401)
    jwt.verify(token, process.env.JWT_PRIVATE_KEY , (err , user) =>{
        if (err) return res.sendStatus(403)
        req.user = user
        next()
    })
}

module.exports = router;
