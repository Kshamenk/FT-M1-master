'use strict'

function BinarioADecimal(num) {
  console.log(num)
  console.log(num.length - 1)
  // tu codigo aca
  // Formula  D*2** p
  // = 1 * 2**0 + 0 * 2**1 + 0 * 2 **2 + 1 * 2**3 + 1 * 2**4
  // var resultado = 0
  // var posicion = 0
  // for (let i = num.length - 1; i >= 0; i--) {
  //   console.log(num[i])
  //   resultado = resultado + num[i] * 2 ** posicion
  //   console.log(resultado)
  //   posicion = posicion + 1
  //   console.log(posicion)
  // }
  // console.log(resultado)
  // return resultado
//  var resultado =  parseInt(num, 2)
//  console.log(resultado)
//  return resultado
 var resultado = num.split("").reverse().join("")
  console.log(num)
  var pos = 0
  for (let i = 0; i < resultado.length; i++) {
    pos = pos + resultado[i] * 2**i
    
    
  }
  return pos
}
console.log(BinarioADecimal('11001'))//(25);

function DecimalABinario(num) {
  console.log(num)
  // tu codigo aca
  // Math.floor( num / 2 )
 // num % 2
  // num = 0
  var resto = ""
  while (num !== 0) {
    resto = num % 2 + resto
    num = Math.floor(num / 2)
  }
  console.log(resto)
  return resto 
}
console.log(DecimalABinario(25))//('11001');

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}