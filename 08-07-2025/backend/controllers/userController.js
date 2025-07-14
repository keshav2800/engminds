import { allUser } from "../data/user.js";
import { allPost } from "../data/post.js";
import { allComments } from "../data/comment.js";
import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { token } from "morgan";


const registerUser = async (req, res) => {
    try{
        const { name, email, phone, password, role} = req.body;

        

        const hashPassword = await bcrypt.hash(password, 10);

        const userExist = await User.findOne({email});

        if(userExist){
            return res.status(400).json({
                success: false,
                message: "user already exist",
            })
        }

        const NewUser = new User ({
            name,
            email,
            password: hashPassword,
            phone,
            role
        })

        await NewUser.save();
        const userResponse = NewUser.toObject();

        return res.status(201).json({
            message: "user has been registered successfully",
            success: true,
            user: userResponse,
        })

        

    }catch(e){

        console.log("registeration error", e);
    }
}

const login = async (req, res) => {
    try {
        const {email, password, role} = req.body;

        let user = await User.findOne({email});

        if(!user){
            return res.status(400).json({
                message: "User doesnot exist",
                success: false,
            })
        }

        const isPassword = await bcrypt.compare(password, user.password);

        if(!isPassword){
            return res.status(400).json({
                message: "email or password is wrong",
                success: false,
            })
        }

        if(role !== user.role){
            return res.status(400).json({
                message: "try using a different role",
                success: false,

            })
        }

        const tokenData = {
            userId: user._id,
            userEmail: user.email,
        }

        const token = jwt.sign(tokenData, process.env.secret_key, {expiresIn: '1d'})

        user = {
            _id: user._id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            role: user.role,
        }
        // return res.status(201).json({
        //     message: "user is logged in",
        //     success: true,
        //     user: user,
        //     token: token,
        // })

        return res.status(200).cookie("access-token", token, {
            expires: new Date(Date.now() + 8 * 3600000),
            // cookie will be removed after 8 hours
        }).json({
            message: "User is logged in",
            success: true,
            user: user,
            token: token
        })
    }catch(e) {
        return res.status(400).json({
            message: "there was some error",
            success: false,
        })
    }
    
}

const getAllUsers = async (req, res) => {
    try {
        console.log("this is good");
        const users = await User.find({});
        return res.json({
            message: "successfully got all the users",
            success: true,
            users,
        })

    }catch(e){
        console.log("got the error", e);
    }
}

const getUsersId = (req, res) => {
    const id = Number(req.params.id);
    const user = allUser[id-1];

    if(!user){
        console.log("user doesnot exist");
    }
    return res.send(user);
}

const getAllPosts = (req, res) => {
    res.json({
        data: allPost
    })
}

const getPostId = (req, res) => {
    const id = Number(req.params.id);
    const post = allPost[id];

    if(!post){
        console.log("cannot find the post");
    }
    return res.send(post);
}

const getAllComments = (req, res) => {
    res.json({
        data: allComments
    })
}

const getCommentId = (req, res) => {
    const id = Number(req.params.id);
    const comment = allComments[id-1];

    if(!comment){
        console.log("no comment found");
    }
    return res.send(comment);
}

export default {
    registerUser,
    login,
    getAllUsers,
    getUsersId,
    getAllPosts,
    getPostId,
    getAllComments,
    getCommentId,
};
