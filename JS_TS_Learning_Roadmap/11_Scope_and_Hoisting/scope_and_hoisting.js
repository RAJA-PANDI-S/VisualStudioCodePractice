// ============================================================================
// 11. SCOPE AND HOISTING IN JAVASCRIPT
// Each Topic Contains:
// 1. Definition
// 2. Sample Program
// 3. Simple Explanation
// ============================================================================

/*
-----------------------------------------------------------------------------
1. Global Scope
-----------------------------------------------------------------------------
Definition:
Variables declared outside all functions and blocks belong to the global scope.

Example:
*/
let globalVar = "I am Global";

function showGlobal() {
  console.log(globalVar);
}

showGlobal();

/*
Explanation:
Global variables can be accessed from anywhere in the program.
*/


/*
-----------------------------------------------------------------------------
2. Function Scope
-----------------------------------------------------------------------------
Definition:
Variables declared inside a function are accessible only within that function.

Example:
*/
function testScope() {
  let message = "Inside Function";
  console.log(message);
}

testScope();

/*
Explanation:
message cannot be accessed outside the function.
*/


/*
-----------------------------------------------------------------------------
3. Block Scope
-----------------------------------------------------------------------------
Definition:
Variables declared using let and const exist only inside the block {}.

Example:
*/
{
  let age = 25;
  console.log(age);
}

/*
Explanation:
age exists only inside the block.
*/


/*
-----------------------------------------------------------------------------
4. Module Scope
-----------------------------------------------------------------------------
Definition:
Variables declared inside ES Modules are available only within that module.

Example:
*/
// file1.js
export const username = "John";

// file2.js
import { username } from "./file1.js";

console.log(username);

/*
Explanation:
Module variables are isolated from the global scope.
*/


/*
-----------------------------------------------------------------------------
5. Lexical Scope
-----------------------------------------------------------------------------
Definition:
Functions can access variables from their outer scope.

Example:
*/
let language = "JavaScript";

function displayLanguage() {
  console.log(language);
}

displayLanguage();

/*
Explanation:
The function accesses variables from where it was defined.
*/


/*
-----------------------------------------------------------------------------
6. Scope Chain
-----------------------------------------------------------------------------
Definition:
JavaScript searches variables from inner scope to outer scope.

Example:
*/
let city = "Delhi";

function outer() {

  function inner() {
    console.log(city);
  }

  inner();
}

outer();

/*
Explanation:
inner() finds city through the scope chain.
*/


/*
-----------------------------------------------------------------------------
7. Variable Shadowing
-----------------------------------------------------------------------------
Definition:
An inner variable with the same name hides the outer variable.

Example:
*/
let name = "Global Name";

function demo() {
  let name = "Local Name";

  console.log(name);
}

demo();

/*
Explanation:
The local variable shadows the global variable.
*/


/*
-----------------------------------------------------------------------------
8. Illegal Shadowing
-----------------------------------------------------------------------------
Definition:
Occurs when a variable declaration conflicts with scope rules.

Example:
*/
/*
let value = 10;

{
  var value = 20; // Error
}
*/

/*
Explanation:
A var declaration cannot illegally shadow a let or const
in the same scope hierarchy.
*/


/*
-----------------------------------------------------------------------------
9. Hoisting
-----------------------------------------------------------------------------
Definition:
JavaScript moves declarations to the top of their scope before execution.

Example:
*/
console.log(a);

var a = 100;

/*
Explanation:
Only the declaration is hoisted, not the assignment.
*/


/*
-----------------------------------------------------------------------------
10. Variable Hoisting
-----------------------------------------------------------------------------
Definition:
Variables declared with var are hoisted.

Example:
*/
console.log(score);

var score = 50;

/*
Explanation:
Output: undefined
*/


/*
-----------------------------------------------------------------------------
11. Function Hoisting
-----------------------------------------------------------------------------
Definition:
Function declarations are fully hoisted.

Example:
*/
greet();

function greet() {
  console.log("Hello");
}

/*
Explanation:
Function can be called before declaration.
*/


/*
-----------------------------------------------------------------------------
12. var Hoisting
-----------------------------------------------------------------------------
Definition:
var variables are initialized with undefined during hoisting.

Example:
*/
console.log(quantity);

var quantity = 10;

/*
Explanation:
Output is undefined instead of error.
*/


/*
-----------------------------------------------------------------------------
13. let and const Hoisting
-----------------------------------------------------------------------------
Definition:
let and const are hoisted but remain inaccessible before declaration.

Example:
*/
/*
console.log(total);

let total = 100;
*/

/*
Explanation:
Causes a ReferenceError.
*/


/*
-----------------------------------------------------------------------------
14. Temporal Dead Zone (TDZ)
-----------------------------------------------------------------------------
Definition:
The time between entering scope and variable declaration.

Example:
*/
/*
console.log(user);

let user = "John";
*/

/*
Explanation:
Accessing variable in TDZ throws an error.
*/


/*
-----------------------------------------------------------------------------
15. Global Object
-----------------------------------------------------------------------------
Definition:
The global object provides globally available properties.

Example:
*/
console.log(globalThis);

/*
Explanation:
globalThis represents the global object in any environment.
*/


/*
-----------------------------------------------------------------------------
16. Global Execution Context
-----------------------------------------------------------------------------
Definition:
The default execution context created when a script starts.

Example:
*/
let appName = "My App";

console.log(appName);

/*
Explanation:
Global variables are created inside the global execution context.
*/


/*
-----------------------------------------------------------------------------
17. Function Execution Context
-----------------------------------------------------------------------------
Definition:
A new execution context is created whenever a function runs.

Example:
*/
function calculate() {
  let result = 10 + 20;

  console.log(result);
}

calculate();

/*
Explanation:
Each function call gets its own environment.
*/


/*
-----------------------------------------------------------------------------
18. Execution Context Creation
-----------------------------------------------------------------------------
Definition:
JavaScript creates memory for variables and functions before execution.

Example:
*/
console.log(num);

var num = 5;

/*
Explanation:
Memory creation happens before code execution.
*/


/*
-----------------------------------------------------------------------------
19. Execution Context Lifecycle
-----------------------------------------------------------------------------
Definition:
Execution context goes through Creation and Execution phases.

Example:
*/
var x = 10;

function show() {
  console.log(x);
}

show();

/*
Explanation:
JavaScript first creates memory, then executes code.
*/


/*
-----------------------------------------------------------------------------
20. Call Stack
-----------------------------------------------------------------------------
Definition:
A stack that keeps track of function execution order.

Example:
*/
function first() {
  second();
}

function second() {
  third();
}

function third() {
  console.log("Inside Third");
}

first();

/*
Explanation:
Functions are pushed and removed from the call stack.
*/


/*
-----------------------------------------------------------------------------
21. Lexical Environment
-----------------------------------------------------------------------------
Definition:
An internal structure containing variables and references to outer scopes.

Example:
*/
let framework = "React";

function printFramework() {
  console.log(framework);
}

printFramework();

/*
Explanation:
The lexical environment stores scope information.
*/


/*
-----------------------------------------------------------------------------
22. Environment Records
-----------------------------------------------------------------------------
Definition:
Internal records used to store variables and function declarations.

Example:
*/
let username = "Admin";

function login() {
  let password = "1234";
}

login();

/*
Explanation:
JavaScript internally stores these values in environment records.
*/


/*
-----------------------------------------------------------------------------
23. Closures and Scope
-----------------------------------------------------------------------------
Definition:
A closure is a function that remembers variables from its outer scope.

Example:
*/
function counter() {

  let count = 0;

  return function() {
    count++;
    return count;
  };
}

const increment = counter();

console.log(increment());
console.log(increment());
console.log(increment());

/*
Explanation:
The inner function remembers the count variable even after
the outer function has finished execution.
*/


// ============================================================================
// QUICK SUMMARY
// ============================================================================

/*
Global Scope        -> Accessible everywhere
Function Scope      -> Accessible only inside function
Block Scope         -> Accessible only inside {}
Lexical Scope       -> Scope based on code location
Scope Chain         -> Searches outer scopes for variables
Hoisting            -> Declarations moved before execution
TDZ                 -> Area before let/const declaration
Call Stack          -> Tracks function execution
Execution Context   -> Environment where code runs
Closure             -> Function remembers outer variables
*/


// ============================================================================
// END OF SCOPE AND HOISTING
// ============================================================================