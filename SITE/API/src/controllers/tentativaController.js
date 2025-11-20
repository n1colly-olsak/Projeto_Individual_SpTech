var tentativaModel = require("../models/tentativaModel");

function registrarTentativa(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var contAcerto = req.body.contAcertoServer;
    var fkUsuario = req.body.fkUsuarioServer;
    // Faça as validações dos valores
    if (contAcerto == undefined) {
        res.status(400).send("Os seus acetos estão indefinido!");
    } else if (fkUsuario == undefined) {
        res.status(400).send("A sua fkUsuario está indefinido!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        tentativaModel.registrarTentativa(contAcerto, fkUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar a tentativa! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    registrarTentativa,
}