import User from "../modal/user-modal.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();



export const login = async(req , res)=>{
    try {
        const {email , password} = req.body;
        if(!email || !password)
        {
            return res.status(404).json({message:"enter full details"})
        }
    //    if(!User.findOne({email})) {
    //     return res.status(404).json({messgae:"invalid email"})
    //    }
    //    if(!User.findOne({password})) {
    //     return res.status(404).json({messgae:"invalid password"})
    //    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "Invalid email" });
    }

    // Compare password with hashed password in DB
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const token = jwt.sign({
        id:user._id,
        email:user.email
    },
process.env.JWT_SECRET,
{expiresIn:"10h"})

       return res.status(202).json({message:"Succesfully logged in", user, token})

        
    } catch (error) {
        console.log("Login failed:"+ error);
        
    }
}


export const likeVideo = async(req , res)=>{
    try {
        const { videoId } = req.query;
        const userId = req.user.id;

        if(!videoId)
        {
            return res.status(400).json({ message: "Video ID is required" });
        }

        const video = await Video.findById(videoId);
        if (!video) {
            return res.status(404).json({ message: "Video not found" });
          }

         if(video.likedBy.includes(userId)) {
            return res.status(400).json({ message: "You already liked this video" });
         }
         video.likedBy.push(userId);

         // 4. Save changes
         await video.save();
     
         return res.status(200).json({
           message: "Video liked successfully",
           video,
         });

    } catch (error) {
        console.error("Error liking video:", error);
    res.status(500).json({ message: "Server error" });
        
    }
}


export const unLike = async(req , res)=>{
    try {
        const userId = req.user.id;
        const {videoId} = req.query;
        if(!videoId)
            {
                return res.status(400).json({ message: "Video ID is required" });
            }
            const video = await Video.findById(videoId);
            if (!video) {
                return res.status(404).json({ message: "Video not found" });
              }
              if(video.likedBy.includes(userId)) {
                video.likedBy.pull(userId);
                await video.save()
                return res.status(200).json({ message: "You  unliked this video" });
             }

             
             return res.status(200).json({
                message: "Video unliked successfully",
                video,
              });
             

    } catch (error) {
        console.log("error in unliking the video:"+ error);
        
    }
}

