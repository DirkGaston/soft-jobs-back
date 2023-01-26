const { Router } = require("express");
const { userLogin } = require("../controllers/login.controllers");
const { reportingMiddleware } = require("../middlewares/reporting.middlewares");

const router = Router();

router.post("", reportingMiddleware, userLogin);

module.exports = router;
