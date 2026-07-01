function verificarAcesso(senhaDigitada, senhaCadastrada) {
    let formatadaDigitada = senhaDigitada.trim().toLowerCase();
    let formatadaCadastrada = senhaCadastrada.trim().toLowerCase();

    return formatadaDigitada === formatadaCadastrada;
}

const inputUser = "   Secreta123  ";
const bancoDados = "secreta123";

console.log("Tentativa de Login válida?", verificarAcesso(inputUser, bancoDados));