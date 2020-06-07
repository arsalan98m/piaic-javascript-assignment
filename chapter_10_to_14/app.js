/*Java-script assignments chapter 10 to 14

Make a Calculator
input a value from user for example num1 is 7
input a second value from user for example num2 is 3
input a third value from user for example sign is "+" or "-" or "*" or "/" or "%"
print operation in alert() 7-3 =4, or 7*3 =21, or 7/3 =2.3, or 7+3 =10 or 7%3 =1
*/

/*
var num1 = parseInt(prompt("Enter first number"));
var num2 = parseInt(prompt("Enter second number"));
var operator = prompt("Enter operator: eg. +, -, *, /, %");

if (operator === "+") {
  alert(num1 + " + " + num2 + " = " + (num1 + num2));
} else if (operator === "-") {
  alert(num1 + " - " + num2 + " = " + (num1 - num2));
} else if (operator === "*") {
  alert(num1 + " * " + num2 + " = " + num1 * num2);
} else if (operator === "/") {
  alert(num1 + " / " + num2 + " = " + num1 / num2);
} else if (operator === "%") {
  alert(num1 + " % " + num2 + " = " + (num1 % num2));
} else {
  alert("It's not valid opeartor");
}
*/

var course1 = +prompt("Enter first course marks:");
var course2 = +prompt("Enter second course marks");
var course3 = +prompt("Enter third course marks");
var course4 = +prompt("Enter fourth course marks");
var course5 = +prompt("Enter fifth course marks");

var totalMarks = 500;
var obtainedMarks = course1 + course2 + course3 + course4 + course5;
var percentage = (obtainedMarks * 100) / totalMarks;

alert("Your obtained marks are: " + obtainedMarks);
alert("Your percentage is " + percentage + "%");
