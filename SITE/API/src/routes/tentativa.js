var express = require("express");
var router = express.Router();

var tentativaController = require("../controllers/tentativaController");

router.post("/registrarTentativa", function (req, res) {
    tentativaController.registrarTentativa(req, res);
})

router.get("/buscarTentativa/:idUsuario", function (req, res) {
    tentativaController.buscarTentativa(req, res);
});

router.get("/buscarTentativaKpi/:idUsuario", function (req, res) {
    tentativaController.buscarTentativaKpi(req, res);
});

module.exports = router;