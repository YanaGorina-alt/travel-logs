const Post = require('../../models/Post');
const User = require('../../models/User');

module.exports = {
    getAllPosts,
    addPost,
    getPostById,
    updatePost ,
    deletePost
  };

  async function getAllPosts(req, res) {
    try { 
      const posts = await Post.find({}).populate('user');
      if (!posts) throw new Error("No posts found");
      res.status(200).json(posts);
    } catch (err) {
      res.status(400).json(err);
    }
  }
  

async function addPost(req, res) {
  try {
    const { title, description, location, date, image, user } = req.body;
    

    // Add the post reference to the user's posts array
    const existingUser = await User.findById(user)
    // Check if the user with the provided ID exists
    if(!existingUser) throw new Error("User not found");

    //Create the post
    const post = await Post.create(req.body);

    // Add the post reference to the user's posts array
    existingUser.posts.push(post._id);

    // Save the user to persist the changes
    await existingUser.save()

    res.status(200).json(post);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function getPostById (req,res) {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) throw new Error("No post found");
    res.status(200).json(post)
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
}

async function updatePost (req,res) {
  try {
    const {title, description, location, date, image, user} = req.body;
    const post = await Post.findByIdAndUpdate(req.params.id, {
      title, 
      description, 
      location, 
      date: new Date (`${date}`), 
      image
    });
    if (!post) throw new Error("Unable to uodate");
    res.status(200).json("Updated Successfully");
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
}

async function deletePost(req, res) {
  let post;
  const id = req.params.id;
  try {
    post = await Post.findById(id).populate("user");
    post.user.posts.pull(post._id);
    await post.user.save()
    post = await Post.findByIdAndDelete(id);

    if (!post) {
      throw new Error("Unable to delete");
    }

    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
}


  // async function addPost(req, res) {
  //   try {
      
  //     const {title, description, location, date, image, user} = await Post.create(req.body);
      
  //     if (
  //       !title && 
  //       title.trim() ==="" &&
  //       !description && 
  //       description.trim() ==="" &&
  //       !location && 
  //       location.trim() ==="" &&
  //       !date &&
  //       !user &&
  //       image.trim() ===""  
  //     ) {
  //       throw new Error("Invalid Data");
  //     }

  //     const post = await new Post ({
  //       title, 
  //       description, 
  //       location, 
  //       date: new Date(`${date}`), 
  //       image, 
  //       user
  //   })

  //     const session = await mongoose.startSession();
  //     session.startTransition()
  //     existingUser.post.push(post)
  //     await existingUser.save({session})
  //     post = await post.save({session});
  //     session.commitTransaction();
  //   if(!post) {
  //       throw new Error("Unexpected Error Occurred"); 
  //   }
  //   res.status(200).json(post)

  //   } catch (err) {
  //     res.status(400).json(err);
  //   }
  // }


