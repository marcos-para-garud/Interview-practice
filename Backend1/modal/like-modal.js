import { type } from "express/lib/response";
import mongoose from "mongoose";

 const likeSchema = new mongoose.Schema({
    videoId:{
        required:true ,
        ref:"Video",
        type: mongoose.Schema.Types.ObjectId
    },
    likedBy:[
        {
        
        required: true,
        ref: "User",
        type: mongoose.Schema.Types.ObjectId
    }
]
 })

 const Like = mongoose.model("Like" , likeSchema)

 export default Like;



// import mongoose from "mongoose";

// const likeSchema = new mongoose.Schema({
//   videoId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Video",
//     required: true,
//   },
//   likedBy: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "User",
//     required: true,
//   },
// }, { timestamps: true });

// // Optional: Ensure one user can only like a video once
// likeSchema.index({ videoId: 1, likedBy: 1 }, { unique: true });

// const Like = mongoose.model("Like", likeSchema);
// export default Like;
