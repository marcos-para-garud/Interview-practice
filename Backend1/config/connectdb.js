import mongoose, { mongo } from "mongoose";
import dotenv, { config } from "dotenv";

dotenv.config();

const connectdb = async()=>{
    try {
        const connect = await mongoose.connect(process.env.MONGODB_URL)
        console.log("mongoose got connected");
    } catch (error) {
        console.log("mongoose not connected:"+error);
        
    }
}

export default connectdb;
