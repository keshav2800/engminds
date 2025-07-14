import express from "express";
import userController from "../controllers/userController.js";


const router = express.Router();

router.get("/", userController.getAllPosts);
router.get("/:id", userController.getPostId);

export default router;