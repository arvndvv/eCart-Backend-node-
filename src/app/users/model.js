const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;

//define schema
const Schema = mongoose.Schema;
const userSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    email: {
        type: String,
        trim: true,
        required: true
    },
    password: {
        type: String,
        trim: true,
        required: true
    },
    role: {
        type: String,
        trim: true,
        required: true
    }
});

//hash user password before saving into db
userSchema.pre('save', function(next) {
    this.password = bcrypt.hashSync(this.password, saltRounds);
    next();
})

module.exports = mongoose.model('User', userSchema);