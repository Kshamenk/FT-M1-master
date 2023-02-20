// x = 1;
// var a = 5;
// var b = 10;
// var c = function(a, b, c) {
//    // var a = 8
//    // var b = 9
//    // var c= 10
//   var x = 10;
//   console.log(x); //10
//   console.log(a);//8
//   var f = function(a, b, c) {
//    // var a = 8
//    // var b = 9
//    // var c = 10
//     b = a; 
//     console.log(b); //8
//     b = c;
//     var x = 5;
//   }
//   f(a,b,c);
//   console.log(b); //9
// }
// c(8,9,10);
// console.log(b); //10
// console.log(x); //1
// ////////////////////////////////////////////////////////////////////
// //var bar 
// console.log(bar); // undefined
// console.log(baz); //2
// foo();
// function foo() { console.log('Hola!'); } // Hola!
// var bar = 1;
// baz = 2;
////////////////////////////////////////////////////////////////////////
// var instructor = "Tony";
// if(true) {
//     var  instructor = "Franco";
// }
// console.log(instructor);
//////////////////////////////////////////////////////////////////////
// var instructor = "Tony";
// console.log(instructor); //Tony
// (function() {
//    if(true) {
//       var instructor = "Franco";
//       console.log(instructor); //Franco
//    }
// })();
// console.log(instructor); //Tony
/////////////////////////////////////////////////////////////////////
// var instructor = "Tony";
// let pm = "Franco";
// if (true) {
//     var instructor = "The Flash";
//     let pm = "Reverse Flash";
//     console.log(instructor); //The Flash
//     console.log(pm);// Reverse Flash
// }
// console.log(instructor); //The Flash
// console.log(pm); //Franco
//////////////////////////////////////////////////
// console.log(6 / "3" ) //2
// console.log( "2" * "3") //6
// console.log( 4 + 5 + "px") // ( "9px" )
//  "$" + 4 + 5 // ("$45")
//  "4" - 2 // 2
//  "4px" - 2  // NaN
//  console.log( 7 / 0)  // 
//  console.log( {}[0]) // Null
//   parseInt("09") // 9
//  5 && 2 //2
//  2 && 5  // 5
//  5 || 0 // 5
//  0 || 5 // 5
//  [3]+[3]-[10] //33 - 10 =(23)
// console.log( 3>2>1) //false
//  [] == ![] // true increiblemente
////////////////////////////////////////////////////
// function test() {
//     console.log(a); //Unefined
//     console.log(foo()); //2
 
//     var a = 1;
//     function foo() {
//        return 2;
//     }
//  }
//  test()
/////////////////////////////////////////////////////
// var snack = 'Meow Mix';

// function getFood(food) {
//     // var food = false
//     if (food) {
//         var snack = 'Friskies';
//         return snack; //Friskies
//     }
//     return snack; //false
// }


// console.log(getFood(true))
//////////////////////////////////////////
// var fullname = 'Juan Perez';
// var obj = {
//    fullname: 'Natalia Nerea',
//    prop: {
//       fullname: 'Aurelio De Rosa',
//       getFullname: function() {
//          return this.fullname;
//       }
//    }
// };

// console.log(obj.prop.getFullname()); //Aurelio de Rosa

// var test = obj.prop.getFullname; // 
// // var test = function() {
// //         return this.fullname;
// //        } 
// console.log(test()); //Juan Perez
/////////////////////////////////////////////////////
function printing() {
    console.log(1);
    setTimeout(function() { console.log(2); }, 1000);
    setTimeout(function() { console.log(3); }, 0);
    console.log(4);
 }
 
 printing(); //1,4,3,2