const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }],
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    progress: {
        type: Object,
        default: {}
    },
    favoriteResources: {
        type: [String],
        default: []
    },
    solvedQuestions: {
        type: [String],
        default: []
    },
    interestedRoles: {
        type: [String],
        default: []
    }
});

module.exports = mongoose.model('User', UserSchema);