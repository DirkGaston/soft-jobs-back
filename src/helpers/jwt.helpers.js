const jwt = require("jsonwebtoken");

const generateToken = (email, secretKey) => {
  return jwt.sign({ email }, secretKey);
};

module.exports = { generateToken };
