const productModel = require("../models/productModel")
const uploadProductPermission = require("../helpers/permission")

async function deleteProductController(req, res) {
    try {
        const sessionUserId = req.userId

        if (!await uploadProductPermission(sessionUserId)) {
            throw new Error("Permission denied")
        }

        const { _id } = req.body

        const deleteProduct = await productModel.findByIdAndDelete(_id)

        res.json({
            message: "Product deleted successfully",
            error: false,
            success: true,
            data: deleteProduct
        })

    } catch (err) {
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false
        })
    }
}

module.exports = deleteProductController
