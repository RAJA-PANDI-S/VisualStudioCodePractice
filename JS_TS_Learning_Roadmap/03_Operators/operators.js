/*******************************************************
3. OPERATORS IN JAVASCRIPT
Definition + Sample Program + Simple Explanation
*******************************************************/

/*======================================================
1. Arithmetic Operators
Definition:
Used to perform mathematical calculations.
Operators: +, -, *, /, %, **
======================================================*/
let a = 10, b = 3;

console.log("Addition:", a + b);       // 13
console.log("Subtraction:", a - b);    // 7
console.log("Multiplication:", a * b); // 30
console.log("Division:", a / b);       // 3.333
console.log("Modulus:", a % b);        // 1
console.log("Exponent:", a ** b);      // 1000

// Explanation:
// Performs basic mathematical operations.


/*======================================================
2. Assignment Operators
Definition:
Used to assign values to variables.
======================================================*/
let x = 10;

x += 5;  // x = x + 5
console.log(x); // 15

x -= 3;  // x = x - 3
console.log(x); // 12

x *= 2;  // x = x * 2
console.log(x); // 24

// Explanation:
// Shorter way to update variable values.


/*======================================================
3. Comparison Operators
Definition:
Compare two values and return true or false.
======================================================*/
console.log(10 > 5);   // true
console.log(10 < 5);   // false
console.log(10 >= 10); // true
console.log(10 <= 9);  // false

// Explanation:
// Used in conditions and decision making.


/*======================================================
4. Equality Operators
Definition:
Check whether values are equal.
======================================================*/
console.log(5 == "5");   // true
console.log(5 === "5");  // false

// Explanation:
// Equality operators compare values.


/*======================================================
5. Strict Equality (===)
Definition:
Checks value and datatype.
======================================================*/
console.log(10 === 10);     // true
console.log(10 === "10");   // false

// Explanation:
// Recommended because type must also match.


/*======================================================
6. Loose Equality (==)
Definition:
Checks only value after type conversion.
======================================================*/
console.log(10 == "10"); // true

// Explanation:
// JavaScript converts datatype automatically.


/*======================================================
7. Logical Operators
Definition:
Used to combine multiple conditions.
======================================================*/
let age = 20;
let hasLicense = true;

console.log(age >= 18 && hasLicense);
console.log(age >= 18 || hasLicense);
console.log(!hasLicense);

// Explanation:
// Logical operators return true or false.


/*======================================================
8. Logical AND (&&)
Definition:
Returns true if all conditions are true.
======================================================*/
console.log(true && true);   // true
console.log(true && false);  // false

// Explanation:
// Every condition must be true.


/*======================================================
9. Logical OR (||)
Definition:
Returns true if at least one condition is true.
======================================================*/
console.log(true || false); // true
console.log(false || false); // false

// Explanation:
// Only one condition needs to be true.


/*======================================================
10. Logical NOT (!)
Definition:
Reverses a boolean value.
======================================================*/
console.log(!true);  // false
console.log(!false); // true

// Explanation:
// Converts true to false and vice versa.


/*======================================================
11. Nullish Coalescing (??)
Definition:
Returns right value only if left side is null or undefined.
======================================================*/
let userName = null;
console.log(userName ?? "Guest");

// Explanation:
// Useful for default values.


/*======================================================
12. Optional Chaining (?.)
Definition:
Safely accesses nested properties.
======================================================*/
const student = {
    name: "John"
};

console.log(student.address?.city); // undefined

// Explanation:
// Prevents errors if a property doesn't exist.


/*======================================================
13. Ternary Operator
Definition:
Short form of if...else.
======================================================*/
let marks = 80;

let result = marks >= 50 ? "Pass" : "Fail";
console.log(result);

// Explanation:
// condition ? value1 : value2


/*======================================================
14. Unary Operators
Definition:
Operate on a single operand.
======================================================*/
let num = 5;
console.log(-num); // -5

// Explanation:
// Uses one value only.


/*======================================================
15. Increment and Decrement
Definition:
Increase or decrease value by 1.
======================================================*/
let count = 5;

count++;
console.log(count); // 6

count--;
console.log(count); // 5

// Explanation:
// ++ increases, -- decreases.


/*======================================================
16. Bitwise Operators
Definition:
Perform operations at binary level.
======================================================*/
console.log(5 & 1); // AND
console.log(5 | 1); // OR
console.log(5 ^ 1); // XOR

// Explanation:
// Works on binary representation of numbers.


/*======================================================
17. Shift Operators
Definition:
Shift binary bits left or right.
======================================================*/
console.log(5 << 1); // 10
console.log(5 >> 1); // 2

// Explanation:
// Left shift multiplies, right shift divides by 2.


/*======================================================
18. String Operators
Definition:
Used to combine strings.
======================================================*/
let firstName = "John";
let lastName = "Doe";

console.log(firstName + " " + lastName);

// Explanation:
// + operator concatenates strings.


/*======================================================
19. in Operator
Definition:
Checks if property exists in an object.
======================================================*/
const person = {
    name: "Alice",
    age: 25
};

console.log("name" in person); // true

// Explanation:
// Returns true if property exists.


/*======================================================
20. delete Operator
Definition:
Removes an object property.
======================================================*/
const car = {
    brand: "Toyota",
    color: "Black"
};

delete car.color;
console.log(car);

// Explanation:
// Deletes specified property.


/*======================================================
21. new Operator
Definition:
Creates an object from a constructor.
======================================================*/
function Employee(name) {
    this.name = name;
}

const emp = new Employee("David");
console.log(emp.name);

// Explanation:
// Creates a new instance/object.


/*======================================================
22. void Operator
Definition:
Evaluates expression and returns undefined.
======================================================*/
let value = void(100);
console.log(value); // undefined

// Explanation:
// Expression runs but result is discarded.


/*======================================================
23. typeof Operator
Definition:
Returns datatype of a value.
======================================================*/
console.log(typeof 10);        // number
console.log(typeof "Hello");   // string
console.log(typeof true);      // boolean

// Explanation:
// Used to identify variable types.


/*======================================================
24. Operator Precedence
Definition:
Determines order of evaluation.
======================================================*/
let output = 5 + 3 * 2;
console.log(output); // 11

// Explanation:
// Multiplication executes before addition.


/*======================================================
25. Operator Associativity
Definition:
Determines evaluation direction.
======================================================*/
let p, q, r;

p = q = r = 100;
console.log(p, q, r);

// Explanation:
// Assignment works right-to-left.


/*======================================================
26. Short-Circuit Evaluation
Definition:
Logical operators stop evaluation early.
======================================================*/
let username = "Admin";

console.log(username || "Guest");
console.log(false && "Hello");

// Explanation:
// OR returns first truthy value.
// AND returns first falsy value.


/*======================================================
27. Nullish Coalescing (??) vs Logical OR (||)
Definition:
Both provide default values but behave differently.
======================================================*/

let score1 = 0;
console.log(score1 || 100); // 100

let score2 = 0;
console.log(score2 ?? 100); // 0

// Explanation:
// || treats 0, "", false as falsy.
// ?? only treats null and undefined as missing.

/*******************************************************
END OF JAVASCRIPT OPERATORS
*******************************************************/