
// ✅ Can be reassigned

var age = 25;
age = 30;

 // ✅ Can be redeclared

var city = "Chennai";
var city = "Mumbai";

// ❌Function-scoped, not block-scoped

if (true) {
var x = 10;
}

console.log(x); // 10

// The variable is available outside the block.

// ========================================================================


//✅ Can be reassigned

let count = 1;
count = 2;

//❌ Cannot be redeclared in the same scope

let count1 = 1;
//let count1 = 2; // Error

//✅ Block-scoped

if (true) {
let y = 20;
}

//console.log(y); // Error


//y exists only inside the if block.
// ========================================================================

//❌ Cannot be reassigned

const PI = 3.14;
//PI = 3.14159; // Error

//❌ Cannot be redeclared

const PIv = 3.14;
//const PIv = 3.14159; // Error

//✅ Block-scoped

if (true) {
const z = 50;
}

//console.log(z); // Error

// --> const prevents reassignment of the variable, not modification of object properties.
const person = {
name: "Varshini"
};

person.name = "John"; // Allowed

console.log(person.name);