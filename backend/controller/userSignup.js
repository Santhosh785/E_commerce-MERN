const userModel = require("../models/usermodels")

async function userSignUpController(req,res){

    try{

        const {email,password, name } = req.body 
        
        if(!email){
            throw new Error("Please provide the Email")
        }
        if(!password){
            throw new Error("Please provide the password")
        }
        if(!name){
            throw new Error("Please provide the name")
        }

        const userData = new userModel(req.body)


    }catch(err){
        res.json({
            message:err,
            error:true,
            success:false,
        })


    }
}