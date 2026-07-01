class ContaBancaria{
    constructor(nome){
        this.nome = nome;
        this.saldo = 0;

    }
    depositar(valor){
        this.saldo += valor;
    }
    sacar(valor){
        if(this.saldo >= valor){
          this.saldo -= valor;
        }else{
            console.log(
                `Saldo insuficiente para o saque de R$ ${valor}`
            );

        }

    }

}