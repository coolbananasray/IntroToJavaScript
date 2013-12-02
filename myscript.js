
/* Example about console.log()

console.log("Hello from myscript.js"); //example of a console prompt
console.log("Hello again!");
*/

/* Example about Variables

var name = prompt("What is your name?");
alert("Hello " + name); 

name = "Nick"; // reassign the name variable to Nick

console.log("the user's name is " + name);
// EXAMPLE: alert("Hello " + prompt("What is your name?")); this command 1st prompts the inner parameter "prompt", then the outside "alert".
*/

/* Example about if/else

console.log("Before");
var name = prompt("What is your name?");
if(name){
	console.log("If block true");
}
else {
	console.log("If block false");
}
console.log("After");
*/

/* Example about For/While loops

console.log("Before While loop");
var counter = 10;
while(counter) {
	console.log("Hello World");
	counter--; // example of counter = counter -1
}
while(prompt("What is your name?")) {
	console.log("Got your name");
}
console.log("After While loop");

console.log("Before For loop");
for (var i=10;i;i--) {
	console.log("Hello World 2");
}
console.log("After For loop");
*/

/* Example about Arrays

var friends = ["Jim","John","Sam","Allison","Joy"];
console.log(friends);
console.log(friends.length);

console.log(friends[0]); // get Jim value
var friendNumber = 3; // get Allison value
console.log(friends[friendNumber]);

for (var i = 0; i < friends.length; i+=1) { // example for loop on array 
	console.log(friends[i]);
}
*/ 

/* Example about Objects

var me = { // Example of key value objects
	first_name: "Ray",
	last_name: "Prado",
	"Employee Number": 5432543
}

console.log(me);
console.log(me.first_name);
console.log(me.last_name);
console.log(me["Employee Number"]);
console.log(me["last_name"]);

me.first_name = "James"; // Change the first name
me["last_name"] = "Bond"; // change the last name

var key = "first_name"; // dynamic property example
console.log(me[key]); // show the first name

var secretKey = ["first_name", "last_name", "Employee Number"]; // using dynamic property and array

for (var i = 0; i < secretKey.length; i+=1) {
	console.log(me[secretKey[i]]);
}
*/

/* Example of Functions 

var sayHello = function(){
	console.log("Hello World!");
}
sayHello();

var debug = function(message){
	console.log("Debug", message);
}
debug("x has been set");

var doubleNumber = function(num){
	return num * 2;
}
debug(doubleNumber(7));
*/
