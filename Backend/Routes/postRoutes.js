import { inserting } from "../controller/postController.js";
import express from 'express';

const router = express.Router();

router.post("/insert" , inserting);

export default router;