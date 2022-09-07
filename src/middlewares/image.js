const multer = require("multer");
const { uploadDir } = require("../config");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const fileFilter = function (req, file, cb) {
  const mimeType = file.mimetype;

  if (mimeType.startsWith("image/") || mimeType.startsWith("video/")) {
    return cb(null, true);
  } else return cb(new Error(mimeType + "file types are not allowed."), false);
};

module.exports = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 524288000, // 500MB in bytes
  },
});
