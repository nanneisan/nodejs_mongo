const mongoose = require("mongoose");
const { db } = require("../config/database");
const PostModel = require("../model/post");
const MediaModel = require("../model/media");

mongoose.connect(db);

const saveMedia = async (body) => {
  let media = await MediaModel.create(body);
  return media;
};

const getNewPosts = async () => {
  let i = 1,
    size = 100;
  let postArr = [];

  let mediaOne = await saveMedia({
    mediaUrl: "beach.jpg",
    contentType: "image/jpeg",
  });
  let mediaTwo = await saveMedia({
    mediaUrl: "ocean.jpeg",
    contentType: "image/jpeg",
  });
  let text1 = `The purpose of our lives is to be happy.`;
  let text2 = `Many of life’s failures are people who did not realize how close they were to success when they gave up.`;

  for (i; i <= size; i++) {
    postArr.push({
      title: i % 2 == 0 ? text1 : text2,
      image: i % 2 == 0 ? mediaTwo._id : mediaOne._id,
    });
  }

  return postArr;
};

const savePost = (data) => {
  return new Promise((resolve, reject) => {
    PostModel.insertMany(data)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const runSeed = async () => {
  let data = await getNewPosts();
  await PostModel.deleteMany();

  Promise.all([savePost(data)]).then((values) => {
    console.log(values);
  });
};

runSeed();
