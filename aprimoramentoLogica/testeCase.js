function exibirHorarioRefeicao(refeicao) {
switch (refeicao) {
    case "jantar":
    return "jantar será servido às 20hrs";
    case "almoço":
    return "almoço será servido às 12hrs";
    case "café da manhã":
    return "café da manhã será servido às 08hrs";
    default:
    return "horário desconhecido";
}
}

function exibirOpcoesAcompanhamento(refeicao) {
switch (refeicao) {
    case "jantar":
    return "Opções de acompanhamento: carne, sem dieta, comer fora";
    case "almoço":
    return "Opções de acompanhamento: peixe, churras, fritinho";
    case "café da manhã":
    return "Opções de acompanhamento: vitaminas, cereais, surpresa";
    default:
    return "Opções desconhecidas";
}
}

let refeicao = "jantar";

const horarioRefeicao = exibirHorarioRefeicao(refeicao);
console.log(horarioRefeicao);

const opcoesAcompanhamento = exibirOpcoesAcompanhamento(refeicao);
console.log(opcoesAcompanhamento);
