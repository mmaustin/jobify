import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
    name: {type: String,
    required: [true, 'Please provide name'],
    minlength: 3,
    maxlength: 20,
    trim: ture
    },
    email: {type: String,
    required: [true, 'Please provide email'],
    validate : {
        validator,
        message: 'Please provide valid email'
    },
    unique: ture
    },
    password: {type: String,
    required: [true, 'Please provide password'],
    minlength: 6,
    },
    lastName: {type: String,
    trim: ture,
    maxlength: 20,
    default: 'lastName'
    },
    location: {type: String,
    trim: ture,
    maxlength: 20,
    default: 'my city'
    },
})

export default mongoose.model('User', UserSchema);