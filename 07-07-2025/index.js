import express from "express";
import logger from "morgan";
import userRouter from "./routes/user.route.js";

const app = express();
app.use(logger("dev"));
const port = 3000;


app.use("/api/user", userRouter);

// app.get("/user", (req, res) => {
//     res.send("heelo");
//     console.log("hello from backend");
// })

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})