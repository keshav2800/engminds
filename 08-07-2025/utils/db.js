import mongoose from "mongoose";

export const connectDb = async () => {
    try{
        await mongoose.connect(" mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.5.5")
        console.log("database connected");

    }catch(e){
        return "Error:" + e;
    }
}