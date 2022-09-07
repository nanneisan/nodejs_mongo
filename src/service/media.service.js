const Media = require("../model/media");

const saveMedia = async (body) => {
  const media = new Media(body);

  return media.save();
};

module.exports = {
  saveMedia,
};
