let paises = ["Brasil", "Suíça", "França", "Japão"];

let contador = 0;

while ( contador < paises.length ) {

    console.log(paises[contador]);
    contador++;

}

// Brasil
// Suíça
// França
// Japão

//EXEMPLO COM IF E ELSE

let numeros = [10, 5, 7, 8, 9, 6, 12, 4];

let total_impares = 0;
let total_pares = 0;

let contador = 0;

while ( contador < numeros.length ) {

    if( numeros[contador] % 2 == 0 ){
        total_pares++;
    } else {
        total_impares++;
    }

    contador++;

}

console.log(" O total de números ímpares é: " + total_impares);
console.log(" O total de números pares é: " + total_pares);

// O total de números ímpares é: 3
// O total de números pares é: 5

//OUTRO EXEMPLO CONVENCIONAL

let alunos = ["Diogo","Carlos","Danilo","Pedro","César"];

let contador = 0;

while ( contador < alunos.length ) {

    let aluno_nome = alunos[contador];

    console.log( "Aluno: " + aluno_nome );
    contador++;

}

// Aluno: Diogo
// Aluno: Carlos
// Aluno: Danilo
// Aluno: Pedro
// Aluno: César