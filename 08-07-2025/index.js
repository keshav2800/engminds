import express from "express";
import logger from "morgan";
import dotenv from "dotenv";
import keshavRouter from "./routes/keshav.js";
// import connectDb from "./utils/db.js"

dotenv.config({});
const app = express();
app.use(logger('dev'));

const PORT = process.env.PORT || 3001;

app.use("/keshav", keshavRouter);

app.get("/", (req, res) => {
    res.json({message: "hello from keshav api"});
});

app.listen(PORT, ()=>{
    // connectDb;
    console.log(`Server connected ${PORT}`);
})