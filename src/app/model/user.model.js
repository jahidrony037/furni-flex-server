const { default: mongoose } = require("mongoose");
const validator = require ('validator');
const userSchema = new mongoose.Schema(
    {
        firstName:String,
        lastName:String,
        email:{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            validator:[validator.isEmail, "please provide a valid email"],

        },
        createdAt:{
            type:Date,
            default: Date.now()
        }
    },
    {
        timestamps:true
    }
)

const User =  mongoose.model("User", userSchema);
module.exports = User;