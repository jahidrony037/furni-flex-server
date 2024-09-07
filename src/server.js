const mongoose = require('mongoose');
require('dotenv').config();
const app = require('./app');

const connectDB = async() =>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('database is connected');
    } catch (error) {
        console.log('database is not connected');
        console.log(error.message);
        process.exit(1);
    }
}

const port = process.env.PORT || 8000;

app.listen(port, async()=>{
    console.log(`server is running on port ${port}`);
    await connectDB();

})