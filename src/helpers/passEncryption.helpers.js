const bcrypt = require("bcryptjs");

const encryptPassword = (password) => {
  return bcrypt.hashSync(password);
};

const comparePasswords = (password, encryptedPass) => {
  return bcrypt.compareSync(password, encryptedPass);
};

module.exports = { encryptPassword, comparePasswords };
