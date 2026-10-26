// ============================================================================
// 14. PROTOTYPES AND INHERITANCE IN JAVASCRIPT
// Each Topic Contains:
// 1. Definition
// 2. Sample Program
// 3. Simple Explanation
// ============================================================================

/*
-----------------------------------------------------------------------------
1. Prototype
-----------------------------------------------------------------------------
Definition:
A prototype is an object from which other objects inherit properties and methods.

Example:
*/
const person = {
  greet() {
    console.log("Hello");
  }
};

person.greet();

/*
Explanation:
Objects can inherit functionality through prototypes.
*/


/*
-----------------------------------------------------------------------------
2. Prototype Chain
-----------------------------------------------------------------------------
Definition:
JavaScript searches for properties through a chain of prototypes.

Example:
*/
const parent = {
  city: "Chennai"
};

const child = Object.create(parent);

console.log(child.city);

/*
Explanation:
city is not in child, so JavaScript looks in parent.
*/


/*
-----------------------------------------------------------------------------
3. Object.prototype
-----------------------------------------------------------------------------
Definition:
The top-level prototype inherited by almost all objects.

Example:
*/
const user = {
  name: "John"
};

console.log(user.toString());

/*
Explanation:
toString() comes from Object.prototype.
*/


/*
-----------------------------------------------------------------------------
4. Function.prototype
-----------------------------------------------------------------------------
Definition:
The prototype object shared by all functions.

Example:
*/
function greet() {}

console.log(greet.prototype);

/*
Explanation:
Every function automatically has a prototype property.
*/


/*
-----------------------------------------------------------------------------
5. Array.prototype
-----------------------------------------------------------------------------
Definition:
Contains methods available to all arrays.

Example:
*/
const numbers = [1, 2, 3];

numbers.push(4);

console.log(numbers);

/*
Explanation:
push() comes from Array.prototype.
*/


/*
-----------------------------------------------------------------------------
6. __proto__
-----------------------------------------------------------------------------
Definition:
A property that references an object's prototype.

Example:
*/
const employee = {};

console.log(employee.__proto__);

/*
Explanation:
Points to Object.prototype.
*/


/*
-----------------------------------------------------------------------------
7. Object.getPrototypeOf()
-----------------------------------------------------------------------------
Definition:
Returns an object's prototype.

Example:
*/
const student = {};

console.log(
  Object.getPrototypeOf(student)
);

/*
Explanation:
Safer alternative to __proto__.
*/


/*
-----------------------------------------------------------------------------
8. Object.setPrototypeOf()
-----------------------------------------------------------------------------
Definition:
Changes an object's prototype.

Example:
*/
const animal = {
  eat() {
    console.log("Eating");
  }
};

const dog = {};

Object.setPrototypeOf(dog, animal);

dog.eat();

/*
Explanation:
dog now inherits from animal.
*/


/*
-----------------------------------------------------------------------------
9. Object.create()
-----------------------------------------------------------------------------
Definition:
Creates a new object with a specified prototype.

Example:
*/
const vehicle = {
  start() {
    console.log("Started");
  }
};

const car = Object.create(vehicle);

car.start();

/*
Explanation:
car inherits methods from vehicle.
*/


/*
-----------------------------------------------------------------------------
10. Constructor Prototype
-----------------------------------------------------------------------------
Definition:
Methods added to constructor.prototype are shared by all instances.

Example:
*/
function User(name) {
  this.name = name;
}

User.prototype.sayHello = function () {
  console.log("Hello " + this.name);
};

const user1 = new User("John");

user1.sayHello();

/*
Explanation:
Method is stored once and shared by all objects.
*/


/*
-----------------------------------------------------------------------------
11. Prototype Inheritance
-----------------------------------------------------------------------------
Definition:
An object inherits properties from another object.

Example:
*/
const parentObj = {
  country: "India"
};

const childObj = Object.create(parentObj);

console.log(childObj.country);

/*
Explanation:
country is inherited from parentObj.
*/


/*
-----------------------------------------------------------------------------
12. Property Lookup
-----------------------------------------------------------------------------
Definition:
JavaScript searches for properties in the object first,
then in the prototype chain.

Example:
*/
const parentData = {
  role: "Admin"
};

const childData = Object.create(parentData);

console.log(childData.role);

/*
Explanation:
role is found in the prototype.
*/


/*
-----------------------------------------------------------------------------
13. Inherited Properties
-----------------------------------------------------------------------------
Definition:
Properties received from a prototype.

Example:
*/
const parentInfo = {
  language: "JavaScript"
};

const childInfo = Object.create(parentInfo);

console.log(childInfo.language);

/*
Explanation:
language is inherited.
*/


/*
-----------------------------------------------------------------------------
14. Own Properties
-----------------------------------------------------------------------------
Definition:
Properties directly belonging to the object.

Example:
*/
const personInfo = {
  name: "David"
};

console.log(
  personInfo.hasOwnProperty("name")
);

/*
Explanation:
name belongs directly to personInfo.
*/


/*
-----------------------------------------------------------------------------
15. Shadowing Inherited Properties
-----------------------------------------------------------------------------
Definition:
An object's own property overrides the inherited property.

Example:
*/
const parentUser = {
  role: "User"
};

const childUser = Object.create(parentUser);

childUser.role = "Admin";

console.log(childUser.role);

/*
Explanation:
Own property shadows inherited property.
*/


/*
-----------------------------------------------------------------------------
16. Prototypal Delegation
-----------------------------------------------------------------------------
Definition:
Objects delegate property lookup to their prototypes.

Example:
*/
const machine = {
  start() {
    console.log("Machine Started");
  }
};

const laptop = Object.create(machine);

laptop.start();

/*
Explanation:
laptop delegates start() lookup to machine.
*/


/*
-----------------------------------------------------------------------------
17. Prototype Pollution
-----------------------------------------------------------------------------
Definition:
Modifying shared prototypes can affect all objects and
create security issues.

Example:
*/
Object.prototype.appVersion = "1.0";

const obj1 = {};
const obj2 = {};

console.log(obj1.appVersion);
console.log(obj2.appVersion);

/*
Explanation:
Both objects now have appVersion.
Direct modification of Object.prototype is discouraged.
*/


/*
-----------------------------------------------------------------------------
18. Classes vs Prototypes
-----------------------------------------------------------------------------
Definition:
Classes are modern syntax, but internally JavaScript
still uses prototypes for inheritance.

Example:
*/
class Animal {

  speak() {
    console.log("Animal Sound");
  }
}

class Dog extends Animal {}

const dog1 = new Dog();

dog1.speak();

/*
Explanation:
Class inheritance is built on top of the prototype system.
*/


// ============================================================================
// QUICK SUMMARY
// ============================================================================

/*
Prototype                 -> Object used for inheritance
Prototype Chain           -> Chain of linked prototypes
Object.prototype          -> Root prototype for most objects
Function.prototype        -> Shared prototype for functions
Array.prototype           -> Provides array methods
__proto__                -> Reference to object's prototype
Object.getPrototypeOf()   -> Gets prototype
Object.setPrototypeOf()   -> Sets prototype
Object.create()           -> Creates object with prototype
Constructor Prototype     -> Shared methods for instances
Property Lookup           -> Search through prototype chain
Own Properties            -> Direct object properties
Inherited Properties      -> Properties from prototype
Shadowing                 -> Overrides inherited property
Prototypal Delegation     -> Prototype-based lookup
Prototype Pollution       -> Unsafe prototype modification
Classes vs Prototypes     -> Classes are syntax over prototypes
*/


// ============================================================================
// END OF PROTOTYPES AND INHERITANCE
// ============================================================================