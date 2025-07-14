import express from "express";
import userController from "../controllers/userController.js";
import { uploadMiddleware } from "../middleware/multer.js";

const router = express.Router();

router.get("/" , userController.getAllUsers);
// router.get("/:id" , userController.getUsersId);
router.post("/register", uploadMiddleware, userController.registerUser);
router.post("/login", userController.login);

export default router;