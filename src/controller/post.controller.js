const fs = require("fs");
const postService = require("../service/post.service");
const mediaService = require("../service/media.service");
const { uploadDir } = require("../config");

// joi validation schema
const { createPost } = require("../validation/post");

// util
const JoiValidator = require("../utils/joi_validator");

exports.getAllPost = async (req, res, next) => {
  try {
    let { page = 1, limit = 10, searchKey } = req.query;
    let offset = (page - 1) * limit;
    const posts = await postService.getAllPost({ offset, limit, searchKey });
    if (!posts) throw Error("No posts");
    res.status(200).json(posts);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getPostById = async (req, res, next) => {
  try {
    let postId = req.params["postId"];
    const post = await postService.getPostById(postId);
    if (!post) throw Error("No post found");
    res.status(200).json(post);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

exports.createPost = async (req, res, next) => {
  const body = req.body;
  const file = req.file;

  try {
    JoiValidator(createPost, body);

    if (!file) {
      throw Error("Post image is required.");
    }

    // save media
    let mediaBody = {
      mediaUrl: file.filename,
      contentType: file.mimetype,
    };
    const media = await mediaService.saveMedia(mediaBody);

    if (!media) throw Error("Cannot upload file");

    body.image = media._id;

    const result = await postService.createPost(body);

    if (!result) throw Error("Cannot create post");
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updatePost = async (req, res, next) => {
  let postId = req.params["postId"];
  let body = req.body;
  let file = req.file;

  try {
    JoiValidator(createPost, body);

    if (file) {
      body.image = file.filename;
    }

    const post = await postService.updatePost(postId, body);
    if (!post) throw Error("Cannot update post");
    res.status(200).json(post);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deletePost = async (req, res, next) => {
  let postId = req.params["postId"];
  try {
    const post = await postService.deletePost(postId);
    if (!post) throw Error("Cannot delete post");
    res.status(200).json(post);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteAllPost = async (req, res, next) => {
  try {
    const post = await postService.deleteAllPost();
    if (!post) throw Error("Cannot delete all post");
    res.status(200).json(post);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getImage = async (req, res, next) => {
  let image = req.params["image"];

  let imageUrl = uploadDir + image;

  if (fs.existsSync(imageUrl)) {
    res.download(imageUrl);
  } else {
    res.status(404).json({ message: "Image not found" });
  }
};
