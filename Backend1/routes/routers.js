import express from "express";
//import login from "../controller/controller.js";
import auth from "../middleware/authMiddleware.js";
import { login, unLike } from "../controller/controller.js";
// import likeVideo from "../controller/controller.js"
import { likeVideo } from "../controller/controller.js";

const routes = express.Router();

routes.post("/login" , login);
routes.post("/like" ,auth , likeVideo);
routes.post("/unlike" , auth , unLike)
// Protected route
routes.get("/profile", auth, (req, res) => {
    res.json({
      message: "This is a protected profile route",
      user: req.user, // Comes from middleware
    });
  });

export default routes;
