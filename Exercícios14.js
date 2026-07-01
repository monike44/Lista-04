function calcularMediaTurma(listaAlunos){

    let soma = 0;

    listaAlunos.forEach(function(aluno){

        soma += aluno.nota;

    });

    let media = soma / listaAlunos.length;

    return media.toFixed(1);

}

let alunos = [

    { nome: "luiza", nota: 8.5 },

    { nome: "Beatriz", nota: 9.0 },

    { nome: "jason", nota: 6.5 }

];

console.log("a média é:" ,calcularMediaTurma(alunos));