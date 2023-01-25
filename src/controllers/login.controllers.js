const { getUserKey } = require("../models/user.models");
const { generateToken } = require("../helpers/jwt.helpers");
const { comparePasswords } = require("../helpers/passEncryption.helpers");

require("dotenv").config();

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const encryptedPass = await getUserKey(email);
    const passwordMatch = comparePasswords(password, encryptedPass);
    if (!passwordMatch)
      throw { code: 401, message: "Email o contraseña es incorrecta" };
    const token = generateToken(email, process.env.SECRET_KEY);
    res.send(token);
  } catch (error) {
    console.log(error);
    res.status(error.code || 500).send(error);
  }
};

module.exports = { userLogin };
