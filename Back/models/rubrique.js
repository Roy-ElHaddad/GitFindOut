const mongoose = require('mongoose');

const rubricSchema = new mongoose.Schema({
    title : String,
    key : String,
    ownerId : String
});

module.exports = mongoose.model('Rubric', rubricSchema);