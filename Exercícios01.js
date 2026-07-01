function contarDivisoresRaiz(n) {
    let contador = 0;
    const limite = Math.floor(Math.sqrt(n));

    for (let i = 1; i <= limite; i++) {
        if (n % i === 0) {
            let j = n / i;

            if (i === j) {
                contador += 1; 
            } else {
                contador += 2; 
            }
        }
    }
    return contador;
}