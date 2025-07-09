import { allUser } from "../data/user.js";
import { allPost } from "../data/post.js";
import { allComments } from "../data/comment.js";

const getAllUsers = (req, res) => {
    res.json({
        data: allUser
    })
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
    getAllUsers,
    getUsersId,
    getAllPosts,
    getPostId,
    getAllComments,
    getCommentId,
};
