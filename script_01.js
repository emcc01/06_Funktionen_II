
"use strict";

/*** Rechner */
/*
0. a+b | a-b | a*b | a/b  --> Ergebnis c 

1. Dateneingabe + -überprüfung : 
2. Auswahl Rechenart : 
3. Fkt. Grundrechenarten : check!
4. Ausgabe in Konsole : check!
*/

// Konstanten
const ERROR_STR_DIV = "Division durch 0 nicht möglich!";
const ERROR_STR_GEN = "Irgendetwas ging schief!"


// module: calculator | tests:
function calculator(a,b,op) {

	switch (op) {

		case "+":
            return add(a,b);          //return
		case "-":
			return sub(a,b);
		case "*":
			return mult(a,b);
		case "/":
		case ":":	
		    return div(a,b);
		default:
			return ERROR_STR_GEN;
	}

	
}

agreement : "+","-","*",":","/"
output(calculator(3,2,"+"));
output(calculator(3,2,"-"));
output(calculator(3,2,"*"));
output(calculator(3,2,":"));
output(calculator(3,2,"/"));
output(calculator(3,0,"/"));

output(calculator(3,2,"#?!"));



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
	if (b == 0) {          // Ausnahme
		return ERROR_STR_DIV;
	} 
		return a / b;    //Regel
}



// module: output | test:
// output()

output(div(3,0));
output(div(2,-2));

function output(outputData) {
	console.log(outputData);
}
  