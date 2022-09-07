const { createPost } = require("./post");

describe("post", () => {
  test("create post", () => {
    const data = { title: "post one", image: "imag1.jpg" };

    expect(createPost(data)).toEqual({ ...data, _id: expect.any(String) });
  });
});
