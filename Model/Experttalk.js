const mongoose = require('mongoose');

const talkSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        
    },
    speaker: {
        type: String,
        required: true,
        
    },
    date: {
        type: String,
        required: true
    }
});

// Create a model for expert talks
const Talk = mongoose.model('Talk', talkSchema);
module.exports = {Talk};