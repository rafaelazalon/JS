//IF ELSE CONVENCIONAL

var aprovado = true;

if (aprovado) {
    console.log("Parabéns");
}

//IF/ELSE CURTO-CIRCUITO

var aprovado = true;

aprovado && console.log("Parabéns");

//OUTRO EX DE CURTO-CIRCUITO

//Declaração da constante nome
const nome = 'Camila';

//Aqui é verificado se o nome possui ao menos um caractere
//Retorna true se possuir e false caso contrário
const nomeValido = nome.length > 0;

//Imprime o nome no console se for diferente de vazio
nomeValido && console.log(nome);