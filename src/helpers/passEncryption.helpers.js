const bcrypt = require("bcryptjs");

const encryptPassword = (password) => {
  try {
    return bcrypt.hashSync(password);

  } catch (error) {
    throw { message: "encrip error" }
  }
};

const comparePasswords = (password, encryptedPass) => {
  return bcrypt.compareSync(password, encryptedPass);
};

const decryptPassword = (key, encryptKey) => {
  try {
      return bcrypt.compareSync(key, encryptKey)
  } catch (error) {
      throw ("Error Descrypt")
      // throw { code: 401, message: "Error Descrypt" }
  }
}
module.exports = { encryptPassword, comparePasswords, decryptPassword };
