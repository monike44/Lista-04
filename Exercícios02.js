function inverterArray(lista) {
    let n = lista.length;

    for (let i = 0; i < Math.floor(n / 2); i++) {
        let temp = lista[i];
        let indiceOposto = n - 1 - i;

        lista[i] = lista[indiceOposto];
        lista[indiceOposto] = temp;
    }

    return lista;
}

const arrayOriginal = [10, 20, 30, 40, 50];

console.log("Array original:", [10, 20, 30, 40, 50]);
console.log("Array invertido:", inverterArray(arrayOriginal));