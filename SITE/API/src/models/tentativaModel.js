var database = require("../database/config");

function registrarTentativa(contAcerto, fkUsuario, erros) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function registrarTentativa():", contAcerto, fkUsuario, erros);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO tentativa (fkUsuario, fkQuiz, qtdAcertos, qtdErros) VALUES (${fkUsuario}, 1, ${contAcerto}, ${erros});`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarTentativa(idUsuario) {
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `SELECT qtdAcertos FROM tentativa WHERE fkUsuario = ${idUsuario} ORDER BY idTentativa desc limit 4`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarTentativaKpi(idUsuario) {
    var instrucaoSql = `SELECT qtdAcertos, qtdErros FROM tentativa WHERE fkUsuario = ${idUsuario} ORDER BY idTentativa DESC LIMIT 1`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    registrarTentativa,
    buscarTentativa,
    buscarTentativaKpi
}
