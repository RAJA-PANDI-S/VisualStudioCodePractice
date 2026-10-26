/*******************************************************
5. LOOPS AND ITERATION IN JAVASCRIPT
Definition + Sample Program + Simple Explanation
*******************************************************/


/*======================================================
1. for Loop
Definition:
Used when the number of iterations is known.
======================================================*/

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// Explanation:
// Executes the block 5 times and prints 1 to 5.


/*======================================================
2. while Loop
Definition:
Executes code while a condition remains true.
======================================================*/

let count = 1;

while (count <= 5) {
    console.log(count);
    count++;
}

// Explanation:
// Condition is checked before every iteration.


/*======================================================
3. do...while Loop
Definition:
Executes code at least once before checking
the condition.
======================================================*/

let number = 1;

do {
    console.log(number);
    number++;
} while (number <= 5);

// Explanation:
// The loop runs once even if the condition is false.


/*======================================================
4. Nested Loops
Definition:
A loop inside another loop.
======================================================*/

for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 2; j++) {
        console.log(`i=${i}, j=${j}`);
    }
}

// Explanation:
// Inner loop executes completely for each
// iteration of the outer loop.


/*======================================================
5. for...in Loop
Definition:
Used to iterate over object properties.
======================================================*/

const person = {
    name: "John",
    age: 25
};

for (let key in person) {
    console.log(key, person[key]);
}

// Explanation:
// Returns property names (keys).


/*======================================================
6. for...of Loop
Definition:
Used to iterate over iterable values.
======================================================*/

const colors = ["Red", "Green", "Blue"];

for (let color of colors) {
    console.log(color);
}

// Explanation:
// Returns actual values instead of keys.


/*======================================================
7. for await...of Loop
Definition:
Used with asynchronous iterables and promises.
======================================================*/

async function displayValues() {
    const promises = [
        Promise.resolve("A"),
        Promise.resolve("B")
    ];

    for await (const value of promises) {
        console.log(value);
    }
}

displayValues();

// Explanation:
// Waits for each promise to resolve before
// continuing to the next iteration.


/*======================================================
8. break and continue
Definition:
break exits a loop.
continue skips the current iteration.
======================================================*/

for (let i = 1; i <= 5; i++) {

    if (i === 3) {
        continue;
    }

    if (i === 5) {
        break;
    }

    console.log(i);
}

// Output:
// 1
// 2
// 4

// Explanation:
// continue skips 3.
// break stops loop at 5.


/*======================================================
9. Infinite Loops
Definition:
Loops that never stop because the condition
always remains true.
======================================================*/

// WARNING: Do not run this code.

// while (true) {
//     console.log("Infinite Loop");
// }

// Explanation:
// Infinite loops continue forever unless
// interrupted manually.


/*======================================================
10. Loop Scope
Definition:
Variables declared with let or const inside
a loop are block-scoped.
======================================================*/

for (let i = 0; i < 3; i++) {
    console.log(i);
}

// console.log(i); // Error

// Explanation:
// Variable i exists only inside the loop block.


/*======================================================
11. Iterables
Definition:
Objects that can be iterated using for...of.
Examples: Arrays, Strings, Maps, Sets.
======================================================*/

const fruits = ["Apple", "Mango", "Orange"];

for (const fruit of fruits) {
    console.log(fruit);
}

// Explanation:
// Iterables provide values one at a time.


/*======================================================
12. Iterators
Definition:
Objects that produce a sequence of values
using the next() method.
======================================================*/

const arr = [10, 20, 30];
const iterator = arr[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());

// Explanation:
// next() returns:
// { value: something, done: false }


/*======================================================
13. Iterator Protocol
Definition:
Rules that make an object an iterator.
It must contain a next() method.
======================================================*/

const nums = [1, 2];

const itr = nums[Symbol.iterator]();

console.log(itr.next());
console.log(itr.next());
console.log(itr.next());

// Explanation:
// next() returns an object containing
// value and done properties.


/*======================================================
14. Iterable Protocol
Definition:
Rules that make an object iterable.
Object must implement Symbol.iterator.
======================================================*/

const text = "JS";

const iterable = text[Symbol.iterator]();

console.log(iterable.next());

// Explanation:
// Objects implementing Symbol.iterator()
// are iterable.


/*======================================================
15. Generators
Definition:
Special functions that can pause and resume
their execution.
======================================================*/

function* generatorExample() {
    yield 1;
    yield 2;
    yield 3;
}

console.log([...generatorExample()]);

// Explanation:
// yield returns values one at a time.


/*======================================================
16. Generator Functions
Definition:
Functions declared using function*.
======================================================*/

function* numbersGenerator() {
    yield 10;
    yield 20;
}

const gen = numbersGenerator();

console.log(gen.next());
console.log(gen.next());

// Explanation:
// Calling a generator function returns
// a generator object.


/*======================================================
17. Generator Objects
Definition:
Objects returned by generator functions.
======================================================*/

function* letters() {
    yield "A";
    yield "B";
}

const letterGen = letters();

console.log(letterGen.next());
console.log(letterGen.next());

// Explanation:
// Generator objects are both iterable
// and iterator objects.


/*======================================================
18. Custom Iterators
Definition:
User-defined iterator objects.
======================================================*/

const customIterator = {
    values: [100, 200, 300],
    index: 0,

    next() {
        if (this.index < this.values.length) {
            return {
                value: this.values[this.index++],
                done: false
            };
        }

        return {
            done: true
        };
    }
};

console.log(customIterator.next());
console.log(customIterator.next());

// Explanation:
// We control how values are returned.


/*======================================================
19. Custom Iterables
Definition:
Custom objects that implement
Symbol.iterator.
======================================================*/

const range = {
    start: 1,
    end: 5,

    [Symbol.iterator]() {
        let current = this.start;
        let last = this.end;

        return {
            next() {
                if (current <= last) {
                    return {
                        value: current++,
                        done: false
                    };
                }

                return {
                    done: true
                };
            }
        };
    }
};

for (const num of range) {
    console.log(num);
}

// Explanation:
// Custom objects become iterable by
// implementing Symbol.iterator.


/*******************************************************
SUMMARY

for Loop             -> Fixed iterations
while Loop           -> Condition checked first
do...while Loop      -> Executes at least once
Nested Loops         -> Loop inside loop
for...in             -> Iterates object keys
for...of             -> Iterates iterable values
for await...of       -> Iterates async values
break                -> Exits loop
continue             -> Skips current iteration
Infinite Loop        -> Runs forever
Loop Scope           -> Block-scoped variables
Iterables            -> Can be used in for...of
Iterators            -> Provide next() method
Iterator Protocol    -> Defines iterator behavior
Iterable Protocol    -> Defines iterable behavior
Generators           -> Pause/resume execution
Generator Functions  -> Create generators
Generator Objects    -> Returned by generators
Custom Iterators     -> User-defined iterators
Custom Iterables     -> User-defined iterables
*******************************************************/