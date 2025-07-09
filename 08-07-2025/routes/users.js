import express from "express";
import userController from "../controllers/userController.js";

const router = express.Router();

router.get("/" , userController.getAllUsers);
router.get("/:id" , userController.getUsersId);

export default router;