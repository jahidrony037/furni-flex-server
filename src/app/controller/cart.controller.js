const Cart = require("../model/cart.model");

exports.addProductInCart= async(req,res)=>{
    try {
        const cartProductInfo = req.body;
        const result = await Cart.create(cartProductInfo);
        if(!result){
             return res.status(404).json({status:'failed', error:"not found"})
        }
        res.status(201).json({status:"success", message:"Product added to Cart"})
    } catch (error) {
        res.status(500).json({status:'failed', error:error.message})
    }
}

exports.getAllProductByUser= async(req,res)=>{
    try {
        const {email} = req.query;
        const cartProducts = await Cart.find({email});
        if(!cartProducts.length){
            return res.status(404).json({status:'failed', error:"not found"});
        }

     res.status(200).json({status:"success", data:cartProducts});
        
    } catch (error) {
        res.status(500).json({status:'failed', error:error.message})
    }
}