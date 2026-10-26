// ============================================================================
// 12. ES6+ AND MODERN JAVASCRIPT
// Each Topic Contains:
// 1. Definition
// 2. Sample Program
// 3. Simple Explanation
// ============================================================================

/*
-----------------------------------------------------------------------------
1. ECMAScript 2015 (ES6)
-----------------------------------------------------------------------------
Definition:
ES6 is a major JavaScript update that introduced modern features like let,
const, arrow functions, classes, modules, promises, and more.

Example:
*/
let language = "JavaScript";
const version = "ES6";

console.log(language, version);

/*
Explanation:
ES6 made JavaScript more powerful and easier to write.
*/


/*
-----------------------------------------------------------------------------
2. let and const
-----------------------------------------------------------------------------
Definition:
let creates reassignable variables.
const creates constant variables.

Example:
*/
let age = 25;
age = 30;

const country = "India";

console.log(age, country);

/*
Explanation:
Use let for changing values and const for fixed values.
*/


/*
-----------------------------------------------------------------------------
3. Arrow Functions
-----------------------------------------------------------------------------
Definition:
Short syntax for writing functions.

Example:
*/
const square = num => num * num;

console.log(square(5));

/*
Explanation:
Arrow functions reduce boilerplate code.
*/


/*
-----------------------------------------------------------------------------
4. Template Literals
-----------------------------------------------------------------------------
Definition:
Strings enclosed in backticks (`) allowing interpolation.

Example:
*/
const name = "John";

console.log(`Welcome ${name}`);

/*
Explanation:
${} inserts variables inside strings.
*/


/*
-----------------------------------------------------------------------------
5. Destructuring
-----------------------------------------------------------------------------
Definition:
Extract values from arrays or objects.

Example:
*/
const user = {
  username: "David",
  city: "Chennai"
};

const { username, city } = user;

console.log(username, city);

/*
Explanation:
Makes extracting values easier.
*/


/*
-----------------------------------------------------------------------------
6. Default Parameters
-----------------------------------------------------------------------------
Definition:
Set default values for function parameters.

Example:
*/
function greet(name = "Guest") {
  console.log(`Hello ${name}`);
}

greet();

/*
Explanation:
Used when no argument is passed.
*/


/*
-----------------------------------------------------------------------------
7. Rest Parameters
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
Rest operator gathers remaining arguments.
*/


/*
-----------------------------------------------------------------------------
8. Spread Syntax
-----------------------------------------------------------------------------
Definition:
Expands arrays or objects into individual values.

Example:
*/
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];

console.log(arr2);

/*
Explanation:
Commonly used for copying and merging.
*/


/*
-----------------------------------------------------------------------------
9. Enhanced Object Literals
-----------------------------------------------------------------------------
Definition:
Provides shorthand syntax for objects.

Example:
*/
const firstName = "John";

const person = {
  firstName
};

console.log(person);

/*
Explanation:
Property name and variable name are same.
*/


/*
-----------------------------------------------------------------------------
10. Computed Property Names
-----------------------------------------------------------------------------
Definition:
Allows dynamic object property names.

Example:
*/
const key = "email";

const account = {
  [key]: "john@gmail.com"
};

console.log(account);

/*
Explanation:
Property name comes from variable value.
*/


/*
-----------------------------------------------------------------------------
11. Classes
-----------------------------------------------------------------------------
Definition:
Blueprint for creating objects.

Example:
*/
class Person {

  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello ${this.name}`);
  }
}

const p1 = new Person("John");

p1.greet();

/*
Explanation:
Classes simplify object creation.
*/


/*
-----------------------------------------------------------------------------
12. Modules
-----------------------------------------------------------------------------
Definition:
Allow code to be split into reusable files.

Example:
*/
// math.js
export const PI = 3.14;

// app.js
import { PI } from "./math.js";

console.log(PI);

/*
Explanation:
Modules improve code organization.
*/


/*
-----------------------------------------------------------------------------
13. Promises
-----------------------------------------------------------------------------
Definition:
Represents future completion or failure of async operations.

Example:
*/
const promise = new Promise((resolve) => {
  resolve("Success");
});

promise.then(result => console.log(result));

/*
Explanation:
Handles asynchronous tasks.
*/


/*
-----------------------------------------------------------------------------
14. Iterators
-----------------------------------------------------------------------------
Definition:
Objects that iterate through data one value at a time.

Example:
*/
const numbers = [10, 20, 30];

const iterator = numbers.values();

console.log(iterator.next());

/*
Explanation:
next() returns value and status.
*/


/*
-----------------------------------------------------------------------------
15. Generators
-----------------------------------------------------------------------------
Definition:
Functions that pause and resume execution.

Example:
*/
function* generator() {
  yield 1;
  yield 2;
}

const gen = generator();

console.log(gen.next().value);

/*
Explanation:
yield pauses execution.
*/


/*
-----------------------------------------------------------------------------
16. Symbols
-----------------------------------------------------------------------------
Definition:
Unique and immutable primitive values.

Example:
*/
const id = Symbol("id");

console.log(id);

/*
Explanation:
Commonly used as unique object keys.
*/


/*
-----------------------------------------------------------------------------
17. Map
-----------------------------------------------------------------------------
Definition:
Collection of key-value pairs.

Example:
*/
const map = new Map();

map.set("name", "John");

console.log(map.get("name"));

/*
Explanation:
Keys can be any data type.
*/


/*
-----------------------------------------------------------------------------
18. Set
-----------------------------------------------------------------------------
Definition:
Collection of unique values.

Example:
*/
const set = new Set([1, 1, 2, 3]);

console.log(set);

/*
Explanation:
Duplicate values are removed.
*/


/*
-----------------------------------------------------------------------------
19. WeakMap
-----------------------------------------------------------------------------
Definition:
Map with object keys that can be garbage collected.

Example:
*/
let obj = {};

const weakMap = new WeakMap();

weakMap.set(obj, "Data");

/*
Explanation:
Used for private object data.
*/


/*
-----------------------------------------------------------------------------
20. WeakSet
-----------------------------------------------------------------------------
Definition:
Set that stores only objects.

Example:
*/
let userObj = {};

const weakSet = new WeakSet();

weakSet.add(userObj);

/*
Explanation:
Objects can be garbage collected.
*/


/*
-----------------------------------------------------------------------------
21. Proxy
-----------------------------------------------------------------------------
Definition:
Wraps an object and intercepts operations.

Example:
*/
const target = {};

const proxy = new Proxy(target, {
  get(obj, prop) {
    return prop in obj ? obj[prop] : "Not Found";
  }
});

console.log(proxy.name);

/*
Explanation:
Allows custom behavior.
*/


/*
-----------------------------------------------------------------------------
22. Reflect
-----------------------------------------------------------------------------
Definition:
Provides methods for object operations.

Example:
*/
const employee = {};

Reflect.set(employee, "name", "Alex");

console.log(employee.name);

/*
Explanation:
Works with Proxy and objects.
*/


/*
-----------------------------------------------------------------------------
23. Optional Chaining
-----------------------------------------------------------------------------
Definition:
Safely accesses nested properties.

Example:
*/
const customer = {};

console.log(customer.address?.city);

/*
Explanationns undefined instead of an error.
*/


/*
-----------------------------------------------------------------------------
24. Nullish Coalescing
-----------------------------------------------------------------------------
Definition:
Returns right value only for null or undefined.

Example:
*/
const value = null;

console.log(value ?? "Default Value");

/*
Explanation:
Useful for fallback values.
*/


/*
-----------------------------------------------------------------------------
25. Logical Assignment Operators
-----------------------------------------------------------------------------
Definition:
Combine logical operations with assignment.

Example:
*/
let count = null;

count ??= 100;

console.log(count);

/*
Explanation:
Assigns only when value is null or undefined.
*/


/*
-----------------------------------------------------------------------------
26. Numeric Separators
-----------------------------------------------------------------------------
Definition:
Underscores improve number readability.

Example:
*/
const population = 1_000_000;

console.log(population);

/*
Explanation:
Underscores are ignored by JavaScript.
*/


/*
-----------------------------------------------------------------------------
27. BigInt
-----------------------------------------------------------------------------
Definition:
Represents very large integers.

Example:
*/
const bigNumber = 12345678901234567890n;

console.log(bigNumber);

/*
Explanation:
'n' indicates BigInt value.
*/


/*
-----------------------------------------------------------------------------
28. Private Class Fields
-----------------------------------------------------------------------------
Definition:
Class fields accessible only within the class.

Example:
*/
class BankAccount {

  #balance = 1000;

  getBalance() {
    return this.#balance;
  }
}

console.log(new BankAccount().getBalance());

/*
Explanation:
# makes a field private.
*/


/*
-----------------------------------------------------------------------------
29. Static Class Fields
-----------------------------------------------------------------------------
Definition:
Belong to the class instead of instances.

Example:
*/
class App {
  static name = "MyApp";
}

console.log(App.name);

/*
Explanation:
Accessed using class name.
*/


/*
-----------------------------------------------------------------------------
30. Public Class Fields
-----------------------------------------------------------------------------
Definition:
Class properties available to all instances.

Example:
*/
class User {
  role = "Admin";
}

console.log(new User().role);

/*
Explanation:
Accessible directly from objects.
*/


/*
-----------------------------------------------------------------------------
31. Top-Level await
-----------------------------------------------------------------------------
Definition:
Allows await outside functions in modules.

Example:
*/
const data = await Promise.resolve("Loaded");

console.log(data);

/*
Explanation:
Works only in ES modules.
*/


/*
-----------------------------------------------------------------------------
32. Dynamic import()
-----------------------------------------------------------------------------
Definition:
Loads modules when needed.

Example:
*/
import("./math.js")
  .then(module => {
    console.log(module.PI);
  });

/*
Explanation:
Improves performance by lazy loading.
*/


/*
-----------------------------------------------------------------------------
33. import.meta
-----------------------------------------------------------------------------
Definition:
Provides metadata about current module.

Example:
*/
console.log(import.meta.url);

/*
Explanation:
Returns current module URL.
*/


/*
-----------------------------------------------------------------------------
34. Object.groupBy()
-----------------------------------------------------------------------------
Definition:
Groups array elements based on a callback.

Example:
*/
const people = [
  { age: 18 },
  { age: 25 },
  { age: 18 }
];

const grouped = Object.groupBy(
  people,
  person => person.age
);

console.log(grouped);

/*
Explanation:
Groups objects by age.
*/


/*
-----------------------------------------------------------------------------
35. Promise.withResolvers()
-----------------------------------------------------------------------------
Definition:
Creates a Promise with separate resolve and reject functions.

Example:
*/
const {
  promise: p,
  resolve,
  reject
} = Promise.withResolvers();

resolve("Done");

p.then(console.log);

/*
Explanation:
Provides easier Promise control.
*/


/*
-----------------------------------------------------------------------------
36. Modern Array Methods
-----------------------------------------------------------------------------
Definition:
New array features added in modern JavaScript.

Example:
*/
const nums = [3, 1, 2];

console.log(nums.toSorted());
console.log(nums.toReversed());

/*
Explanation:
Returns new arrays without modifying originals.
*/


/*
-----------------------------------------------------------------------------
37. Modern Object Methods
-----------------------------------------------------------------------------
Definition:
Useful methods for working with objects.

Example:
*/
const product = {
  name: "Laptop",
  price: 50000
};

console.log(Object.keys(product));
console.log(Object.values(product));
console.log(Object.entries(product));

/*
Explanation:
Extract keys, values, and entries.
*/


/*
-----------------------------------------------------------------------------
38. Modern String Methods
-----------------------------------------------------------------------------
Definition:
Methods that simplify string operations.

Example:
*/
const text = "JavaScript";

console.log(text.startsWith("Java"));
console.log(text.endsWith("Script"));
console.log(text.includes("Script"));

/*
Explanation:
Useful for searching and validation.
*/


/*
-----------------------------------------------------------------------------
39. ECMAScript Proposals and New Features
-----------------------------------------------------------------------------
Definition:
Upcoming JavaScript features being developed by TC39.

Example:
*/
// Future Example
// Array.prototype.groupBy()
// Records & Tuples (proposal)
// Pattern Matching (proposal)

/*
Explanation:
JavaScript continues evolving with new language features.
*/


// ============================================================================
// QUICK SUMMARY
// ============================================================================

/*
ES6 Features:
✔ let & const
✔ Arrow Functions
✔ Template Literals
✔ Destructuring
✔ Classes
✔ Modules
✔ Promises

Modern Features:
✔ Optional Chaining
✔ Nullish Coalescing
✔ BigInt
✔ Dynamic import()
✔ Private Fields
✔ Top-Level await
✔ Object.groupBy()
✔ Promise.withResolvers()

Collections:
✔ Map
✔ Set
✔ WeakMap
✔ WeakSet

Advanced Features:
✔ Proxy
✔ Reflect
✔ Generators
✔ Iterators
✔ Symbols
*/


// ============================================================================
// END OF ES6+ AND MODERN JAVASCRIPT
// ============================================================================