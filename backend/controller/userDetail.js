

async function userDetailsController(req, res) {

    try{

        console.log("User ID:", req.userId);
        
        console.log("Fetching user details for user ID:", req.userId); // Debugging log
        res.status(200).json({
            message: "User details fetched successfully",
            data: req.userId,
            error:false,
            success:true
        })
    }catch(err){

        res.status(400).json({ //400 Bad Request
            message: err.message ||err,
            error:true,
            success:false
        })
    }

}   

module.exports = userDetailsController;