// import { type } from "express/lib/response";
// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema({
//     name:{
//         required: true,
//         type: String
//     },
//     id:{
//         required: true,
//         type: String
//     }
// })



import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: { 
    type: String,
     required: true, unique: true
     },
  password: { 
    type: String,
     required: true 
    }, // store hashed password
}, { timestamps: true }); // adds createdAt, updatedAt automatically

const User = mongoose.model("User", userSchema);
export default User;
