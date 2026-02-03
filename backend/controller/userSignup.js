const userModel = require("../models/usermodels")
const bcrypt = require('bcryptjs');


async function userSignUpController(req,res){

    try{

        const {email,password, name } = req.body 

        console.log(req.body)
        
        if(!email){
            throw new Error("Please provide the Email")
        }
        if(!password){
            throw new Error("Please provide the password")
        }
        if(!name){
            throw new Error("Please provide the name")
        }

        const salt = bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hashSync(password, salt);

        if (!hashPassword){
            throw new Error("Error in password hashing")
        }

        const payload = { 
            ...req.body,
            password: hashPassword
        }

        const userData = new userModel(payload)
        const savedUser = await userData.save()

        res.status(201).json({
            message:"User signed up successfully",
            data:savedUser,
            error:false,
            success:true,
        })



    }catch(err){
        res.json({
            message:err,
            error:true,
            success:false,
        })


    }
}

module.exports = {userSignUpController}