const userModel = require("../models/usermodels")
const bcrypt = require('bcryptjs');


async function userSignUpController(req, res) {

    try {

        const { email, password, name } = req.body

        console.log(req.body)

        const user = await userModel.findOne({ email: email })

        if (user) {
            throw new Error("User already exists with this email")
        }

        if (!email) {
            throw new Error("Please provide the Email")
        }
        if (!password) {
            throw new Error("Please provide the password")
        }
        if (!name) {
            throw new Error("Please provide the name")
        }

        const salt = bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hashSync(password, salt);

        if (!hashPassword) {
            throw new Error("Error in password hashing")
        }

        const payload = {
            email,
            name,
            role: "GENERAL",
            password: hashPassword
        }

        const userData = new userModel(payload)
        const savedUser = await userData.save()

        res.status(201).json({
            message: "User signed up successfully",
            data: savedUser,
            error: false,
            success: true,
        })



    } catch (err) {
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false,
        })
    }
}

module.exports = { userSignUpController }