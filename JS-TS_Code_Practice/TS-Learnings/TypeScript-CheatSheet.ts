// =====================================================
// TYPESCRIPT COMPLETE BASICS CHEAT SHEET
// =====================================================

// =====================================================
// 1. VARIABLES
// =====================================================

var oldWay: string = "Using var";
let userName: string = "Varshini";
const company: string = "Microsoft";

console.log(oldWay);
console.log(userName);
console.log(company);


// =====================================================
// 2. BASIC DATA TYPES
// =====================================================

let age: number = 25;
let isActive: boolean = true;
let message: string = "Hello TS";

console.log(age);
console.log(isActive);
console.log(message);


// =====================================================
// 3. ANY TYPE
// Avoid whenever possible
// =====================================================

let data: any = "Hello";
data = 100;
data = true;

console.log(data);


// =====================================================
// 4. UNKNOWN TYPE
// Safer than any
// =====================================================

let value: unknown = "TypeScript";

if (typeof value === "string") {
    console.log(value.toUpperCase());
}


// =====================================================
// 5. ARRAY
// =====================================================

let numbers: number[] = [10, 20, 30];

numbers.push(40);

console.log(numbers);


// Generic Array Syntax

let marks: Array<number> = [80, 90, 95];

console.log(marks);


// =====================================================
// 6. UNION TYPES
// =====================================================

let id: number | string;

id = 101;
id = "EMP101";

console.log(id);


// =====================================================
// 7. TUPLES
// Fixed Type + Fixed Order
// =====================================================

let employee: [number, string] = [1001, "Varshini"];

console.log(employee);


// =====================================================
// 8. ENUMS
// =====================================================

enum Status {
    Pending,
    Approved,
    Rejected
}

console.log(Status.Pending);
console.log(Status[1]);


// String Enum

enum Role {
    Admin = "ADMIN",
    User = "USER",
    Manager = "MANAGER"
}

console.log(Role.Admin);


// =====================================================
// 9. OBJECT TYPES
// =====================================================

let person: {
    name: string;
    age: number;
} = {
    name: "Varshini",
    age: 25
};

console.log(person);


// =====================================================
// 10. TYPE ALIAS
// =====================================================

type EmployeeType = {
    id: number;
    name: string;
    salary: number;
};

const emp: EmployeeType = {
    id: 1,
    name: "Varshini",
    salary: 50000
};

console.log(emp);


// =====================================================
// 11. FUNCTIONS
// =====================================================

function add(a: number, b: number): number {
    return a + b;
}

console.log(add(10, 20));


// Void Function

function greet(name: string): void {
    console.log("Hello " + name);
}

greet("Varshini");


// Optional Parameter

function printUser(name: string, city?: string) {
    console.log(name, city);
}

printUser("Varshini");
printUser("Varshini", "Chennai");


// Default Parameter

function welcome(name: string = "Guest") {
    console.log("Welcome", name);
}

welcome();
welcome("Varshini");


// =====================================================
// 12. ARROW FUNCTIONS
// =====================================================

const multiply = (a: number, b: number): number => {
    return a * b;
};

console.log(multiply(5, 4));


// =====================================================
// 13. REST PARAMETERS
// =====================================================

function total(...nums: number[]): number {
    return nums.reduce((sum, num) => sum + num, 0);
}

console.log(total(10, 20, 30));


// =====================================================
// 14. SPREAD OPERATOR
// =====================================================

const arr1 = [1, 2];
const arr2 = [3, 4];

const arr3 = [...arr1, ...arr2];

console.log(arr3);


// =====================================================
// 15. DESTRUCTURING
// =====================================================

const student = {
    studentName: "Varshini",
    course: "TypeScript"
};

const { studentName, course } = student;

console.log(studentName);
console.log(course);


// =====================================================
// 16. INTERFACES
// =====================================================

interface Student {
    id: number;
    name: string;
    course: string;
}

const student1: Student = {
    id: 1,
    name: "Varshini",
    course: "TypeScript"
};

console.log(student1);


// Interface Extension

interface Person {
    name: string;
}

interface EmployeeInfo extends Person {
    empId: number;
}

const empInfo: EmployeeInfo = {
    name: "Varshini",
    empId: 101
};

console.log(empInfo);


// =====================================================
// 17. READONLY PROPERTIES
// =====================================================

interface Product {
    readonly id: number;
    name: string;
}

const product: Product = {
    id: 101,
    name: "Laptop"
};

product.name = "Dell";

// product.id = 200; // Error

console.log(product);


// =====================================================
// 18. CLASSES
// =====================================================

class EmployeeClass {

    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    display(): void {
        console.log(this.id, this.name);
    }
}

const employeeObj = new EmployeeClass(
    1001,
    "Varshini"
);

employeeObj.display();


// =====================================================
// 19. ACCESS MODIFIERS
// =====================================================

class BankAccount {

    public accountName: string;
    private balance: number;
    protected branch: string;

    constructor(
        accountName: string,
        balance: number,
        branch: string
    ) {
        this.accountName = accountName;
        this.balance = balance;
        this.branch = branch;
    }

    showBalance() {
        console.log(this.balance);
    }
}

const account = new BankAccount(
    "Savings",
    5000,
    "Chennai"
);

account.showBalance();


// =====================================================
// 20. INHERITANCE
// =====================================================

class Animal {
    makeSound() {
        console.log("Animal Sound");
    }
}

class Dog extends Animal {
    bark() {
        console.log("Bow Bow");
    }
}

const dog = new Dog();

dog.makeSound();
dog.bark();


// =====================================================
// 21. ABSTRACT CLASS
// =====================================================

abstract class Shape {

    abstract area(): number;
}

class Circle extends Shape {

    radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    area(): number {
        return 3.14 * this.radius * this.radius;
    }
}

const circle = new Circle(5);

console.log(circle.area());


// =====================================================
// 22. GENERICS
// =====================================================

function getValue<T>(value: T): T {
    return value;
}

console.log(getValue<string>("Hello"));
console.log(getValue<number>(100));


// Generic Interface

interface ApiResponse<T> {
    data: T;
    success: boolean;
}

const response: ApiResponse<string> = {
    data: "Data Received",
    success: true
};

console.log(response);


// =====================================================
// 23. TYPE ASSERTION
// =====================================================

let text: any = "TypeScript";

let length: number = (text as string).length;

console.log(length);


// =====================================================
// 24. LITERAL TYPES
// =====================================================

let direction: "left" | "right";

direction = "left";
// direction = "top"; // Error

console.log(direction);


// =====================================================
// 25. NULL & UNDEFINED
// =====================================================

let phone: string | null = null;

phone = "9999999999";

console.log(phone);


// =====================================================
// 26. OPTIONAL CHAINING
// =====================================================

const user = {
    address: {
        city: "Chennai"
    }
};

console.log(user?.address?.city);


// =====================================================
// 27. NULLISH COALESCING
// =====================================================

let userInput: string | null = null;

let finalValue = userInput ?? "Default User";

console.log(finalValue);


// =====================================================
// 28. PROMISES
// =====================================================

const promise = new Promise<string>((resolve) => {
    resolve("Promise Resolved");
});

promise.then(result => {
    console.log(result);
});


// =====================================================
// 29. ASYNC / AWAIT
// =====================================================

async function fetchData(): Promise<string> {
    return "Data Received";
}

fetchData().then(data => {
    console.log(data);
});


// =====================================================
// 30. CONST OBJECT
// =====================================================

const personObj = {
    name: "Varshini"
};

personObj.name = "John"; // Allowed

console.log(personObj);


// =====================================================
// 31. CONST ARRAY
// =====================================================

const skills: string[] = [
    "JavaScript",
    "TypeScript"
];

skills.push("Angular");

console.log(skills);


// =====================================================
// 32. READONLY ARRAY
// =====================================================

const readonlyData: readonly number[] = [
    1,
    2,
    3
];

// readonlyData.push(4); // Error

console.log(readonlyData);


// =====================================================
// 33. NEVER TYPE
// =====================================================

function throwError(message: string): never {
    throw new Error(message);
}

// throwError("Something went wrong");


// =====================================================
// 34. MAP
// =====================================================

const numArray = [1, 2, 3];

const squares = numArray.map(num => num * num);

console.log(squares);


// =====================================================
// 35. FILTER
// =====================================================

const evenNumbers = numArray.filter(
    num => num % 2 === 0
);

console.log(evenNumbers);


// =====================================================
// 36. REDUCE
// =====================================================

const sum = numArray.reduce(
    (acc, num) => acc + num,
    0
);

console.log(sum);


// =====================================================
// END OF TYPESCRIPT CHEAT SHEET
// =====================================================

/*

This covers roughly 90-95% of the TypeScript topics asked in interviews and used in day-to-day projects:

Variables (var, let, const)
Data Types
Arrays
Tuples
Enums
Objects
Type Aliases
Functions
Arrow Functions
Rest/Spread
Destructuring
Interfaces
Classes
Access Modifiers
Inheritance
Abstract Classes
Generics
Type Assertions
Union Types
Literal Types
Null/Undefined
Optional Chaining
Nullish Coalescing
Promises
Async/Await
Never Type
Array Methods (map, filter, reduce)

For interviews, I'd suggest mastering Interfaces vs Type Aliases, Generics, 
Union Types, Classes/OOP, and Async/Await next, as those topics come up very frequently.

*/