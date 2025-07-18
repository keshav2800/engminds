import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        enum: ["user", "admin"],
        default: "user",
    },
    profile: {
        bio: String,
        skills: [{ type: String }],
        resume: { type: String },
        resumeOriginalName: { type: String },
        profilePhoto: {
            type: String,
            default: ""
        }
    }
}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema);
export default User;