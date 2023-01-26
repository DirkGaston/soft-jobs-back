const { Router } = require("express");
const {
  getAll,
  getOne,
  addNewUser,
} = require("../controllers/user.controllers");
const { reportingMiddleware } = require("../middlewares/reporting.middlewares");
const { checkToken, verifyToken } = require("../middlewares/jwt.middlewares");
const { validateBody } = require("../middlewares/validation.middlewares");
const { newUserSchema } = require("../models/userSchema.models");

const router = Router();

router.get("", reportingMiddleware, checkToken, verifyToken, getOne);
router.post("", reportingMiddleware, validateBody(newUserSchema), addNewUser);

module.exports = router;
