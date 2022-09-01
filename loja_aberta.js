//Define a variavel com o dia da semana (0 = Domingo, 1 = Segunda...)
var dia_semana = 5;

//Verifica se o dia da semana é sábado ou domingo
if(dia_semana == 0 || dia_semana == 6) {
    //Imprime uma mensagem informando o horário de funcionamento
    console.log("Funcionamos apenas de Segunda à Sexta");
}
else
{
    //Do contrário, informa que a loja está aberta
    console.log("Loja aberta");
}

let x = 10;
let y = "10";

if(x == y)
{
    console.log("X é igual a Y");
}
else
{
    console.log("X é diferente de Y");
}



if(x === y)
{
    console.log("X é igual a Y");
}
else
{
    console.log("X é diferente de Y");
}

var x = "";
var y = 0;

if(x === y) {
    console.log("X e Y são iguais");
}
else {
    console.log("X e Y são diferentes");
}

let y = '10';

let resposta_usuario = "";

if(resposta_usuario === 0)
{
    console.log("resposta correta");
}
else
{
    console.log("resposta incorreta");
}