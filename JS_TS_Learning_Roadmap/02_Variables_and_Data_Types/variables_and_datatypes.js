/*************************************************************
                VARIABLES AND DATA TYPES
*************************************************************/

/*
DEFINITION:
A variable is a named container used to store data values.
The value stored in a variable can be used and modified throughout the program.
*/


/*************************************************************
1. VARIABLES
*************************************************************/

/*
var

DEFINITION:
var is the old way of declaring variables in JavaScript.
It is function-scoped and allows both redeclaration and reassignment.
*/

var name = "John";
var name = "Mike";

console.log(name); // Mike


/*
let

DEFINITION:
let is a modern way of declaring variables.
It is block-scoped and allows reassignment but not redeclaration.
*/

let age = 25;
age = 30;

console.log(age); // 30


/*
const

DEFINITION:
const is used to declare variables whose reference should not change.
It must be initialized during declaration and cannot be reassigned.
*/

const country = "India";

console.log(country);


/*************************************************************
2. VARIABLE DECLARATION, INITIALIZATION, ASSIGNMENT
*************************************************************/

/*
Declaration

DEFINITION:
Creating a variable without storing a value.
*/

let score;


/*
Initialization

DEFINITION:
Assigning a value to a variable for the first time.
*/

score = 100;


/*
Assignment

DEFINITION:
Updating or changing the value of a variable.
*/

score = 200;

console.log(score); // 200


/*************************************************************
3. VARIABLE REASSIGNMENT
*************************************************************/

/*
DEFINITION:
Reassignment means changing the value stored in a variable after it has
already been initialized.
*/

let city = "Chennai";

city = "Bangalore";

console.log(city); // Bangalore


/*************************************************************
4. PRIMITIVE DATA TYPES
*************************************************************/

/*
DEFINITION:
Primitive data types are basic data types that store a single value.
They are immutable (cannot be changed directly).
*/


/*
NUMBER

DEFINITION:
Represents both integers and decimal numbers.
*/

let price = 99.99;

console.log(typeof price); // number


/*
STRING

DEFINITION:
Represents textual data enclosed in single quotes, double quotes,
or backticks.
*/

let language = "JavaScript";

console.log(typeof language); // string


/*
BOOLEAN

DEFINITION:
Represents logical values: true or false.
*/

let isLoggedIn = true;

console.log(typeof isLoggedIn); // boolean


/*
UNDEFINED

DEFINITION:
A variable that has been declared but has not been assigned a value.
*/

let value;

console.log(value); // undefined


/*
NULL

DEFINITION:
Represents an intentional absence of a value.
*/

let data = null;

console.log(data); // null


/*
BIGINT

DEFINITION:
Used to represent very large integers beyond the safe limit of Number.
*/

let bigNumber = 123456789012345678901234567890n;

console.log(typeof bigNumber); // bigint


/*
SYMBOL

DEFINITION:
A unique and immutable value mainly used for creating unique identifiers.
*/

const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1 === id2); // false


/*************************************************************
5. NON-PRIMITIVE DATA TYPES
*************************************************************/

/*
DEFINITION:
Non-primitive types can store multiple values and are stored by reference.
*/


/*
OBJECT

DEFINITION:
An object stores data as key-value pairs.
*/

const person = {
    name: "John",
    age: 25
};

console.log(person.name);


/*
ARRAY

DEFINITION:
An array is a collection of multiple values stored in a single variable.
*/

const fruits = ["Apple", "Banana", "Orange"];

console.log(fruits[0]);


/*
FUNCTION

DEFINITION:
A function is a reusable block of code that performs a specific task.
*/

function greet() {
    return "Hello";
}

console.log(greet());


/*************************************************************
6. DYNAMIC TYPING
*************************************************************/

/*
DEFINITION:
JavaScript is dynamically typed, meaning a variable can hold
values of different data types at different times.
*/

let x = 10;

x = "JavaScript";

x = true;

console.log(x);


/*************************************************************
7. STATIC VS DYNAMIC TYPING
*************************************************************/

/*
STATIC TYPING

DEFINITION:
The variable type is fixed at compile time and cannot change.

Examples:
Java, C#, TypeScript
*/


/*
DYNAMIC TYPING

DEFINITION:
The variable type is determined at runtime and can change.

Examples:
JavaScript, Python
*/

let userData = 100;

userData = "John";

userData = true;


/*************************************************************
8. TYPE CHECKING
*************************************************************/

/*
DEFINITION:
Type checking is the process of determining the type of a value.
*/


/*
typeof OPERATOR

DEFINITION:
Returns the data type of a variable or value.
*/

console.log(typeof 25);         // number
console.log(typeof "Hello");    // string
console.log(typeof true);       // boolean
console.log(typeof undefined);  // undefined


/*
instanceof OPERATOR

DEFINITION:
Checks whether an object is created from a specific constructor.
*/

const arr = [1, 2, 3];

console.log(arr instanceof Array); // true
console.log(arr instanceof Object); // true


/*************************************************************
9. TYPE COERCION
*************************************************************/

/*
DEFINITION:
Type coercion is the automatic or manual conversion of one data type
into another.
*/


/*
IMPLICIT TYPE CONVERSION

DEFINITION:
JavaScript automatically converts a value from one type to another.
*/

console.log("5" + 2); // "52"
console.log("5" - 2); // 3
console.log(true + 1); // 2


/*
EXPLICIT TYPE CONVERSION

DEFINITION:
The programmer manually converts a value into another type.
*/

console.log(Number("100")); // 100
console.log(String(100));   // "100"
console.log(Boolean(1));    // true


/*************************************************************
10. TRUTHY AND FALSY VALUES
*************************************************************/

/*
DEFINITION:
JavaScript treats some values as true and others as false
when used in conditions.
*/


/*
FALSY VALUES

DEFINITION:
Values that are automatically treated as false.

false
0
-0
0n
""
null
undefined
NaN
*/

/*
TRUTHY VALUES

DEFINITION:
Values that are automatically treated as true.


"hello"
[]
{}
42
"0"
"false"
*/

if ("false") {
    console.log("Truthy");
}

if (false) {
    console.log("Falsy"); //Skipped because false is a falsy value
}


/*************************************************************
11. NaN (NOT A NUMBER)
*************************************************************/

/*
DEFINITION:
NaN represents an invalid numeric result.
It occurs when a mathematical operation cannot produce a valid number.
*/

console.log("abc" / 2); // NaN

console.log(Number.isNaN(NaN)); // true


/*************************************************************
12. INFINITY AND -INFINITY
*************************************************************/

/*
DEFINITION:
Infinity represents a value greater than any number.
-Infinity represents a value smaller than any number.
*/

console.log(1 / 0);  // Infinity

console.log(-1 / 0); // -Infinity


/*************************************************************
13. NULL VS UNDEFINED
*************************************************************/

/*
undefined

DEFINITION:
A variable exists but no value has been assigned to it.
*/

let a;

console.log(a); // undefined


/*
null

DEFINITION:
A value intentionally assigned to indicate "no value".
*/

let b = null;

console.log(b); // null


/*
Difference:

undefined -> Variable has no assigned value.
null      -> Variable intentionally contains no value.
*/


/*************************************************************
14. PASS-BY-VALUE
*************************************************************/

/*
DEFINITION:
For primitive data types, a copy of the value is passed.
Changes to one variable do not affect the other.
*/

let num1 = 10;

let num2 = num1;

num2 = 20;

console.log(num1); // 10
console.log(num2); // 20


/*************************************************************
15. OBJECT REFERENCES
*************************************************************/

/*
DEFINITION:
Objects and arrays are stored by reference.
Multiple variables can point to the same object in memory.
*/

const person1 = {
    name: "John"
};

const person2 = person1;

person2.name = "Mike";

console.log(person1.name); // Mike
console.log(person2.name); // Mike


/*************************************************************
INTERVIEW QUICK REVISION
*************************************************************/

/*
Primitive Data Types:
- Number
- String
- Boolean
- Undefined
- Null
- BigInt
- Symbol

Non-Primitive Data Types:
- Object
- Array
- Function

JavaScript:
- Dynamically Typed Language

Type Checking:
- typeof
- instanceof

Type Conversion:
- Implicit Conversion
- Explicit Conversion

Comparison:
==  -> Loose Equality
=== -> Strict Equality

Falsy Values:
false, 0, -0, 0n, "", null, undefined, NaN

Objects & Arrays:
- Stored by Reference

Primitive Values:
- Passed by Value
*/