const jwt = require("jsonwebtoken");
const { TOKEN_SECRET } = require("./../config");

const verifyUserToken = (req, res, next) => {
  let token = req.headers.authorization;

  if (!token)
    return res
      .status(401)
      .send({ message: "Access Denied / Unauthorized request" });

  try {
    token = token.split(" ")[1];

    if (token === "null" || !token)
      return res.status(401).send({ message: "Unauthorized request" });

    let verifiedUser = jwt.verify(token, TOKEN_SECRET); // config.TOKEN_SECRET => 'secretKey'
    if (!verifiedUser)
      return res.status(401).send({ message: "Unauthorized request" });

    req.user = verifiedUser;
    next();
  } catch (err) {
    res.status(400).send({ message: "Invalid Token" });
  }
};

module.exports = {
  verifyUserToken,
};
