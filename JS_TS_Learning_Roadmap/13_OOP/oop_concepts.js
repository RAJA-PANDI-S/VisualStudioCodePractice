// ============================================================================
// 13. OBJECT-ORIENTED PROGRAMMING (OOP) IN JAVASCRIPT
// Each Topic Contains:
// 1. Definition
// 2. Sample Program
// 3. Simple Explanation
// ============================================================================

/*
-----------------------------------------------------------------------------
1. OOP Fundamentals
-----------------------------------------------------------------------------
Definition:
Object-Oriented Programming (OOP) organizes code into objects that contain
properties (data) and methods (behavior).

Example:
*/
const student = {
  name: "John",
  study() {
    console.log("Studying...");
  }
};

student.study();

/*
Explanation:
The object contains data and behavior together.
*/


/*
-----------------------------------------------------------------------------
2. Classes and Objects
-----------------------------------------------------------------------------
Definition:
A class is a blueprint and an object is an instance of that class.

Example:
*/
class Person {
  constructor(name) {
    this.name = name;
  }
}

const person1 = new Person("John");

console.log(person1.name);

/*
Explanation:
Person is a class and person1 is an object.
*/


/*
-----------------------------------------------------------------------------
3. Constructor Functions
-----------------------------------------------------------------------------
Definition:
Functions used with the new keyword to create objects.

Example:
*/
function User(name) {
  this.name = name;
}

const user1 = new User("David");

console.log(user1.name);

/*
Explanation:
Before ES6, constructor functions were commonly used.
*/


/*
-----------------------------------------------------------------------------
4. Class Declarations
-----------------------------------------------------------------------------
Definition:
A class created using the class keyword.

Example:
*/
class Car {
  constructor(model) {
    this.model = model;
  }
}

const car = new Car("BMW");

console.log(car.model);

/*
Explanation:
Class declarations define object structures.
*/


/*
-----------------------------------------------------------------------------
5. Class Expressions
-----------------------------------------------------------------------------
Definition:
A class assigned to a variable.

Example:
*/
const Animal = class {
  speak() {
    console.log("Animal Sound");
  }
};

new Animal().speak();

/*
Explanation:
Similar to function expressions.
*/


/*
-----------------------------------------------------------------------------
6. Constructors
-----------------------------------------------------------------------------
Definition:
A special method executed automatically when an object is created.

Example:
*/
class Employee {
  constructor(name) {
    this.name = name;
  }
}

console.log(new Employee("Alex"));

/*
Explanation:
Constructor initializes object values.
*/


/*
-----------------------------------------------------------------------------
7. Instance Properties
-----------------------------------------------------------------------------
Definition:
Properties unique to every object instance.

Example:
*/
class Student {
  constructor(name) {
    this.name = name;
  }
}

const s1 = new Student("John");
console.log(s1.name);

/*
Explanation:
Each instance gets its own value.
*/


/*
-----------------------------------------------------------------------------
8. Instance Methods
-----------------------------------------------------------------------------
Definition:
Methods available on object instances.

Example:
*/
class UserProfile {
  greet() {
    console.log("Hello User");
  }
}

new UserProfile().greet();

/*
Explanation:
Methods define object behavior.
*/


/*
-----------------------------------------------------------------------------
9. Static Properties
-----------------------------------------------------------------------------
Definition:
Properties that belong to the class itself.

Example:
*/
class App {
  static version = "1.0";
}

console.log(App.version);

/*
Explanation:
Static properties are not available on objects.
*/


/*
-----------------------------------------------------------------------------
10. Static Methods
-----------------------------------------------------------------------------
Definition:
Methods called directly on the class.

Example:
*/
class MathUtil {

  static add(a, b) {
    return a + b;
  }
}

console.log(MathUtil.add(10, 20));

/*
Explanation:
No object creation required.
*/


/*
-----------------------------------------------------------------------------
11. Getters and Setters
-----------------------------------------------------------------------------
Definition:
Special methods used to get and set values.

Example:
*/
class Account {

  constructor() {
    this._name = "";
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }
}

const acc = new Account();

acc.name = "John";

console.log(acc.name);

/*
Explanation:
Control property access and modification.
*/


/*
-----------------------------------------------------------------------------
12. Inheritance
-----------------------------------------------------------------------------
Definition:
Allows one class to acquire properties and methods from another class.

Example:
*/
class Animal1 {
  eat() {
    console.log("Eating");
  }
}

class Dog extends Animal1 {}

new Dog().eat();

/*
Explanation:
Dog inherits eat() method.
*/


/*
-----------------------------------------------------------------------------
13. Prototypal Inheritance
-----------------------------------------------------------------------------
Definition:
Objects inherit directly from other objects through prototypes.

Example:
*/
const parent = {
  greet() {
    console.log("Hello");
  }
};

const child = Object.create(parent);

child.greet();

/*
Explanation:
child inherits from parent.
*/


/*
-----------------------------------------------------------------------------
14. Class Inheritance
-----------------------------------------------------------------------------
Definition:
Inheritance implemented using classes.

Example:
*/
class Vehicle {
  start() {
    console.log("Started");
  }
}

class Bike extends Vehicle {}

new Bike().start();

/*
Explanation:
Bike inherits Vehicle methods.
*/


/*
-----------------------------------------------------------------------------
15. extends Keyword
-----------------------------------------------------------------------------
Definition:
Used to inherit from another class.

Example:
*/
class Shape {}

class Circle extends Shape {}

console.log(new Circle());

/*
Explanation:
extends creates parent-child relationship.
*/


/*
-----------------------------------------------------------------------------
16. super Keyword
-----------------------------------------------------------------------------
Definition:
Used to call parent constructor or methods.

Example:
*/
class Parent {

  constructor(name) {
    this.name = name;
  }
}

class Child extends Parent {

  constructor(name) {
    super(name);
  }
}

console.log(new Child("John").name);

/*
Explanation:
super accesses parent functionality.
*/


/*
-----------------------------------------------------------------------------
17. Encapsulation
-----------------------------------------------------------------------------
Definition:
Hides object details and exposes only required functionality.

Example:
*/
class Bank {

  #balance = 1000;

  getBalance() {
    return this.#balance;
  }
}

console.log(new Bank().getBalance());

/*
Explanation:
Private data is protected.
*/


/*
-----------------------------------------------------------------------------
18. Abstraction
-----------------------------------------------------------------------------
Definition:
Shows essential features while hiding implementation details.

Example:
*/
class Payment {

  process() {
    console.log("Payment Processed");
  }
}

new Payment().process();

/*
Explanation:
User uses process() without knowing internal logic.
*/


/*
-----------------------------------------------------------------------------
19. Polymorphism
-----------------------------------------------------------------------------
Definition:
Same method behaves differently in different classes.

Example:
*/
class Bird {
  sound() {
    console.log("Bird Sound");
  }
}

class Parrot extends Bird {
  sound() {
    console.log("Parrot Talking");
  }
}

new Parrot().sound();

/*
Explanation:
Same method produces different behavior.
*/


/*
-----------------------------------------------------------------------------
20. Method Overriding
-----------------------------------------------------------------------------
Definition:
Child class redefines a parent method.

Example:
*/
class ParentClass {
  show() {
    console.log("Parent");
  }
}

class ChildClass extends ParentClass {
  show() {
    console.log("Child");
  }
}

new ChildClass().show();

/*
Explanation:
Child version replaces parent version.
*/


/*
-----------------------------------------------------------------------------
21. Method Overloading Patterns
-----------------------------------------------------------------------------
Definition:
JavaScript simulates overloading using conditions.

Example:
*/
class Calculator {

  add(a, b) {
    return b === undefined ? a : a + b;
  }
}

console.log(new Calculator().add(5));
console.log(new Calculator().add(5, 10));

/*
Explanation:
Behavior changes based on arguments.
*/


/*
-----------------------------------------------------------------------------
22. Composition
-----------------------------------------------------------------------------
Definition:
Building complex objects using smaller objects.

Example:
*/
const engine = {
  start() {
    console.log("Engine Started");
  }
};

const vehicle = {
  engine
};

vehicle.engine.start();

/*
Explanation:
Objects are combined together.
*/


/*
-----------------------------------------------------------------------------
23. Aggregation
-----------------------------------------------------------------------------
Definition:
One object contains another object that can exist independently.

Example:
*/
const department = {
  name: "IT"
};

const employee = {
  name: "John",
  department
};

console.log(employee.department.name);

/*
Explanation:
Department exists independently.
*/


/*
-----------------------------------------------------------------------------
24. Association
-----------------------------------------------------------------------------
Definition:
Objects are related but independent.

Example:
*/
const teacher = {
  name: "Robert"
};

const course = {
  title: "JavaScript"
};

console.log(teacher.name, course.title);

/*
Explanation:
Objects interact but don't own each other.
*/


/*
-----------------------------------------------------------------------------
25. Object Composition vs Inheritance
-----------------------------------------------------------------------------
Definition:
Composition combines objects.
Inheritance extends classes.

Example:
*/
const gps = {
  track() {
    console.log("Tracking");
  }
};

const carObj = { gps };

carObj.gps.track();

/*
Explanation:
Composition often provides more flexibility.
*/


/*
-----------------------------------------------------------------------------
26. Private Fields
-----------------------------------------------------------------------------
Definition:
Fields accessible only inside the class.

Example:
*/
class AccountInfo {

  #pin = 1234;

  getPin() {
    return this.#pin;
  }
}

console.log(new AccountInfo().getPin());

/*
Explanation:
# makes fields private.
*/


/*
-----------------------------------------------------------------------------
27. Private Methods
-----------------------------------------------------------------------------
Definition:
Methods accessible only inside the class.

Example:
*/
class SecureApp {

  #secret() {
    return "Private Method";
  }

  show() {
    return this.#secret();
  }
}

console.log(new SecureApp().show());

/*
Explanation:
Private methods cannot be called outside.
*/


/*
-----------------------------------------------------------------------------
28. Public Fields
-----------------------------------------------------------------------------
Definition:
Fields directly accessible from objects.

Example:
*/
class UserData {
  role = "Admin";
}

console.log(new UserData().role);

/*
Explanation:
Public fields are accessible everywhere.
*/


/*
-----------------------------------------------------------------------------
29. Protected-Style Conventions
-----------------------------------------------------------------------------
Definition:
JavaScript has no protected keyword.
Developers use underscore (_) convention.

Example:
*/
class Product {

  _price = 1000;
}

console.log(new Product()._price);

/*
Explanation:
Underscore indicates internal usage.
*/


/*
-----------------------------------------------------------------------------
30. Mixins
-----------------------------------------------------------------------------
Definition:
Reusable functionality added to classes.

Example:
*/
const canWalk = {
  walk() {
    console.log("Walking");
  }
};

class Human {}

Object.assign(Human.prototype, canWalk);

new Human().walk();

/*
Explanation:
Mixins provide reusable behaviors.
*/


/*
-----------------------------------------------------------------------------
31. Factory Functions
-----------------------------------------------------------------------------
Definition:
Functions that create and return objects.

Example:
*/
function createUser(name) {

  return {
    name
  };
}

console.log(createUser("John"));

/*
Explanation:
Alternative to classes and constructors.
*/


/*
-----------------------------------------------------------------------------
32. Constructor Patterns
-----------------------------------------------------------------------------
Definition:
Pattern using constructors and new keyword.

Example:
*/
function PersonInfo(name) {
  this.name = name;
}

const p = new PersonInfo("David");

console.log(p.name);

/*
Explanation:
Common OOP pattern before ES6 classes.
*/


/*
-----------------------------------------------------------------------------
33. SOLID Principles in JavaScript
-----------------------------------------------------------------------------
Definition:
SOLID is a set of five design principles for maintainable code.

S - Single Responsibility Principle
O - Open/Closed Principle
L - Liskov Substitution Principle
I - Interface Segregation Principle
D - Dependency Inversion Principle

Example:
*/
class EmailService {

  sendEmail() {
    console.log("Email Sent");
  }
}

class Notification {

  constructor(service) {
    this.service = service;
  }

  notify() {
    this.service.sendEmail();
  }
}

const notify = new Notification(
  new EmailService()
);

notify.notify();

/*
Explanation:
Notification depends on abstraction instead of
creating EmailService internally.
This follows Dependency Inversion Principle.
*/


// ============================================================================
// QUICK SUMMARY
// ============================================================================

/*
OOP Core Concepts:
✔ Class
✔ Object
✔ Constructor
✔ Encapsulation
✔ Abstraction
✔ Inheritance
✔ Polymorphism

Inheritance Keywords:
✔ extends
✔ super

Advanced OOP:
✔ Composition
✔ Aggregation
✔ Association
✔ Mixins
✔ Factory Functions

Modern JavaScript OOP:
✔ Private Fields (#)
✔ Private Methods (#)
✔ Public Fields
✔ Static Methods
✔ Getters & Setters

Design Principles:
✔ SOLID
*/


// ============================================================================
// END OF OBJECT-ORIENTED PROGRAMMING (OOP)
// ============================================================================