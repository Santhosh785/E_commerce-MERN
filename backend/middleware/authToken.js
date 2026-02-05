
const jwt = require('jsonwebtoken');

async function authToken(req, res, next) {

    try{
        const token = req.cookies?.token  // Get token from cookies or Authorization header

        if(!token){
            return res.status(200).json({ //401 Unauthorized
                message: 'User not login',
                data:[],
                error:true,
                success:false
            })
        }

        jwt.verify(token, process.env.TOKEN_SECRET_KEY, function(err, decoded)  { // Verify token

            console.log("Decoded token:", decoded); // Debugging log
            console.log(err)

        if (err) {
            console.log("Token verification error:", err); // Debugging log
        }

        req.user = decoded;        // whole user payload
        req.userId = decoded.id; 
        next(); // Proceed to the next middleware or route handler
            
        });
         
        if (!token) {
            throw new Error('No token provided');
        }

    }catch(err){
        res.status(401).json({ //401 Unauthorized
            message: err.message ||err,
            data:[],
            error:true,
            success:false
        })
    }

}

module.exports = authToken;