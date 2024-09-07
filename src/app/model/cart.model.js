const { default: mongoose } = require("mongoose");
const {ObjectId}= mongoose.Schema.Types;
const cartProductSchema = new mongoose.Schema(
    {
        productName:{
            type:String,
            required: true,
        },
        productImage:{
            type:String,
            required:true,
        },
        productPrice:{
            type:Number,
            required:true,
        },
        productId:{
            type: ObjectId,
            required:true
        },
        email:{
            type:String,
            required:true
        }
    }
)

const Cart = mongoose.model('Cart', cartProductSchema);
module.exports = Cart;