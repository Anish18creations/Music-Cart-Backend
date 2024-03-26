const mongoose = require("mongoose");

const subSchema = new mongoose.Schema({
    feedbacktype: {
        type: String,
    },
    feedbackcontent: {
        type: String,
    }
});

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    mobile: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    feedback: [subSchema]
});

module.exports = mongoose.model("User", userSchema);