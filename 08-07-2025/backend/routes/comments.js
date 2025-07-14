import express from "express";
import userController from "../controllers/userController.js";

const router = express.Router();


router.get("/", userController.getAllComments);
router.get("/:id" , userController.getCommentId);

export default router;