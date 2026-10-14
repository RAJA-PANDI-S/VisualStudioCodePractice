// ==========================================
// TYPESCRIPT BASICS
// ==========================================

// ------------------------------------------
// 1. NUMBER ARRAY
// ------------------------------------------
let numbers: number[] = [10, 20, 30, 40];

console.log("Number Array:", numbers);
console.log("First Number:", numbers[0]);


// ------------------------------------------
// 2. STRING ARRAY
// ------------------------------------------
let names: string[] = ["Varshini", "John", "David"];

console.log("Names:", names);


// ------------------------------------------
// 3. GENERIC ARRAY SYNTAX
// ------------------------------------------
let marks: Array<number> = [85, 90, 95];

console.log("Marks:", marks);


// ------------------------------------------
// 4. ADD ELEMENT TO ARRAY
// ------------------------------------------
let colors: string[] = ["Red", "Green"];

colors.push("Blue");

console.log("Colors after push:", colors);


// ------------------------------------------
// 5. UNION TYPE ARRAY (MULTIPLE TYPES)
// ------------------------------------------
let mixedValues: (string | number)[] = [
    "TypeScript",
    100,
    "JavaScript",
    200
];

console.log("Mixed Values:", mixedValues);


// ------------------------------------------
// 6. LOOP THROUGH ARRAY
// ------------------------------------------
let fruits: string[] = ["Apple", "Mango", "Orange"];

for (let fruit of fruits) {
    console.log("Fruit:", fruit);
}


// ------------------------------------------
// 7. ARRAY OF OBJECTS
// ------------------------------------------
let employees: { id: number; name: string }[] = [
    { id: 1, name: "Varshini" },
    { id: 2, name: "John" },
    { id: 3, name: "David" }
];

console.log("Employees:", employees);


// ------------------------------------------
// 8. CONST ARRAY
// ------------------------------------------
const cities: string[] = ["Chennai", "Bangalore"];

cities.push("Hyderabad"); // Allowed

console.log("Cities:", cities);

// cities = ["Mumbai"]; // Error


// ------------------------------------------
// 9. READONLY ARRAY
// ------------------------------------------
const readonlyNumbers: readonly number[] = [
    1,
    2,
    3
];

console.log("Readonly Array:", readonlyNumbers);

// readonlyNumbers.push(4); // Error
