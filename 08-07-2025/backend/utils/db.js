import mongoose from "mongoose";

const connectDb = async () => {
    try{
        mongoose.connect('mongodb://127.0.0.1:27017/engineerMinds', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("database connected");
    }catch(e){
        console.log("error connecting to database");
    }
}

export default connectDb;