const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.SECRET_KEY

const generateToken = (email) => {
  return jwt.sign( email , SECRET_KEY);
};


const decodeToken = (token) => {
  try {
      const jwtToken = token.split(" ")[1]
      const tokenDecode = jwt.decode(jwtToken)
      return tokenDecode
  } catch (error) {
      throw { code: 401, message: "Error to Decode JWT" }
  }
}

const validationToken = (req, res, next) => {
  try {
      const token = req.header("Authorization")
      const jwtToken = token.split(" ")[1]
      jwt.verify(jwtToken, JWT_SECRET)
      next()
  } catch (error) {
      throw { code: 401, message: "Error Validation Credentials" }
  }
}

module.exports = { generateToken , decodeToken, validationToken};
