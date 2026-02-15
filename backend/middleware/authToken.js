
const jwt = require('jsonwebtoken');

async function authToken(req, res, next) {

    try {
        const token = req.cookies?.token  // Get token from cookies or Authorization header

        if (!token) {
            return res.status(200).json({ //401 Unauthorized
                message: 'User not login',
                data: [],
                error: true,
                success: false
            })
        }

        jwt.verify(token, process.env.TOKEN_SECRET_KEY, function (err, decoded) {
            if (err) {
                console.log("Token verification error:", err);
                return res.status(401).json({
                    message: "Session expired or invalid token",
                    error: true,
                    success: false
                });
            }

            req.userId = decoded?.id;
            next();
        });

    } catch (err) {
        res.status(401).json({ //401 Unauthorized
            message: err.message || err,
            data: [],
            error: true,
            success: false
        })
    }

}

module.exports = authToken;