const Product = require("../model/product.model");

exports.addProduct = async(req,res)=>{
    try {
        const productInfo=req.body;
        const result = await Product.create(productInfo);
        if(!result){
            return res.status(404).json({status:'failed', error:"not found"})
        }
        res.status(201).json({status:'success',message:"Product data inserted"});
    } catch (error) {
        res.status(500).json({status:'failed', error:error.message})
    }
}

exports.getAllProduct = async(req,res)=>{
    try {
        const products = await Product.find();
        if(!products.length){
            return res.status(404).json({status:'failed', error:"not found"})
        }
        res.status(201).json({status:'success',data:products});
    } catch (error) {
        res.status(500).json({status:'failed', error:error.message})
    }
}