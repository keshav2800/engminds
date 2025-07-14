import express from "express";
import userRouter from "./users.js";
import postRouter from "./posts.js";
import commentsRouter from "./comments.js";

const router = express.Router();

router.get("/", (req, res) => {
    return res.json({message: "this is keshav route"});
})

router.use("/users", userRouter);
router.use("/post", postRouter);
router.use("/comments", commentsRouter);

export default router;