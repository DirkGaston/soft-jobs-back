const { decodeToken } = require("../helpers/jwt.helpers");
const { getUser, registerUser } = require("../models/user.models");

const getAll = async (req, res) => {
  try {
    const tokenJWT = req.header("Authorization")
    const token = decodeToken(tokenJWT)
    const {email} = token

    const users = await getUser(email);
    res.json(users);
  } catch (error) {
    res.status(error.code || 500).send(error);
  }
};

const addNewUser = async (req, res) => {
  try {
    const user = req.body;
    await registerUser(user);
    res.send("Usuario creado con éxito");
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = { getAll, addNewUser };
