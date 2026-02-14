async function userLogout(req, res) {

    try{

        res.clearCookie("token");
        res.json({
            message:"User logged out successfully",
            error:false,
            success:true,
            data : []
        })

    }
    catch(error){
        res.json({
            message:error.message || "Error logging out user",
            error:true,
            success:false,
        })  
    }}

module.exports = {userLogout};
