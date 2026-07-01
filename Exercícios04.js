function formatarNome(nomeBaguncado) {
    let primeiraLetra = nomeBaguncado.charAt(0).toUpperCase();

    let restanteNome = nomeBaguncado.slice(1).toLowerCase();

    return primeiraLetra + restanteNome;
}

const entradaNome = "lAriSsA";

console.log("Entrada:", entradaNome);
console.log("Nome Formatado:", formatarNome(entradaNome));