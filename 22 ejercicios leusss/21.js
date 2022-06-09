"use strict"

function llamarCon3y5 (x){
    var resultado = x(3, 5)
    return resultado;
}

function suma (a, b){
  var resultado = a+b;
  return resultado;
}

function producto(c, d){
  var resultado = c*d;
  return resultado;
}

var resultadoSuma = llamarCon3y5(suma);

var resultadoProducto = llamarCon3y5(producto);

console.log(resultadoSuma);
console.log(resultadoProducto);