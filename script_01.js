
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
	let c = a + b;
	return c;
}





// module: output | test:
// output()

output(add(2,2));
output(add(2,-2));

function output(outputData) {
	console.log(outputData);
}
  