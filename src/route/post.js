const post = require("../controller/post.controller");
const router = require("express").Router();

// middlewares
const fileUpload = require("../middlewares/image");
const auth = require("../middlewares/auth");

router.get("/", post.getAllPost);
router.get("/image/:image", post.getImage);
router.get("/one/:postId", post.getPostById);

// verify user token
router.post(
  "/",
  auth.verifyUserToken,
  fileUpload.single("image"),
  post.createPost
);
router.put(
  "/one/:postId",
  auth.verifyUserToken,
  fileUpload.single("image"),
  post.updatePost
);
router.delete("/one/:postId", auth.verifyUserToken, post.deletePost);
router.delete("/all", auth.verifyUserToken, post.deleteAllPost);

module.exports = router;
