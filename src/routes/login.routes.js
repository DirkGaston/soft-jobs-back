const { Router } = require("express");
const { userLogin } = require("../controllers/login.controllers");

const router = Router();

router.post("", userLogin);

module.exports = router;
