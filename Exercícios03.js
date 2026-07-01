function filtrarPares(numeros) {
    let pares = [];

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            pares.push(numeros[i]);
        }
    }

    return pares;
}

const entrada = [9, 10, 55, 72, 9, 3];

console.log("Entrada:", entrada);
console.log("Apenas Pares:", filtrarPares(entrada));