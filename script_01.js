
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
	if (b != 0) {
		return a / b;
	} else {
		return "Teilen durch 0 nicht möglich";
	}

	
}




// module: output | test:
// output()

output(div(3,0));
output(div(2,-2));

function output(outputData) {
	console.log(outputData);
}
  