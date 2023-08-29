const express = require('express');
const router = express.Router();
const {User} = require('../models/user');
const Rubrique = require('../models/rubrique');
const jwt = require('jsonwebtoken');




router.post('/', authenticate, async (req, res) => {
    try {
            const userId = req.user._id
            const currentUser = await User.findById(userId)
            const ownerId = currentUser.uniqueId
            console.log(req.body)
            const { title, key } = req.body;
            
            // Create and save a rubrique
            let newRubrique = await Rubrique.create({ title, key , ownerId});
            console.log(newRubrique)
            newRubrique = await Rubrique.find({ownerId:ownerId}).exec();
            console.log("testing" + newRubrique)
            res.status(201).json({ message: 'Rubrique created successfully' , data: newRubrique});
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
