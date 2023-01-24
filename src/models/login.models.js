const { comparePasswords } = require("../helpers/passEncryption.helpers");

const verifyCredentials = async (email, password) => {
  const values = [email];
  const queryString = "SELECT * FROM usuarios WHERE email = $1";

  const {
    rows: [user],
    rowCount,
  } = await query(queryString, values);

  const { password: encryptedPass } = user;
  const passwordMatch = comparePasswords(password, encryptedPass);

  if (!passwordMatch || !rowCount)
    throw { code: 401, message: "Email o contraseña es incorrecta" };
};

module.exports = { verifyCredentials };
