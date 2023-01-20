const express = require("express");
const app = express();
const cors = require("cors");
const { getUsers, verifyCredentials, registerUser } = require("./queries");

const jwt = require("jsonwebtoken");

require("dotenv").config();

app.listen(3000, console.log("SERVER ON"));
app.use(cors());
app.use(express.json());

app.get("/usuarios", async (req, res) => {
  try {
    const users = await getUsers();
    res.json(users);
  } catch (error) {
    res.status(error.code || 500).send(error);
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    await verifyCredentials(email, password);
    const token = jwt.sign({ email }, process.env.SECRET_KEY);
    res.send(token);
  } catch (error) {
    console.log(error);
    res.status(error.code || 500).send(error);
  }
});

app.post("/usuarios", async (req, res) => {
  try {
    const user = req.body;
    await registerUser(user);
    res.send("Usuario creado con éxito");
  } catch (error) {
    res.status(500).send(error);
  }
});
