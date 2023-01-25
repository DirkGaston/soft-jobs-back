const express = require('express')
const router = express.Router()

const { getAll, addNewUser } = require("../controllers/user.controllers");


router.get("", getAll);
// router.get("", (req, res) => res.send({ message: "ok" }));

router.post("", addNewUser);

module.exports = router;

