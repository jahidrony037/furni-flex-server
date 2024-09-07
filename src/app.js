const express = require('express');
const app = express();
const cors = require('cors');

const userRoutes = require('./app/routes/user.routes');
const productRoutes = require('./app/routes/product.routes');
const cartRoutes= require('./app/routes/cart.routes');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/users", userRoutes);
app.use("/products", productRoutes);
app.use("/cart", cartRoutes);


app.get('/', (req,res)=>{
res.json({message: "Route is Working Nicely Yah!"})
})

module.exports = app;
