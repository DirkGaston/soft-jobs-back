const { verifyCredentials } = require("../models/user.models");
const { generateToken } = require("../helpers/jwt.helpers");

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    await verifyCredentials(email, password);
    const token = generateToken(email, process.env.SECRET_KEY);
    res.send(token);
  } catch (error) {
    console.log(error);
    res.status(error.code || 500).send(error);
  }
};

module.exports = { userLogin };
