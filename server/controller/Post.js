const PostModel = require("../modules/Post");
const UserModel = require("../modules/User");
const mongoose = require("mongoose");

// Create New Post
exports.createPost = async (req, res) => {
  const newPost = new PostModel(req.body);
  try {
    await newPost.save();
    res.status(200).json("Post Created!");
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// Get Post
exports.getPost = async (req, res) => {
  const id = req.params.id;
  try {
    const post = await PostModel.findById(id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// Update Post
exports.updatePost = async (req, res) => {
  const postId = req.params.id;
  const { userId } = req.body;
  try {
    const post = await PostModel.findById(postId);
    if (post.postId === postId) {
      await post.updateOne({ $set: req.body });
      res.status(201).json("Post Updated");
    } else {
      res.status(403).json("Action forbidden");
    }
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// Delete Post
exports.deletePost = async (req, res) => {
  const postId = req.params.id;
  const { userId } = req.body;
  try {
    const post = await PostModel.findById(postId);
    if (post.userId === userId) {
      await post.deleteOne();
      res.status(201).json("Post deleted successfully");
    } else {
      res.status(403).json("Action forbidden");
    }
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// Like/Deslike Post
exports.likePost = async (req, res) => {
  const id = req.params.id;
  const { userId } = req.body;
  try {
    const post = await PostModel.findById(id);
    if (!post.likes.includes(userId)) {
      await post.updateOne({ $push: { likes: userId } });
      res.status(200).json("Post liked");
    } else {
      await post.updateOne({ $pull: { likes: userId } });
      res.status(200).json("Post unliked");
    }
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// Get Timeline Post
exports.getTimeLinePost = async (req, res) => {
  const userId = req.params.id;
  try {
    const currentUserPosts = await PostModel.find({ userId: userId });
    const followingPosts = await UserModel.aggregate([
      {
        $match: {
          _id: new mongoose.Types.ObjectId(userId),
        },
      },
      {
        $lookup: {
          from: "Posts",
          localField: "following",
          foreignField: "userId",
          as: "followingPosts",
        },
      },
      {
        $project: {
          followingPosts: 1,
          _id: 0,
        },
      },
    ]);
    res.status(200).json(
      currentUserPosts
        .concat(...followingPosts[0].followingPosts)
        .sort((a, b) => {
          return b.createdAt - a.createdAt;
        })
    );
  } catch (err) {
    res.status(500).json(err.message);
  }
};
