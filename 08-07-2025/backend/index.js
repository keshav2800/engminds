import express from "express";
import logger from "morgan";
import dotenv from "dotenv";
import keshavRouter from "./routes/keshav.js";
import connectDb from "./utils/db.js"
import userRouter from "./routes/users.js";
import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config({});
const app = express();
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT || 3001;
connectDb();

app.use("/api", keshavRouter);

app.get("/", (req, res) => {
    res.json({message: "hello from keshav api"});
});

app.listen(PORT, ()=>{
    // connectDb;
    console.log(`Server connected ${PORT}`);
})