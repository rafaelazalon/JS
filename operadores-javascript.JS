var quantidadeVagas = 2 + 5; // resultado: 7
var contratados = 7 - 2; // resultado: 5
var valorContribuicao = 2500 * 0.10; // resultado: 250
var primeiraParcela = 2500 / 2; // resultado: 1250

console.log("texto" + " e complemento");
// Vai imprimir "texto e complemento"

console.log("5" + "6");
// Vai imprimir "56"

var verificaSeEPar = 20 % 2 == 0;

console.log("texto" + 20); // "texto20"
console.log("texto" + true); // "textotrue"
console.log("texto" + null); // "textonull"
console.log("texto" + undefined); // "textoundefined"
console.log( [1,2,3] + 4 ) // "1,2,34"
console.log( {nome:'José'} + 1 ); // “[object Object]1”

//OUTRO EXEMPLO

console.log(5 + 20); // 25
console.log(5 + true); // 6
console.log(5 + null); // 5
console.log(true + true); // 2
console.log(true + null); // 1
console.log(null + null); // 0
console.log(null + false); // 0
console.log(5 + undefined); // NaN
console.log(null + undefined); // NaN

//INCREMENTO E DECREMENTO

var contador = 5;
contador++;
console.log(contador);// contador agora vale 6

contador--;
console.log(contador);// contador agora vale 5

//OPERADORES

console.log( 21 == 21 ); // vai imprimir true
console.log( 120 == 100); // vai imprimir false

console.log( 11 != 21 ); // vai imprimir true
console.log( 100 != 100); // vai imprimir false

console.log("20" == 20); // true
console.log(  true == 1 ) ; // true

// ===, ==

"21" === 21 // o resultado será false
1 === true // o resultado será false

"21" !== 21 // o resultado será true
1 !== true // o resultado será true

true == 1 // o resultado será true
true != 1 // o resultado será false
false == 0 // o resultado será true
false != 0 // o resultado será false

//OPERADORES LOGICOS

true && false // false
false || false // false
!true // false

//USADOS PARA  COMBINAR OPERAÇÕES RELACIONAIS

1 == '1' || "a" == "a" // true
35 === '35' && 1 == 10 // false
!( 'a' == 1) // true

