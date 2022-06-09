"use strict"

//16
var suma = (x, y) => x+y;

console.log(suma(1,2));


//17
var imprimir = x => "El resultado es: " + x;
console.log(imprimir(5));
console.log(imprimir("Hola"));

//18
var sumaArreglo = arreglo => {
    var resultado = 0
    for(let i = 0; i < arreglo.length; i++){
      resultado = arreglo[i]+resultado;
      }
      return resultado;
  }
    console.log(sumaArreglo([1, 2, 3]));

//19
var contiene = (arreglo, x) => {
    for (let i=0; i < arreglo.length; i++){ 
      if (arreglo[i] == x){
      return true;
      }
    }
      return false;
    }
  console.log(contiene([2, 4, 6], 6)); 