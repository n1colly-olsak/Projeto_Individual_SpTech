var tentativaModel = require("../models/tentativaModel");

function registrarTentativa(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var contAcerto = req.body.contAcertoServer;
    var fkUsuario = req.body.fkUsuarioServer;
    var erros = req.body.erroServer;
    // Faça as validações dos valores
    if (contAcerto == undefined) {
        res.status(400).send("Os seus acetos estão indefinido!");
    } else if (fkUsuario == undefined) {
        res.status(400).send("A sua fkUsuario está indefinido!");
    } else if (erros == undefined) {
        res.status(400).send("O seu erro está indefinido!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        tentativaModel.registrarTentativa(contAcerto, fkUsuario, erros)
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

function buscarTentativa(req, res) {
    var idUsuario = req.params.idUsuario;

    if (idUsuario == undefined) {
        res.status(400).send("Seu idUsuario está undefined!");
    } else {

        tentativaModel.buscarTentativa(idUsuario)
            .then((resultado) => {
                if (resultado.length >= 0) {
                    res.status(200).send(resultado[0]);
                } else {
                    res.status(204).json(erro.sqlMessage);
                }
            }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("Houve um erro ao buscar dados do gráfico! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function buscarTentativaKpi(req, res) {
    var idUsuario = req.params.idUsuario;

    if (idUsuario == undefined) {
        res.status(400).send("Seu idUsuario está undefined!");
    } else {

        tentativaModel.buscarTentativaKpi(idUsuario)
            .then((resultado) => {
                if (resultado.length >= 0) {
                    res.status(200).send(resultado[0]);
                } else {
                    res.status(204).json(erro.sqlMessage);
                }
            }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("Houve um erro ao buscar dados do gráfico! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    registrarTentativa,
    buscarTentativa,
    buscarTentativaKpi

}