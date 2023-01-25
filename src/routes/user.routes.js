const { Router } = require("express");
const { getAll, addNewUser } = require("../controllers/user.controllers");

const router = Router();

router.get("", getAll);
router.post("", addNewUser);

module.exports = router;

