const { query } = require("../services/db.services");
const { encryptPassword } = require("../helpers/passEncryption.helpers");
const { comparePasswords } = require("../helpers/passEncryption.helpers");

const getUsers = async () => {
  const queryString = "SELECT * FROM usuarios";
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

const getUserKey = async (email) => {
  const values = [email];
  const queryString = "SELECT password FROM usuarios WHERE email = $1";

  const {
    rows: [user],
    rowCount,
  } = await query(queryString, values);

  if (!rowCount)
    throw { code: 401, message: "Email o contraseña es incorrecta" };

  return user.password;
};

module.exports = { getUsers, registerUser, getUserKey };
