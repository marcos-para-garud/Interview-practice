import express from "express";
import routes from "./routes/routers.js";
import dotenv from "dotenv";
import connectdb from "./config/connectDB.js";

const app = express();

app.use(express.json());

app.use("/api" , routes)


app.listen(3000 , ()=>{
    console.log("server is running at port 3000");
    
})