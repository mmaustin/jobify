import mongoose from "mongoose";

const connectDB = url => {
    //async, returns a promise
    return mongoose.connect(url);
}

export default connectDB;