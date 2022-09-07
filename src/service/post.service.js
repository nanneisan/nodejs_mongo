const Post = require("../model/post");

const getAllPost = async ({ offset, limit, searchKey }) => {
  let query = {};
  if (searchKey) {
    query = {
      title: {
        $regex: searchKey,
        $options: "i",
      },
    };
  }
  const posts = await Post.find(query)
    .skip(offset)
    .limit(limit)
    .populate("image");

  const count = await Post.count(query);
  return { count, posts: posts };
};

const getPostById = async (postId) => {
  return (await Post.findById(postId)).populate("image");
};

const createPost = async (body) => {
  const post = new Post(body);
  return post.save();
};

const updatePost = async (postId, body) => {
  const post = await Post.findByIdAndUpdate(postId, body, { new: true });
  return post;
};

const deletePost = async (postId) => {
  const post = await Post.findByIdAndDelete(postId);
  return post;
};

const deleteAllPost = async () => {
  const post = await Post.deleteMany({});
  return post;
};

module.exports = {
  getAllPost,
  getPostById,
  createPost,
  updatePost,
  deletePost,
  deleteAllPost,
};
