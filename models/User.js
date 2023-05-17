const mongoose = require("mongoose")
const userSchema = mongoose.Schema({
    firstname: {
        type: String,
    },
    lastname: {
        type: String,
    },
    mobile: {
        required: true,
        type: String,
        match: [/^[6-9]{1}[0-9]{9}$/]
    },
    address: {
        type: String,

    }
}, { timestamps: true })

module.exports = mongoose.model("user", userSchema)