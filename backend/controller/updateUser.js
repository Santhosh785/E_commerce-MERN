const userModel = require('../models/usermodels');

async function updateUser(req, res) {
    try {
        const sessionUser = req.userId
        const { userId, email, name, role } = req.body

        const payload = {
            ...(email && { email: email }),
            ...(name && { name: name }),
            ...(role && { role: role }),
        }

        const user = await userModel.findById(sessionUser)

        const updatedUser = await userModel.findByIdAndUpdate(userId, payload, { new: true })

        res.status(200).json({
            data: updatedUser,
            message: "User Updated successfully",
            success: true,
            error: false
        })
    } catch (err) {
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false
        })
    }
}


module.exports = updateUser