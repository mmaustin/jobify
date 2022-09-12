import mongoose from "mongoose";

const connectDB = url => {
    return mongoose.connect(url);
}

export default connectDB;

//const connectionString = 'mongodb+srv://Montrel:<password>@cluster0.pyln9ge.mo
