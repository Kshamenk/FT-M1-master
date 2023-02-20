'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
//   var resultado = [];
// for (var i = 2; i < num; i++) {
// if (num % i === 0) {
//   resultado.push(num % i === 0);
// }
// }
// return resultado;
var aux = [1]
var divisor = 2
while (num !== 1) {
  if (num % divisor === 0) {
    aux.push(divisor)
    num = num / divisor
  } else {
    divisor++
  }
}
return aux
}
// console.log(factorear(180))

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
	var desordenado = true;
  while (desordenado) {
    desordenado = false
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        var aux = array[i]
        array[i] = array[i + 1]
        array[i + 1 ] = aux
        desordenado = true
      }
    }
  }
	return array;
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
   for (let i = 1; i < array.length; i++) {
    var aux = array[i]
    var j = i - 1
    while (j >= 0 && array[j] > aux) {
      array[j + 1] = array[j]
      j--
    }
    array[j + 1] = aux 
   }
  return array
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 0; i < array.length - 1; i++) {
    var min = i
    console.log(min)
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j 
        console.log(min)
      }
    } 
    var aux = array[i] 
      array[i] = array[min]
      array[min] = aux
  }
  return array
}
console.log(selectionSort([5, 1, 4, 2, 8]))//([1, 2, 4, 5, 8])

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
