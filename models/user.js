//1. setup mongodb mongoose
const mongoose = require('mongoose')
//2. Setup schema for the user data
const userSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    gender: String,
    email: String,
    mobile: String,
    address: String,
    about: String,
    status: {
        type: Boolean,
        default: false
    }
})
//4. Setup the model
const user = mongoose.model("user", userSchema)
//5. Export the model
module.exports = user