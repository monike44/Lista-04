function gerarCracha(nome, departamento, id) {
    return `[${id}] - ${nome.toUpperCase()}: ${departamento}`;
}

console.log(gerarCracha("mario", "corredor", 01));