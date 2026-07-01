let usuarios = [
  { id: 1, nome: "karina", ativo: true },
  { id: 2, nome: "marcio", ativo: false },
  { id: 3, nome: "leta", ativo: false }
];

usuarios.forEach((usuario) => {

    if (usuario.ativo) {

        console.log(
            `Usuário Ativo: ${usuario.nome} (ID: ${usuario.id})`
        );

    }

});