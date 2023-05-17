const User = require("../models/User");


// Create User Controller
// ^[6-9]{1}[0-9]{9}$
exports.addUserData = async (req, res) => {

    console.log(req.body)
    try {
        const result = await User.create(req.body)
        res.status(200).json({
            success: true,
            message: "Succesfully created",
            data: result
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            error,
            success: false,
            message: "Please Provide Name or Mobile Number",

        })
    }
}

// Get All User Controller
exports.getUsers = async (req, res) => {
    try {
        const result = await User.find()
        res.status(200).json({
            success: true,
            message: "Succesfully find all users",
            result
        })
    } catch (error) {
        console.log(error)
        res.status(404).json({
            success: false,
            message: "not found",

        })
    }
}

// Update User Controller
exports.updateUsers = async (req, res) => {
    console.log(req.params);
    console.log(req.body);
    try {
        const { id } = req.params
        const result = await User.findByIdAndUpdate(id, req.body, { new: true })
        console.log(result);
        res.json({
            message: "user updated",
            result
        })
    } catch (error) {
        res.status(400).json({
            message: "ERROR" + error.message
        })
    }
}

// Delete User Controller
exports.deleteUser = async (req, res) => {
    try {
        const { id } = req.params
        await User.findByIdAndDelete(id)
        res.json({
            message: "User Deleted",

        })
    } catch (error) {
        res.status(400).json({
            message: "ERROR" + error.message
        })
    }
}

// Destroy All User Controller
exports.destroyAllUsers = async (req, res) => {
    try {
        const result = await User.deleteMany()
        res.status(200).json({
            success: true,
            message: "Succesfully delete Users",
            data: result
        })
    } catch (error) {
        console.log(error)
        res.status(404).json({
            success: false,
            message: "not found",

        })
    }
}