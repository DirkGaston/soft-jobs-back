const { Pool } = require("pg");
const bcrypt = require("bcryptjs");

require("dotenv").config();

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB,
  allowExitOnIdle: true,
});

const getUsers = async () => {
  const { rows: users } = await pool.query("SELECT * FROM usuarios");
  return users;
};

const verifyCredentials = async (email, password) => {
  const values = [email];
  const query = "SELECT * FROM usuarios WHERE email = $1";

  const {
    rows: [user],
    rowCount,
  } = await pool.query(query, values);

  const { password: encryptedPass } = user;
  const passwordMatch = bcrypt.compareSync(password, encryptedPass);

  if (!passwordMatch || !rowCount)
    throw { code: 401, message: "Email o contraseña es incorrecta" };
};

const registerUser = async (user) => {
  let { email, password, rol, lenguaje } = user;
  const encryptedPass = bcrypt.hashSync(password);
  password = encryptedPass;
  const values = [email, encryptedPass, rol, lenguaje];
  const query = "INSERT INTO usuarios VALUES (DEFAULT, $1, $2, $3, $4)";
  await pool.query(query, values);
};

module.exports = {
  getUsers,
  verifyCredentials,
  registerUser,
};
