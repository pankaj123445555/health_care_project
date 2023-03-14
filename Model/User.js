const mongoose = require('mongoose');

// this is the user schema 

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        
    },
   name : {
        type: String,
        required: true,
        
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: String,
         
    }

});

// Create a model for user
const user = mongoose.model('user', UserSchema);
module.exports = {user};