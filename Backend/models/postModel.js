

import mongoose, { Schema } from "mongoose";

const postSchema = new mongoose.Schema({
 id:{
    type: Number,
    required: true,
 },
 name: {
    type: String,
    required:true,
 },
 salary:{
    type: Number,
    required: true,
 },
 age:{
    type: Number,
    required:true,
 }
});

export const Post = mongoose.model('Post' , postSchema);