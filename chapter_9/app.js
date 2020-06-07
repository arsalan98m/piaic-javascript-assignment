/*
Java-script assignments chapter 9

input a value from user for example firstName is "Ameen"

input a second value from user for example lasName is "Alam"

input a third value from user for example age is "20"

print meassage in alert() Hello Ameen Alam, You are 20 years old

*/

firstName = prompt("Enter your first name");
lastName = prompt("Enter your last Name");
age = Number(prompt("Enter your age"));

alert(
  "Hello " + firstName + " " + lastName + ", You are " + age + " years old."
);
