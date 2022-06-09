"use strict"

function sumaArreglo (arreglo){
    var resultado = 0
    for(let i = 0; i < arreglo.length; i++){
      resultado = arreglo[i]+resultado;
      }
      return resultado;
  }  
  var resultado = sumaArreglo ([]);
  console.log(resultado);