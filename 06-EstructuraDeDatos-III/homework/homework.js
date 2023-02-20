"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
  this.value = value
  this.left = null
  this.right = null
}

BinarySearchTree.prototype.size = function () {
  if (!this.left && !this.right) return this.value // nodo hoja             //         2
  if (!this.left) return 1 + this.right.size()                              //   null      null
  if (!this.right) return 1 + this.left.size()
  return 1 + this.left.size() + this.right.size()
}
BinarySearchTree.prototype.insert = function (value) {
  if (value < this.value) {
    // izquierda
    if (this.left) {
      // si hay algo 
      this.left.insert(value)
    } else {
      return this.left = new BinarySearchTree(value)
    }
  } else {
    if (this.right) {
      this.right.insert(value)
    } else {
      return this.right = new BinarySearchTree(value)
    }
  }
}
BinarySearchTree.prototype.contains = function (value) {
  if (value === this.value) return true
  if (this.left && this.left.contains(value)) return true
  if (this.right && this.right.contains(value)) return true
  return false
  // if (value < this.value) {
  //   if (!this.left) {
  //     return false 
  //   } else {
  //    return  this.left.contains(value)
  //   }
  // } else {
  //   if (!this.right) {
  //     return false
  //   } else {
  //    return this.right.contains(value)
  //   }
  // }
}
//  "pre-order" nodo-izq-der
// "in-order"  izq-nodo-der
// "post-order" izq-der-nodo
BinarySearchTree.prototype.depthFirstForEach = function (cb, orden) {
  // switch (orden) {
  //   case "pre-order":
  //     cb(this.value)
  //     this.left && this.left.depthFirstForEach(orden, cb)
  //     this.right && this.right.depthFirstForEach(orden, cb)
  //     break;
  //   case "post-order":
  //     this.left && this.left.depthFirstForEach(orden, cb)
  //     this.right && this.right.depthFirstForEach(orden, cb)
  //     cb(this.value)
  //     break;
  //   default:
  //     this.left && this.left.depthFirstForEach(orden, cb)
  //     cb(this.value)
  //     this.right && this.right.depthFirstForEach(orden, cb)
  //     break;
  // }
  if (orden === "in-order" || !orden) {
    this.left && this.left.depthFirstForEach(cb, orden)
    cb(this.value)
    this.right && this.right.depthFirstForEach(cb, orden)
  } else if (orden === "pre-order") {
    cb(this.value)
    this.left && this.left.depthFirstForEach(cb, orden)
    this.right && this.right.depthFirstForEach(cb, orden)
  } else {
    this.left && this.left.depthFirstForEach(cb, orden)
    this.right && this.right.depthFirstForEach(cb, orden)
    cb(this.value)
  }
}
BinarySearchTree.prototype.breadthFirstForEach = function (cb, arr) {
  if (!arr) {
    var arr = []
  }
  cb(this.value)
  this.left && arr.push(this.left)
  this.right && arr.push(this.right)
  arr.length && arr.shift().breadthFirstForEach(cb, arr)
}


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
