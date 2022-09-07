const Joi = require("joi");

const createPost = Joi.object().keys({
  title: Joi.string().required(),
});

module.exports = {
  createPost,
};
