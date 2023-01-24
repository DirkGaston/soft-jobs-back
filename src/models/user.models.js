const { query } = require("../services/db.services");
const { encryptPassword } = require("../helpers/passEncryption.helpers");

const getUsers = async () => {
  console.log("hekrjeh")
  const queryString = "SELECT * FROM usuarios";
  console.log(queryString);
  const { rows: users } = await query(queryString);
  return users;
};

const registerUser = async (user) => {
  let { email, password, rol, lenguaje } = user;
  const encryptedPass = encryptPassword(password);
  password = encryptedPass;
  const values = [email, encryptedPass, rol, lenguaje];
  const queryString = "INSERT INTO usuarios VALUES (DEFAULT, $1, $2, $3, $4)";
  await query(queryString, values);
};

module.exports = { getUsers, registerUser };
