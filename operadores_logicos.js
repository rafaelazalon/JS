console.log("Códigos da aula 'Operadores lógicos'");

console.log( true && false );
console.log( false || false );
console.log( !true );
console.log( 1 == '1' || "a" == "a" );
console.log( 35 === '35' && 1 == 10 );
console.log( !( 'a' == 1) );

// E lógico (&&)

console.log("Códigos do operador E lógico");

console.log( true && true );
console.log( true && false );
console.log( false && false );

// Ou lógico (||)

console.log("Códigos do operador OU lógico");

console.log( true || false );
console.log( false || true ) // true; 
console.log( false || false );

console.log( true || false && false || false && false || false && false && false || false ||false && false || false && false );

// NÃO lógico (!)

console.log("Códigos do operador NÃO lógico");

console.log( !false );
console.log( !true );

console.log( !(true || false) );
console.log( !(true || true && false) );