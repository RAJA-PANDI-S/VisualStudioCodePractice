// ============================================================================
// 10. FUNCTIONS IN JAVASCRIPT
// Each Topic Contains:
// 1. Definition
// 2. Sample Program
// 3. Simple Explanation
// ============================================================================

/*
-----------------------------------------------------------------------------
1. Function Fundamentals
-----------------------------------------------------------------------------
Definition:
A function is a reusable block of code that performs a specific task.

Example:
*/
function greet() {
  console.log("Hello World");
}
greet();

/*
Explanation:
Functions help avoid repeating code.
*/


/*
-----------------------------------------------------------------------------
2. Function Declarations
-----------------------------------------------------------------------------
Definition:
A function declared using the function keyword.

Example:
*/
function add(a, b) {
  return a + b;
}

console.log(add(5, 3));

/*
Explanation:
Most common way to create functions.
*/


/*
-----------------------------------------------------------------------------
3. Function Expressions
-----------------------------------------------------------------------------
Definition:
A function assigned to a variable.

Example:
*/
const multiply = function(a, b) {
  return a * b;
};

console.log(multiply(2, 3));

/*
Explanation:
Function is stored inside a variable.
*/


/*
-----------------------------------------------------------------------------
4. Anonymous Functions
-----------------------------------------------------------------------------
Definition:
Functions without a name.

Example:
*/
const message = function() {
  console.log("Anonymous Function");
};

message();

/*
Explanation:
Often used as callback functions.
*/


/*
-----------------------------------------------------------------------------
5. Named Function Expressions
-----------------------------------------------------------------------------
Definition:
Function expression with its own name.

Example:
*/
const sayHi = function greetUser() {
  return "Hello";
};

console.log(sayHi());

/*
Explanation:
Useful for debugging.
*/


/*
-----------------------------------------------------------------------------
6. Arrow Functions
-----------------------------------------------------------------------------
Definition:
Short syntax for writing functions.

Example:
*/
const square = num => num * num;

console.log(square(5));

/*
Explanation:
Arrow functions are concise and modern.
*/


/*
-----------------------------------------------------------------------------
7. Parameters and Arguments
-----------------------------------------------------------------------------
Definition:
Parameters receive values.
Arguments are values passed to functions.

Example:
*/
function welcome(name) {
  console.log("Welcome " + name);
}

welcome("John");

/*
Explanation:
name = parameter
John = argument
*/


/*
-----------------------------------------------------------------------------
8. Default Parameters
-----------------------------------------------------------------------------
Definition:
Assign default values to parameters.

Example:
*/
function greetUser(name = "Guest") {
  console.log("Hello " + name);
}

greetUser();

/*
Explanation:
Guest is used when no argument is passed.
*/


/*
-----------------------------------------------------------------------------
9. Rest Parameters
-----------------------------------------------------------------------------
Definition:
Collect multiple arguments into an array.

Example:
*/
function total(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

console.log(total(10, 20, 30));

/*
Explanation:
... gathers remaining arguments.
*/


/*
-----------------------------------------------------------------------------
10. Return Statements
-----------------------------------------------------------------------------
Definition:
Used to return a value from a function.

Example:
*/
function subtract(a, b) {
  return a - b;
}

console.log(subtract(10, 3));

/*
Explanation:
return sends the result back.
*/


/*
-----------------------------------------------------------------------------
11. Returning Multiple Values
-----------------------------------------------------------------------------
Definition:
Multiple values can be returned using arrays or objects.

Example:
*/
function getValues() {
  return [10, 20];
}

let [x, y] = getValues();

console.log(x, y);

/*
Explanation:
Array destructuring retrieves values.
*/


/*
-----------------------------------------------------------------------------
12. Callback Functions
-----------------------------------------------------------------------------
Definition:
A function passed as an argument to another function.

Example:
*/
function display(callback) {
  callback();
}

display(() => console.log("Callback Executed"));

/*
Explanation:
Callback runs inside another function.
*/


/*
-----------------------------------------------------------------------------
13. Higher-Order Functions
-----------------------------------------------------------------------------
Definition:
Functions that accept or return functions.

Example:
*/
function execute(fn) {
  fn();
}

execute(() => console.log("Higher Order"));

/*
Explanation:
accepts function as argument.
*/


/*
-----------------------------------------------------------------------------
14. First-Class Functions
-----------------------------------------------------------------------------
Definition:
Functions can be stored, passed, and returned like values.

Example:
*/
const fn = function() {
  return "JS";
};

console.log(fn());

/*
Explanation:
Functions behave like any other variable.
*/


/*
-----------------------------------------------------------------------------
15. Pure Functions
-----------------------------------------------------------------------------
Definition:
Always return same output for same input.

Example:
*/
function double(num) {
  return num * 2;
}

console.log(double(5));

/*
Explanation:
No side effects.
*/


/*
-----------------------------------------------------------------------------
16. Impure Functions
-----------------------------------------------------------------------------
Definition:
Depend on external values or modify data.

Example:
*/
let counter = 0;

function increment() {
  counter++;
}

increment();

/*
Explanation:
Output depends on external variable.
*/


/*
-----------------------------------------------------------------------------
17. Anonymous Callbacks
-----------------------------------------------------------------------------
Definition:
Unnamed callback functions.

Example:
*/
setTimeout(function() {
  console.log("Executed");
}, 1000);

/*
Explanation:
Commonly used in async code.
*/


/*
-----------------------------------------------------------------------------
18. Immediately Invoked Function Expressions (IIFE)
-----------------------------------------------------------------------------
Definition:
Function executed immediately after creation.

Example:
*/
(function() {
  console.log("IIFE Executed");
})();

/*
Explanation:
Runs once instantly.
*/


/*
-----------------------------------------------------------------------------
19. Nested Functions
-----------------------------------------------------------------------------
Definition:
Functions defined inside another function.

Example:
*/
function outer() {

  function inner() {
    console.log("Inner Function");
  }

  inner();
}

outer();

/*
Explanation:
Inner function is available only inside outer.
*/


/*
-----------------------------------------------------------------------------
20. Function Scope
-----------------------------------------------------------------------------
Definition:
Variables declared inside functions exist only there.

Example:
*/
function test() {
  let msg = "Hello";
  console.log(msg);
}

test();

/*
Explanation:
msg is not accessible outside.
*/


/*
-----------------------------------------------------------------------------
21. Function Hoisting
-----------------------------------------------------------------------------
Definition:
Function declarations can be used before definition.

Example:
*/
hello();

function hello() {
  console.log("Hoisted");
}

/*
Explanation:
Function declarations are hoisted.
*/


/*
-----------------------------------------------------------------------------
22. Function Parameters vs Arguments
-----------------------------------------------------------------------------
Definition:
Parameters are placeholders.
Arguments are actual values.

Example:
*/
function show(age) {
  console.log(age);
}

show(25);

/*
Explanation:
age = parameter
25 = argument
*/


/*
-----------------------------------------------------------------------------
23. Pass-by-Value
-----------------------------------------------------------------------------
Definition:
Primitive values are copied when passed.

Example:
*/
function change(num) {
  num = 100;
}

let value = 50;

change(value);

console.log(value);

/*
Explanation:
Original value remains unchanged.
*/


/*
-----------------------------------------------------------------------------
24. Recursion
-----------------------------------------------------------------------------
Definition:
Function calling itself.

Example:
*/
function factorial(n) {
  if (n === 1) return 1;

  return n * factorial(n - 1);
}

console.log(factorial(5));

/*
Explanation:
Calculates factorial recursively.
*/


/*
-----------------------------------------------------------------------------
25. Mutual Recursion
-----------------------------------------------------------------------------
Definition:
Two functions call each other.

Example:
*/
function even(n) {
  if (n === 0) return true;
  return odd(n - 1);
}

function odd(n) {
  if (n === 0) return false;
  return even(n - 1);
}

console.log(even(4));

/*
Explanation:
Functions call each other repeatedly.
*/


/*
-----------------------------------------------------------------------------
26. Function Overloading Patterns
-----------------------------------------------------------------------------
Definition:
JavaScript simulates overloading using conditions.

Example:
*/
function sum(a, b) {

  if (b === undefined) {
    return a;
  }

  return a + b;
}

console.log(sum(5));
console.log(sum(5, 10));

/*
Explanation:
Behavior changes based on arguments.
*/


/*
-----------------------------------------------------------------------------
27. arguments Object
-----------------------------------------------------------------------------
Definition:
Contains all arguments passed.

Example:
*/
function displayArgs() {
  console.log(arguments);
}

displayArgs(1, 2, 3);

/*
Explanation:
Available in regular functions.
*/


/*
-----------------------------------------------------------------------------
28. call()
-----------------------------------------------------------------------------
Definition:
Invokes a function with a specified this value.

Example:
*/
function introduce() {
  console.log(this.name);
}

introduce.call({ name: "John" });

/*
Explanation:
this points to supplied object.
*/


/*
-----------------------------------------------------------------------------
29. apply()
-----------------------------------------------------------------------------
Definition:
Similar to call(), but arguments are passed as array.

Example:
*/
function showDetails(age) {
  console.log(this.name, age);
}

showDetails.apply({ name: "John" }, [25]);

/*
Explanation:
Arguments are inside an array.
*/


/*
-----------------------------------------------------------------------------
30. bind()
-----------------------------------------------------------------------------
Definition:
Returns a new function with fixed this value.

Example:
*/
function printName() {
  console.log(this.name);
}

const boundFn = printName.bind({
  name: "David"
});

boundFn();

/*
Explanation:
Creates permanently bound function.
*/


/*
-----------------------------------------------------------------------------
31. Function Currying
-----------------------------------------------------------------------------
Definition:
Converts a function into multiple functions with one argument each.

Example:
*/
function multiplyBy(a) {
  return function(b) {
    return a * b;
  };
}

console.log(multiplyBy(2)(5));

/*
Explanation:
Arguments supplied one step at a time.
*/


/*
-----------------------------------------------------------------------------
32. Partial Application
-----------------------------------------------------------------------------
Definition:
Pre-fills some arguments.

Example:
*/
function addNumbers(a, b) {
  return a + b;
}

const addTen = addNumbers.bind(null, 10);

console.log(addTen(5));

/*
Explanation:
First argument fixed as 10.
*/


/*
-----------------------------------------------------------------------------
33. Function Composition
-----------------------------------------------------------------------------
Definition:
Combines multiple functions.

Example:
*/
const addOne = x => x + 1;
const doubleNum = x => x * 2;

const compose =
  x => doubleNum(addOne(x));

console.log(compose(5));

/*
Explanation:
Output of one function becomes input of another.
*/


/*
-----------------------------------------------------------------------------
34. Memoization
-----------------------------------------------------------------------------
Definition:
Stores previous results for faster execution.

Example:
*/
const cache = {};

function memoSquare(n) {

  if (cache[n]) {
    return cache[n];
  }

  cache[n] = n * n;

  return cache[n];
}

console.log(memoSquare(5));

/*
Explanation:
Avoids repeated calculations.
*/


/*
-----------------------------------------------------------------------------
35. Debouncing
-----------------------------------------------------------------------------
Definition:
Executes function after user stops triggering events.

Example:
*/
function debounce(fn, delay) {
  let timer;

  return function() {
    clearTimeout(timer);

    timer = setTimeout(fn, delay);
  };
}

/*
Explanation:
Useful for search boxes.
*/


/*
-----------------------------------------------------------------------------
36. Throttling
-----------------------------------------------------------------------------
Definition:
Limits function execution rate.

Example:
*/
function throttle(fn, delay) {

  let allow = true;

  return function() {

    if (!allow) return;

    fn();

    allow = false;

    setTimeout(() => allow = true, delay);
  };
}

/*
Explanation:
Useful for scrolling events.
*/


/*
-----------------------------------------------------------------------------
37. Tail Call Optimization
-----------------------------------------------------------------------------
Definition:
Recursion where recursive call is last operation.

Example:
*/
function sumTail(n, total = 0) {

  if (n === 0) return total;

  return sumTail(
    n - 1,
    total + n
  );
}

console.log(sumTail(5));

/*
Explanation:
Can reduce memory usage in supported engines.
*/


/*
-----------------------------------------------------------------------------
38. Closures
-----------------------------------------------------------------------------
Definition:
Function remembers variables from outer scope.

Example:
*/
function counterFunc() {

  let count = 0;

  return function() {
    count++;
    return count;
  };
}

const counter1 = counterFunc();

console.log(counter1());
console.log(counter1());

/*
Explanation:
Inner function remembers count.
*/


/*
-----------------------------------------------------------------------------
39. Lexical Environment
-----------------------------------------------------------------------------
Definition:
Environment where variables and functions exist.

Example:
*/
let language = "JavaScript";

function showLanguage() {
  console.log(language);
}

showLanguage();

/*
Explanation:
Function accesses variables from surrounding code.
*/


/*
-----------------------------------------------------------------------------
40. Lexical Scope
-----------------------------------------------------------------------------
Definition:
Scope determined by code location.

Example:
*/
let outerVariable = "Scope";

function example() {
  console.log(outerVariable);
}

example();

/*
Explanation:
Inner code accesses outer variables.
*/


/*
-----------------------------------------------------------------------------
41. Dynamic vs Lexical Scope
-----------------------------------------------------------------------------
Definition:
JavaScript uses lexical scope, not dynamic scope.

Example:
*/
let username = "John";

function showUser() {
  console.log(username);
}

function run() {
  let username = "David";
  showUser();
}

run();

/*
Explanation:
Output is John because scope is lexical.
*/


/*
-----------------------------------------------------------------------------
42. this Keyword
-----------------------------------------------------------------------------
Definition:
Represents current execution context.

Example:
*/
const obj = {
  name: "John",
  show() {
    console.log(this.name);
  }
};

obj.show();

/*
Explanation:
this refers to object calling the method.
*/


/*
-----------------------------------------------------------------------------
43. this in Regular Functions
-----------------------------------------------------------------------------
Definition:
this depends on how function is called.

Example:
*/
function regular() {
  console.log(this);
}

regular();

/*
Explanation:
Global object or undefined in strict mode.
*/


/*
-----------------------------------------------------------------------------
44. this in Arrow Functions
-----------------------------------------------------------------------------
Definition:
Arrow functions inherit this from outer scope.

Example:
*/
const user = {
  name: "John",

  show: () => {
    console.log(this);
  }
};

user.show();

/*
Explanation:
Arrow functions do not create their own this.
*/


/*
-----------------------------------------------------------------------------
45. this in Methods
-----------------------------------------------------------------------------
Definition:
Inside methods, this refers to the object.

Example:
*/
const employee = {
  name: "Alex",

  print() {
    console.log(this.name);
  }
};

employee.print();

/*
Explanation:
this refers to employee.
*/


/*
-----------------------------------------------------------------------------
46. this in Constructors
-----------------------------------------------------------------------------
Definition:
Inside constructors, this refers to new object.

Example:
*/
function Person(name) {
  this.name = name;
}

const p1 = new Person("John");

console.log(p1.name);

/*
Explanation:
this points to created instance.
*/


/*
-----------------------------------------------------------------------------
47. Explicit this Binding
-----------------------------------------------------------------------------
Definition:
Manually set this using call(), apply(), or bind().

Example:
*/
function sayName() {
  console.log(this.name);
}

sayName.call({ name: "David" });

/*
Explanation:
this is explicitly assigned.
*/


/*
-----------------------------------------------------------------------------
48. Function Context
-----------------------------------------------------------------------------
Definition:
Context determines the value of this.

Example:
*/
const student = {
  name: "Sam",

  display() {
    console.log(this.name);
  }
};

student.display();

/*
Explanation:
Context changes based on how a function is invoked.
*/


// ============================================================================
// END OF FUNCTIONS
// ============================================================================