const Post = require('../../models/Post');

module.exports = {
    getAllPosts,
    addPost 
  };

  async function getAllPosts(req, res) {
    try { 
      const posts = await Post.find();
      if (!posts) throw new Error("No posts found");
      res.status(200).json({posts});
    } catch (err) {
      res.status(400).json(err);
    }
  }
  
  async function addPost(req, res) {
    try {
      
      const {title, description, location, date, image, user} = await Post.create(req.body);
      
      if (
        !title && 
        title.trim() ==="" &&
        !description && 
        description.trim() ==="" &&
        !location && 
        location.trim() ==="" &&
        !date &&
        !user &&
        image.trim() ===""  
      ) {
        throw new Error("Invalid Data");
      }

      const post = await new Post ({
        title, 
        description, 
        location, 
        date: new Date(`${date}`), 
        image, 
        user
    }).save();

    if(!post) {
        throw new Error("Unexpected Error Occurred"); 
    }
    res.status(200).json(post)

    } catch (err) {
      res.status(400).json(err);
    }
  }

