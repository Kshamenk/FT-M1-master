var obj = {5:25,6:36,2:4}
console.log(obj[5])
obj[3] = 9
console.log(obj)

function crearCadena(delimitadorIzquierda, delimitadorDerecha, cadena) {
    return delimitadorIzquierda + cadena + delimitadorDerecha;
    //            *                "hola"           *
  }
  
  let textoAsteriscos = crearCadena.bind(this, "*" , "*" );
  console.log(textoAsteriscos("hola"))