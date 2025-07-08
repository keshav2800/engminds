import express from 'express';
import { register, login, updateProfile, logout } from '../controller/user.controller.js';

const router = express.Router();

router.route("/register").post(register);

router.route("/login").post(login);
router.route("/profile/update").post(updateProfile);
router.route("/logout").get(logout);

export default router;