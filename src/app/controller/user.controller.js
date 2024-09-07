const User = require("../model/user.model");

exports.createUser = async (req,res)=>{
    try {
        const userInfo = req.body;
        const {email}=userInfo;
        const isExistEmail = await User.findOne({email});
        if(isExistEmail){
            return res.status(409).json({status:'failed', error:"user already exists"});
        }
    const result = await User.create(userInfo);
        if(!result){
            return res.status(404).json({status:'failed', error:"not found"})
        }
    res.status(201).json({status:'success',message:"User data inserted"});
    } catch (error) {
        res.status(500).json({status:'failed', error:error.message})
    }
 
}

exports.getUsers = async (req,res)=>{
    try {
        const users = await User.find();
        if(!users.length){
            res.status(404).json({status:'failed', error:"not found"})
        }
        res.status(200).json({status:"success", data:users});
    } catch (error) {
        res.status(500).json({status:'failed', error:error.message})
    }
}