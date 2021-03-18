let express = require('express');
let router = express.Router();

const operationsContrroler = require("../controllers/operationsController.js")

/* GET users listing. */
router.get('/registrarNueva', operationsContrroler.registerNew);
router.get("/historial", operationsContrroler.history);


module.exports = router;
