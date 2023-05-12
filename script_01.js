
"use strict";

/*** Rechner */
/*
0. a+b | a-b | a*b | a/b  --> Ergebnis c 

1. Dateneingabe + -überprüfung : 
2. Auswahl Rechenart : 
3. Fkt. Grundrechenarten : 
4. Ausgabe in Konsole : check!
*/


// module: addition a + b | test:
function add(a,b) {
	return a + b;
}

// module: substraction a - b | test:
function sub(a,b) {
	return a - b;
}

// module: multiplication a * b | test:
function mult(a,b) {
	return a * b;
}

// module: division a / b | test:
function div(a,b) {
	return a / b;
}




// module: output | test:
// output()

output(sub(2,2));
output(sub(2,-2));

function output(outputData) {
	console.log(outputData);
}
  