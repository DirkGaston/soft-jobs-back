const { getUserKey } = require("../models/user.models");

const { decryptPassword } = require("../helpers/passEncryption.helpers");
const { generateToken } = require("../helpers/jwt.helpers");


const userLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await getUserKey(email)
    if (user === undefined) {
      res.status(500).send("Error user not found")
    } else {
      const decryptKey = decryptPassword(password, user.password)
      if (decryptKey === false) {
        res.status(500).send("Error token decrypt")
      } else {
        const tokenJwt = generateToken({ email },)
        res.status(200).send(tokenJwt)
      }
    }
  } catch (error) {
    console.log(error);
    res.status(error.code || 500).send(error);
  }
};

module.exports = { userLogin };
