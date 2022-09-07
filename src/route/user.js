const user = require("../controller/user.controller");
const router = require("express").Router();

router.get("/:userId", user.getUserById);
router.post("/", user.registerUser);
router.post("/login", user.login);

module.exports = router;
