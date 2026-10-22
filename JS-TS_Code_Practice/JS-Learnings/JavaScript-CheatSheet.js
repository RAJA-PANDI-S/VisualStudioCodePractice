// =====================================================
// JAVASCRIPT COMPLETE BASICS CHEAT SHEET
// =====================================================

// =====================================================
// 1. VARIABLES
// =====================================================

var oldWay = "Using var";
let userName = "Varshini";
const company = "Microsoft";

console.log(oldWay);
console.log(userName);
console.log(company);


// =====================================================
// 2. DATA TYPES
// =====================================================

let age = 25;
let salary = 50000.50;
let isActive = true;
let city = "Chennai";
let value = null;
let data;

console.log(typeof age);
console.log(typeof salary);
console.log(typeof isActive);
console.log(typeof city);
console.log(value);
console.log(data);


// =====================================================
// 3. OBJECTS
// =====================================================

const person = {
    id: 101,
    name: "Varshini",
    city: "Chennai"
};

console.log(person);

person.name = "John";

console.log(person);


// =====================================================
// 4. ARRAYS
// =====================================================

const numbers = [10, 20, 30];

numbers.push(40);

console.log(numbers);

const names = [
    "Varshini",
    "John",
    "David"
];

console.log(names);


// =====================================================
// 5. ARRAY LOOPING
// =====================================================

for (let name of names) {
    console.log(name);
}


// =====================================================
// 6. FUNCTIONS
// =====================================================

function add(a, b) {
    return a + b;
}

console.log(add(10, 20));


// =====================================================
// 7. FUNCTION EXPRESSION
// =====================================================

const multiply = function (a, b) {
    return a * b;
};

console.log(multiply(5, 4));


// =====================================================
// 8. ARROW FUNCTIONS
// =====================================================

const subtract = (a, b) => {
    return a - b;
};

console.log(subtract(20, 5));


// Short Syntax

const square = num => num * num;

console.log(square(5));


// =====================================================
// 9. DEFAULT PARAMETERS
// =====================================================

function greet(name = "Guest") {
    console.log("Hello", name);
}

greet();
greet("Varshini");


// =====================================================
// 10. TEMPLATE LITERALS
// =====================================================

const firstName = "Varshini";

console.log(`Welcome ${firstName}`);


// =====================================================
// 11. REST PARAMETERS
// =====================================================

function total(...nums) {

    return nums.reduce(
        (sum, num) => sum + num,
        0
    );
}

console.log(total(10, 20, 30));


// =====================================================
// 12. SPREAD OPERATOR
// =====================================================

const arr1 = [1, 2];
const arr2 = [3, 4];

const arr3 = [...arr1, ...arr2];

console.log(arr3);


// =====================================================
// 13. DESTRUCTURING OBJECTS
// =====================================================

const employee = {
    empId: 1,
    empName: "Varshini"
};

const { empId, empName } = employee;

console.log(empId);
console.log(empName);


// =====================================================
// 14. DESTRUCTURING ARRAYS
// =====================================================

const colors = [
    "Red",
    "Green",
    "Blue"
];

const [c1, c2] = colors;

console.log(c1);
console.log(c2);


// =====================================================
// 15. IF ELSE
// =====================================================

let marks = 80;

if (marks >= 50) {
    console.log("Pass");
} else {
    console.log("Fail");
}


// =====================================================
// 16. TERNARY OPERATOR
// =====================================================

const result =
    marks >= 50 ? "Pass" : "Fail";

console.log(result);


// =====================================================
// 17. SWITCH CASE
// =====================================================

let day = 1;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    default:
        console.log("Other Day");
}


// =====================================================
// 18. FOR LOOP
// =====================================================

for (let i = 1; i <= 5; i++) {
    console.log(i);
}


// =====================================================
// 19. WHILE LOOP
// =====================================================

let count = 1;

while (count <= 3) {
    console.log(count);
    count++;
}


// =====================================================
// 20. FOR IN
// =====================================================

for (let key in person) {
    console.log(key, person[key]);
}


// =====================================================
// 21. ARRAY METHODS
// =====================================================

const nums = [1, 2, 3, 4, 5];


// map()

const squares = nums.map(
    num => num * num
);

console.log(squares);


// filter()

const evens = nums.filter(
    num => num % 2 === 0
);

console.log(evens);


// reduce()

const sum = nums.reduce(
    (acc, num) => acc + num,
    0
);

console.log(sum);


// find()

const found = nums.find(
    num => num === 3
);

console.log(found);


// =====================================================
// 22. OBJECT METHODS
// =====================================================

const student = {

    name: "Varshini",

    display() {
        console.log(this.name);
    }
};

student.display();


// =====================================================
// 23. CLASSES
// =====================================================

class Employee {

    constructor(id, name) {

        this.id = id;
        this.name = name;
    }

    display() {
        console.log(this.id);
        console.log(this.name);
    }
}

const emp1 = new Employee(
    1001,
    "Varshini"
);

emp1.display();


// =====================================================
// 24. INHERITANCE
// =====================================================

class Animal {

    sound() {
        console.log("Animal Sound");
    }
}

class Dog extends Animal {

    bark() {
        console.log("Bow Bow");
    }
}

const dog = new Dog();

dog.sound();
dog.bark();


// =====================================================
// 25. SET
// UNIQUE VALUES
// =====================================================

const uniqueNumbers =
    new Set([1, 2, 3, 3, 4]);

console.log(uniqueNumbers);


// =====================================================
// 26. MAP COLLECTION
// =====================================================

const map = new Map();

map.set(1, "One");
map.set(2, "Two");

console.log(map.get(1));


// =====================================================
// 27. JSON
// =====================================================

const user = {
    id: 1,
    name: "Varshini"
};

const jsonString =
    JSON.stringify(user);

console.log(jsonString);

const obj =
    JSON.parse(jsonString);

console.log(obj);


// =====================================================
// 28. PROMISE
// =====================================================

const promise = new Promise(
    (resolve, reject) => {

        resolve("Promise Success");
    }
);

promise.then(result => {
    console.log(result);
});


// =====================================================
// 29. ASYNC / AWAIT
// =====================================================

async function fetchData() {

    return "Data Received";
}

fetchData()
    .then(data => console.log(data));


// =====================================================
// 30. OPTIONAL CHAINING
// =====================================================

const userInfo = {
    address: {
        city: "Chennai"
    }
};

console.log(
    userInfo?.address?.city
);


// =====================================================
// 31. NULLISH COALESCING
// =====================================================

let input = null;

let value1 =
    input ?? "Default Value";

console.log(value1);


// =====================================================
// 32. DATE
// =====================================================

const today = new Date();

console.log(today);


// =====================================================
// 33. TRY CATCH
// =====================================================

try {

    let num = 10;

    console.log(num);

} catch (error) {

    console.log(error);

} finally {

    console.log("Execution Completed");
}


// =====================================================
// 34. CALLBACK FUNCTION
// =====================================================

function processUser(callback) {

    callback();
}

processUser(() => {
    console.log("Callback Executed");
});


// =====================================================
// 35. HOISTING
// =====================================================

console.log(hoistedVar);

var hoistedVar = "JavaScript";


// =====================================================
// 36. CLOSURE
// =====================================================

function outer() {

    let count = 0;

    return function () {

        count++;

        console.log(count);
    };
}

const counter = outer();

counter();
counter();
counter();


// =====================================================
// 37. THIS KEYWORD
// =====================================================

const userObj = {

    name: "Varshini",

    show() {
        console.log(this.name);
    }
};

userObj.show();


// =====================================================
// 38. MODULE EXPORT
// =====================================================

// export const companyName = "Microsoft";


// =====================================================
// 39. MODULE IMPORT
// =====================================================

// import { companyName } from "./file.js";


// =====================================================
// 40. ES6 FEATURES SUMMARY
// =====================================================

// let
// const
// Arrow Functions
// Classes
// Template Literals
// Destructuring
// Spread Operator
// Rest Parameters
// Promises
// Modules
// Async/Await


// =====================================================
// END OF JAVASCRIPT CHEAT SHEET
// =====================================================

/*
Learning Order
Variables (var, let, const)
Data Types
Arrays & Objects
Functions
Arrow Functions
Array Methods (map, filter, reduce)
ES6 Features
Classes & Inheritance
Promises
Async/Await
Closures
Modules
TypeScript

Once you're comfortable with this JavaScript cheat sheet, the TypeScript version you 
requested earlier will feel much easier because TypeScript is essentially JavaScript + static typing.
*/