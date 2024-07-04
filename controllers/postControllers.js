import Post from "../models/postModel.js"
import { v2 as cloudinary } from 'cloudinary';

export const getAllPosts = async (req,res) => {
    const posts = await Post.find().sort({ createdAt: "desc"})

    res.status(200).json({
        posts
    })
}

export const detailPost = async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      if (post) {
        res.json(post);
      } else {
        res.status(404).json({ message: 'Post not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  };

export const createPost = async (req,res) => {

    const post = await Post.create(req.body)

    res.status(201).json({
        post
    })
}

export const updatePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });

        res.status(200).json({
            updatedPost
        });
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};


export const deletePost = async (req,res) => {
    const post = await Post.findById(req.params.id)

    await post.deleteOne()

    res.status(200).json({
        success: "post deleted!"
    })
}
