const { Router } = require("express");
const {
  getAll,
  getOne,
  addNewUser,
} = require("../controllers/user.controllers");
const { reportingMiddleware } = require("../middlewares/reporting.middlewares");
const { checkToken, verifyToken } = require("../middlewares/jwt.middlewares");

const router = Router();

router.get("", reportingMiddleware, checkToken, verifyToken, getOne);
router.post("", reportingMiddleware, addNewUser);

module.exports = router;
