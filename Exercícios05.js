function extrairDominio(email) {
    let posicaoArroba = email.indexOf("@");

    if (posicaoArroba === -1) return "E-mail inválido";

    let dominio = email.slice(posicaoArroba + 1);

    return dominio;
}

const entradaEmail = "thycarmesim@gmail.com";

console.log("E-mail:", entradaEmail);
console.log("Domínio extraído:", extrairDominio(entradaEmail));