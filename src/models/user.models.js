const { query } = require("../services/db.services");
const { encryptPassword } = require("../helpers/passEncryption.helpers");

const getUsers = async () => {
  const queryString = "SELECT * FROM usuarios";
  const { rows: users } = await query(queryString);
  return users;
};

const registerUser = async (user) => {
  let { email, password, rol, lenguage } = user;
  const encryptedPass = encryptPassword(password);
  password = encryptedPass;

  const values = [email, encryptedPass, rol, lenguage];

  const queryString = "INSERT INTO usuarios VALUES (DEFAULT, $1, $2, $3, $4)";
  await query(queryString, values);
};

const getUserKey = async (payload) => {
  try {
    const queryString = "SELECT email, password FROM usuarios WHERE email = $1";
    const values = [payload]
    const results = await query(queryString, values);
    return results.rows[0]
  } catch (error) {
    throw { code: 404, message: "Error get userKey query" }
  }
}


const getUser = async (payload) => {
  const queryString = "SELECT email, rol, lenguage FROM usuarios WHERE email = $1"
  const values = [payload]
  try {
    const results = await query(queryString, values)
    return results.rows[0]

  } catch (error) {
    throw { code: 404, message: "Error get user query" }

  }
}

module.exports = { getUsers, getUser, registerUser, getUserKey }
