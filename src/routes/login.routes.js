const { Router } = require("express");
const { userLogin } = require("../controllers/login.controllers");
const { validateBody } = require("../middlewares/validation.middlewares");
const { loginSchema } = require("../models/loginSchema.models");
const { reportingMiddleware } = require("../middlewares/reporting.middlewares");

const router = Router();

router.post("", reportingMiddleware, validateBody(loginSchema), userLogin);

module.exports = router;
