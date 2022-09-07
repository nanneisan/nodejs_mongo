const error_format = (schema, data) => {
  const { error, value } = schema.validate(data, {
    abortEarly: false,
    allowUnknown: false,
  });

  if (error) {
    throw Error("Cannot create post");
  } else return value;
};

module.exports = error_format;
