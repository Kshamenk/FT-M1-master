'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length <= 1)  return array  // caso de corte
  var pivote = array[array.length - 1]       
  var izq = []
  var der = []
  var iguales = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] < pivote) izq.push(array[i])
    if (array[i] > pivote) der.push(array[i])
    if (array[i] === pivote) iguales.push(array[i])
  }
  return quickSort(izq).concat(iguales).concat(quickSort(der))
}
console.log(quickSort([5, 1, 4, 2, 8]))//([1, 2, 4, 5, 8]);
function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
