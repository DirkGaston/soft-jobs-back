const express = require('express')
const { userLogin } = require("../controllers/login.controllers");

const router = express.Router();

router.post("/login", userLogin);


module.exports = router;

