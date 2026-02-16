const productModel = require("../models/productModel")

const searchProduct = async (req, res) => {
    try {
        const query = req.query.q

        if (!query) {
            return res.json({
                data: [],
                message: "Search Product list",
                error: false,
                success: true
            })
        }

        const product = await productModel.find({
            "$or": [
                {
                    productName: { $regex: query, $options: 'i' }
                },
                {
                    category: { $regex: query, $options: 'i' }
                },
                {
                    brandName: { $regex: query, $options: 'i' }
                },
                {
                    description: { $regex: query, $options: 'i' }
                }
            ]
        })


        res.json({
            data: product,
            message: "Search Product list",
            error: false,
            success: true
        })
    } catch (err) {
        res.json({
            message: err.message || err,
            error: true,
            success: false
        })
    }
}

module.exports = searchProduct
