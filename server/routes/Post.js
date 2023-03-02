const express = require("express")
const { createPost, getPost, updatePost, deletePost, likePost, getTimeLinePost } = require("../controller/Post")
const router = express.Router()

router.post("/create",createPost)
router.get("/:id", getPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);
router.post("/:id", likePost);
router.get("/:id/timeline",getTimeLinePost)






module.exports = router