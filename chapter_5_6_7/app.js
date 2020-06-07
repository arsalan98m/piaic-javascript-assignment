/*
Java-script assignments chapter 5, 6, 7

declare a variable for Number 'a' for example a value is 2
declare a variable for Number 'b' for example b value is a++ + ++a - --a + a--
print meassage in alert() variable a
print meassage in alert() variable b
*/

var a = 10;
var b = a++ + ++a - --a + a--;
//      10  + 12 - 11 + 11
//      22 - 11 + 11
//       11 + 11
//        22
alert(a); // 10
alert(b); // 22
