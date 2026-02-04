const userModel = require('../models/usermodels');
const bcrypt = require('bcryptjs'); 
const jwt = require('jsonwebtoken');

async function userSignInController(req,res){

    try{

        const {email,password, } = req.body

        if(!email){
            throw new Error("Please provide the Email")
        }
        if(!password){
            throw new Error("Please provide the password")
        }
        
        const user = await userModel.findOne({email:email}) //finding user by email
        
        if(!user){
            throw new Error("User not found with this email")

        }

       const checkPassword = bcrypt.compareSync(password, user.password);
       console.log("Password check:", checkPassword);

         if(checkPassword){
            const tokenData = {
                id: user._id,
                email: user.email,
               

            }
            const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET_KEY, {expiresIn:'7d'})
            const tokenOptions = {
                httpOnly: true,
                secure: true,
            }
            res.cookie("token",token,tokenOptions).json( {
                message:"User signed in successfully",
                data:token, 
                error:false,
                success:true,      
            })

        }else{
             throw new Error("Invalid password")
         }


    }catch(err){
        
        res.json({
            message:err.message || "User already exists with this email",
            error:true,
            success:false,
        })    

    }}
module.exports = {userSignInController}