const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Rubrique = require('../models/rubrique');
const jwt = require('jsonwebtoken');

router.get('/', async (req, res) => {
    try {
        const ownerId = req.query.ownerId;
        const rubKey = req.query.rubKey;
        console.log(`Received ownerId: ${ownerId}`);
        console.log(`Received rubKey: ${rubKey}`); 
        const newInfo = await Rubrique.find({
            ownerId: ownerId,
            key: rubKey
        }).exec();
        console.log(newInfo[0].title)
        res.status(201).json({ message: 'Info fetched successfully' , data: newInfo[0].title });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


module.exports = router;
