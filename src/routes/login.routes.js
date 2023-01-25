const express = require('express')
const router = express.Router();

const { userLogin } = require("../controllers/login.controllers");


router.post("", userLogin);


module.exports = router;

