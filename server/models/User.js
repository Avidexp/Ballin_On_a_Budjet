const mongoose = require('mongoose')
const {Schema} = mongoose;


const userSchema = new Schema({
    googleId: String,
    firstName: String,
    lastName: String,
    displayName: String,
    email: String,
    credits: {
        type: Number,
        default: 0
    }
});

// Store data in the users collection using the above schema
mongoose.model('users', userSchema);