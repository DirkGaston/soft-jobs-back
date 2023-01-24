const { Router } = require("express");
const { getAll, addNewUser } = require("../controllers/user.controllers");

const router = Router();

router.get("/usuarios", getAll);
router.post("/usuarios", addNewUser);

module.exports = router;

