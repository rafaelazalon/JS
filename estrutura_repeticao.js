for ( let contador = 0; contador < 10; contador++ ){

    console.log("O número é: " + contador);

}

// O número é: 0
// O número é: 1
// O número é: 2
// O número é: 3
// O número é: 4
// O número é: 5
// O número é: 6
// O número é: 7
// O número é: 8
// O número é: 9

let contador = 0;

while ( contador < 5 ) {

    console.log( contador + " é menor que 5" );

    contador++;

}

// 0 é menor que 5
// 1 é menor que 5
// 2 é menor que 5
// 3 é menor que 5
// 4 é menor que 5

let valor_produto = 500;

for ( let contador = 1; contador <= 5; contador++ )
{
    let valor_parcela = valor_produto / contador;
    console.log("Nº de parcelas: " + contador + " - Valor da parcela: R$" + valor_parcela.toFixed(2));
}

// Nº de parcelas: 1 - Valor da parcela: R$500.00
// Nº de parcelas: 2 - Valor da parcela: R$250.00
// Nº de parcelas: 3 - Valor da parcela: R$166.67
// Nº de parcelas: 4 - Valor da parcela: R$125.00
// Nº de parcelas: 5 - Valor da parcela: R$100.00
