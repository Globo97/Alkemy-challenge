let express = require("express");
let router = express.Router();

const usersController = require("../controllers/usersController.js");

/* GET users listing. */
router.get("/login", usersController.login);
router.get("/registro", usersController.register);


module.exports = router;
