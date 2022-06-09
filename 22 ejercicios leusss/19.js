"strict use"

function contiene(arreglo, x){
    for (let i=0; i < arreglo.length; i++){ 
      if (arreglo[i] == x){
      return true;
      }
    }
      return false;
    }    
  
    var resultado = contiene([2, 4, 6], 6);
    console.log(resultado);   
    