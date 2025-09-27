// import { type } from "express/lib/response";
// import mongoose from "mongoose";

// const videoSchema = new mongoose.Schema({
//     videoId:{
//         required: true,
//         type: Number,
//         unique: true
//     },
//     createdBy:{
//         required:true,
//         ref: "User",
//         type: mongoose.Schema.Types.ObjectId,
//     },
//     createdAt:{
//         required:true,
//         type: new Date()
//     },
//     url:{
//         required:true,
//         type:String
//     }
// })

// const Video = mongoose.model("Video" , videoSchema);

// export default Video;






import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  likedBy: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

const Video = mongoose.model("Video", videoSchema);
export default Video;
