function calcularPrecoFinal(valorProduto, porcentagemDesconto) {
    let desconto = valorProduto * (porcentagemDesconto / 100);

    let valorFinal = valorProduto - desconto;

    return valorFinal;
}

console.log("Valor final a pagar: R$", calcularPrecoFinal(150, 20));