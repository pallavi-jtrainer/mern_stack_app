const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    photo: {
        type: String
    }
});

UserSchema.pre('save', function(next) {
    console.log(this);
    next();
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
