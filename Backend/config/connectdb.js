import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config();

export const connectDB = async ()=>{
    try {
        const connection = await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
          });
        console.log("mongoose got connected");
        
    } catch (error) {
        console.log("error connecting mongoose");
        
    }
}