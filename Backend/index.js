import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./Routes/postRoutes.js";
import express from "express";

import { connectDB } from "./config/connectdb.js";

dotenv.config();

const app = express();
app.use(express.json());
connectDB();
app.use("/api" , router);

app.listen(3000 , ()=>{
    console.log("server connected to port 3000");
    
})