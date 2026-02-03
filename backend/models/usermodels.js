const mangoose = require("mongoose")


const userSchema = new mangoose.Schema({
    
    name : String,
    email : { 
        type : String,
        unique : true,
        required : true
    },
    password : String,
    profilepic : String

},{
    timestamps : true
})


const userModel = mangoose.model("user",userSchema)

module.exports = userModel