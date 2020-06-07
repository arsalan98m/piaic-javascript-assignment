/*

Java-script assignments chapter 15 16 17

Make a TODO
Create an empty array with the name is courses. ```example: var courses=[] ``
Get the 5-course name from the user, example: var course1 =prompt("course 1", "computer") and save all 5 value in "courses" array. example: courses.push(course1)
print courses array in alertexample: alert(courses)
print all full 5-course name one by one in prompt. example: course1=prompt(course1, course1Value)
If the user edit any value (through prompt), then that value is edit in the array. example: course1=prompt(course1, course1ValueEdit) use Array.splice() to replace and edit index in array
print courses array in alertexample: alert(courses)
*/

var courses = [];
var course1 = prompt("Enter course 1", "computer");
courses.push(course1);

var course2 = prompt("Enter course 2", "english");
courses.push(course2);

var course3 = prompt("Enter course 3", "physics");
courses.push(course3);

var course4 = prompt("Enter course 4", "math");
courses.push(course4);

var course5 = prompt("Enter course 5", "chemistry");
courses.push(course5);

alert(courses);

course1 = prompt("Edit first course", course1);
courses.splice(0, 1, course1);

course2 = prompt("Edit second course", course2);
courses.splice(1, 1, course2);

course3 = prompt("Edit third course", course3);
courses.splice(2, 1, course3);

course4 = prompt("Edit fourth course", course4);
courses.splice(3, 1, course4);

course5 = prompt("Edit fifth course", course5);
courses.splice(4, 1, course5);

alert(courses);
