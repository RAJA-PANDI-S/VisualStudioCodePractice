/*******************************************************
4. CONTROL FLOW IN JAVASCRIPT
Definition + Sample Program + Simple Explanation
*******************************************************/

/*======================================================
1. if Statement
Definition:
Executes a block of code only when a condition is true.
======================================================*/

let age = 20;

if (age >= 18) {
    console.log("You are eligible to vote.");
}

// Explanation:
// Code inside the if block runs only when the
// condition evaluates to true.


/*======================================================
2. if...else
Definition:
Executes one block if condition is true,
otherwise executes another block.
======================================================*/

let marks = 45;

if (marks >= 50) {
    console.log("Pass");
} else {
    console.log("Fail");
}

// Explanation:
// else block runs when the condition is false.


/*======================================================
3. else if
Definition:
Checks multiple conditions sequentially.
======================================================*/

let score = 75;

if (score >= 90) {
    console.log("Grade A");
} else if (score >= 70) {
    console.log("Grade B");
} else if (score >= 50) {
    console.log("Grade C");
} else {
    console.log("Fail");
}

// Explanation:
// First matching condition is executed.


/*======================================================
4. Nested Conditions
Definition:
An if statement inside another if statement.
======================================================*/

let userLoggedIn = true;
let isAdmin = true;

if (userLoggedIn) {
    if (isAdmin) {
        console.log("Welcome Admin");
    }
}

// Explanation:
// Used when multiple levels of conditions
// must be checked.


/*======================================================
5. switch Statement
Definition:
Used to select one block from many options.
======================================================*/

let day = 2;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    default:
        console.log("Invalid Day");
}

// Explanation:
// switch compares a value with multiple cases.


/*======================================================
6. case and default
Definition:
case specifies matching values.
default runs if no case matches.
======================================================*/

let fruit = "Apple";

switch (fruit) {
    case "Mango":
        console.log("Yellow Fruit");
        break;

    case "Apple":
        console.log("Red Fruit");
        break;

    default:
        console.log("Unknown Fruit");
}

// Explanation:
// default acts like an else block.


/*======================================================
7. Fall-Through Behavior
Definition:
Occurs when break is omitted in switch cases.
======================================================*/

let color = "red";

switch (color) {
    case "red":
        console.log("Red selected");

    case "blue":
        console.log("Blue selected");
        break;
}

// Output:
// Red selected
// Blue selected

// Explanation:
// Without break, execution continues into the
// next matching case(s).


/*======================================================
8. Conditional Expressions (Ternary Operator)
Definition:
Short form of if...else.
======================================================*/

let temperature = 30;

let weather =
    temperature > 25 ? "Hot" : "Cool";

console.log(weather);

// Explanation:
// condition ? trueValue : falseValue


/*======================================================
9. break Statement
Definition:
Terminates a loop or switch statement.
======================================================*/

for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        break;
    }

    console.log(i);
}

// Output:
// 1
// 2

// Explanation:
// Loop stops immediately when break executes.


/*======================================================
10. continue Statement
Definition:
Skips current iteration and moves
to next iteration.
======================================================*/

for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }

    console.log(i);
}

// Output:
// 1 2 4 5

// Explanation:
// Iteration 3 is skipped.


/*======================================================
11. Labeled Statements
Definition:
Labels a loop or block so break or continue
can target a specific loop.
======================================================*/

outerLoop:
for (let i = 1; i <= 3; i++) {

    for (let j = 1; j <= 3; j++) {

        if (i === 2 && j === 2) {
            break outerLoop;
        }

        console.log(i, j);
    }
}

// Explanation:
// break outerLoop exits the labeled loop.


/*======================================================
12. Empty Statements
Definition:
A statement that does nothing.
Represented by a semicolon (;)
======================================================*/

let count = 0;

while (count < 3)
    count++;

; // Empty statement

console.log(count);

// Explanation:
// Rarely used. Represents "do nothing".


/*======================================================
13. Block Statements
Definition:
Group multiple statements together using {}.
======================================================*/

{
    let message = "Hello JavaScript";

    console.log(message);
    console.log("Inside Block");
}

// Explanation:
// Curly braces create a block containing
// multiple statements.

/*******************************************************
SUMMARY OF CONTROL FLOW

1. if               -> Executes when condition is true
2. if...else        -> Two possible execution paths
3. else if          -> Multiple condition checks
4. Nested Conditions-> if inside another if
5. switch           -> Multiple choices
6. case/default     -> Matching and fallback options
7. Fall-Through     -> Next case executes without break
8. Conditional Expr -> Short form of if...else
9. break            -> Stops loop/switch
10. continue        -> Skips current iteration
11. Labeled Statement -> Named loop/block control
12. Empty Statement -> Does nothing (;)
13. Block Statement -> Groups statements with {}
*******************************************************/