"use strict"

var x = 1;
var y = 2;

if(x > 0 && y > 0){
    console.log("Ambos numeros son positivos");
} else if (x > 0 || y > 0){
    console.log("Uno de los numeros es positivo");
} else {
    console.log("Ningun numero es positivo");
}

