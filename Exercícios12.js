const produto = {
  nome : 'coxinha',
  preço : 10,
  emEstoque : true ,
 calcularTotalEstoque: function(quantidadeDesejada) {
   return this.preço * quantidadeDesejada;
}
  
}

console.log(
    `O valor para 3 unidades de ${produto.nome} é R$ ${produto.calcularTotalEstoque(3)}`
);