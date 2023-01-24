const { getUsers, registerUser } = require("../models/user.models");

const getAll = async (req, res) => {
  console.log("hello")
  try {
    console.log("hello")
    const users = await getUsers();
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
