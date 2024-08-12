const { Schema , model } = require("mongoose");

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        require: true
    },
    number: {
        type: String,
        require: true
    },
    createdAt: {
       type: Date,
       require: true
    }
});

module.exports = model('User',userSchema);