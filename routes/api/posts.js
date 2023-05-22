const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/api/posts');
//const { post } = require('./posts');

router.get("/", postsCtrl.getAllPosts);

router.get("/:id", postsCtrl.getPostById);

router.post("/", postsCtrl.addPost);

router.put("/:id", postsCtrl.updatePost);

router.delete("/:id", postsCtrl.deletePost);


module.exports = router;