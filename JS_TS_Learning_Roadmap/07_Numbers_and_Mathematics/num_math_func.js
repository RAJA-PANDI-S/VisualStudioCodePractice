// ============================================================================
// 7. Numbers and Mathematics in JavaScript
// ============================================================================

/*
-----------------------------------------------------------------------------
1. Number Literals
-----------------------------------------------------------------------------
Definition:
Number literals are fixed numeric values written directly in code.

Example:
*/
let age = 25;
let price = 99.99;

console.log(age);
console.log(price);

/*
Explanation:
25 and 99.99 are number literals.
*/


/*
-----------------------------------------------------------------------------
2. Integer and Floating-Point Numbers
-----------------------------------------------------------------------------
Definition:
Integers are whole numbers, while floating-point numbers contain decimals.

Example:
*/
let integerNum = 100;
let floatNum = 10.75;

console.log(integerNum);
console.log(floatNum);

/*
Explanation:
100 is an integer, 10.75 is a floating-point number.
*/


/*
-----------------------------------------------------------------------------
3. Number Precision
-----------------------------------------------------------------------------
Definition:
JavaScript can safely represent integers up to a certain precision limit.

Example:
*/
let precise = 999999999999999;
let lostPrecision = 9999999999999999;

console.log(precise);
console.log(lostPrecision);

/*
Explanation:
Large numbers may lose precision because of JavaScript's Number limitations.
*/


/*
-----------------------------------------------------------------------------
4. Floating-Point Errors
-----------------------------------------------------------------------------
Definition:
Decimal calculations sometimes produce unexpected results due to binary storage.

Example:
*/
console.log(0.1 + 0.2);

/*
Explanation:
Output: 0.30000000000000004 instead of 0.3
*/


/*
-----------------------------------------------------------------------------
5. Number() Conversion
-----------------------------------------------------------------------------
Definition:
Converts a value into a number.

Example:
*/
console.log(Number("123"));
console.log(Number(true));

/*
Explanation:
"123" becomes 123.
true becomes 1.
*/


/*
-----------------------------------------------------------------------------
6. parseInt()
-----------------------------------------------------------------------------
Definition:
Converts a string into an integer.

Example:
*/
console.log(parseInt("100px"));

/*
Explanation:
Extracts integer part and returns 100.
*/


/*
-----------------------------------------------------------------------------
7. parseFloat()
-----------------------------------------------------------------------------
Definition:
Converts a string into a floating-point number.

Example:
*/
console.log(parseFloat("10.75kg"));

/*
Explanation:
Returns 10.75.
*/


/*
-----------------------------------------------------------------------------
8. isNaN()
-----------------------------------------------------------------------------
Definition:
Checks whether a value is Not-a-Number after conversion.

Example:
*/
console.log(isNaN("Hello"));
console.log(isNaN("123"));

/*
Explanation:
"Hello" is not a valid number.
*/


/*
-----------------------------------------------------------------------------
9. Number.isNaN()
-----------------------------------------------------------------------------
Definition:
Checks if the value is exactly NaN.

Example:
*/
console.log(Number.isNaN(NaN));
console.log(Number.isNaN("NaN"));

/*
Explanation:
Safer than global isNaN().
*/


/*
-----------------------------------------------------------------------------
10. Number.isFinite()
-----------------------------------------------------------------------------
Definition:
Checks whether a value is a finite number.

Example:
*/
console.log(Number.isFinite(100));
console.log(Number.isFinite(Infinity));

/*
Explanation:
Infinity is not finite.
*/


/*
-----------------------------------------------------------------------------
11. Number.isInteger()
-----------------------------------------------------------------------------
Definition:
Checks whether a value is an integer.

Example:
*/
console.log(Number.isInteger(25));
console.log(Number.isInteger(25.5));

/*
Explanation:
Returns true only for whole numbers.
*/


/*
-----------------------------------------------------------------------------
12. Number.isSafeInteger()
-----------------------------------------------------------------------------
Definition:
Checks whether an integer is safely representable.

Example:
*/
console.log(Number.isSafeInteger(100));
console.log(Number.isSafeInteger(99999999999999999));

/*
Explanation:
Very large integers become unsafe.
*/


/*
-----------------------------------------------------------------------------
13. Number.MAX_VALUE
-----------------------------------------------------------------------------
Definition:
Largest possible JavaScript number.

Example:
*/
console.log(Number.MAX_VALUE);

/*
Explanation:
Represents the maximum numeric value.
*/


/*
-----------------------------------------------------------------------------
14. Number.MIN_VALUE
-----------------------------------------------------------------------------
Definition:
Smallest positive number greater than 0.

Example:
*/
console.log(Number.MIN_VALUE);

/*
Explanation:
Represents the smallest positive value.
*/


/*
-----------------------------------------------------------------------------
15. Number.MAX_SAFE_INTEGER
-----------------------------------------------------------------------------
Definition:
Largest safe integer that JavaScript can accurately store.

Example:
*/
console.log(Number.MAX_SAFE_INTEGER);

/*
Explanation:
Value: 9007199254740991
*/


/*
-----------------------------------------------------------------------------
16. Number.EPSILON
-----------------------------------------------------------------------------
Definition:
Smallest difference between 1 and the next representable number.

Example:
*/
console.log(Number.EPSILON);

/*
Explanation:
Useful when comparing decimal values.
*/


/*
-----------------------------------------------------------------------------
17. Number Formatting
-----------------------------------------------------------------------------
Definition:
Formats numbers for display purposes.

Example:
*/
let num = 1234.5678;

console.log(num.toFixed(2));
console.log(num.toPrecision(5));

/*
Explanation:
toFixed() controls decimal places.
toPrecision() controls total digits.
*/


/*
-----------------------------------------------------------------------------
18. Exponential Notation
-----------------------------------------------------------------------------
Definition:
Represents numbers using powers of 10.

Example:
*/
let largeNum = 5e6;
let smallNum = 5e-6;

console.log(largeNum);
console.log(smallNum);

/*
Explanation:
5e6 = 5000000
5e-6 = 0.000005
*/


/*
-----------------------------------------------------------------------------
19. Binary, Octal, Decimal, and Hexadecimal
-----------------------------------------------------------------------------
Definition:
Numbers can be represented using different bases.

Example:
*/
let binary = 0b1010;
let octal = 0o12;
let decimal = 10;
let hex = 0xA;

console.log(binary, octal, decimal, hex);

/*
Explanation:
All values equal 10.
*/


/*
-----------------------------------------------------------------------------
20. BigInt
-----------------------------------------------------------------------------
Definition:
BigInt is used for extremely large integers.

Example:
*/
let bigNumber = 123456789012345678901234567890n;

console.log(bigNumber);

/*
Explanation:
Suffix 'n' creates a BigInt value.
*/


/*
-----------------------------------------------------------------------------
21. BigInt Arithmetic
-----------------------------------------------------------------------------
Definition:
Mathematical operations can be performed on BigInt values.

Example:
*/
let a = 100n;
let b = 50n;

console.log(a + b);
console.log(a * b);

/*
Explanation:
Works similarly to regular numbers.
*/


/*
-----------------------------------------------------------------------------
22. BigInt Limitations
-----------------------------------------------------------------------------
Definition:
BigInt cannot be mixed directly with Number.

Example:
*/
let x = 10n;
// console.log(x + 5); // Error

/*
Explanation:
Convert one type before performing operations.
*/


/*
-----------------------------------------------------------------------------
23. Math Object
-----------------------------------------------------------------------------
Definition:
Math provides methods and constants for mathematical operations.

Example:
*/
console.log(Math.PI);

/*
Explanation:
Math.PI returns the value of π.
*/


/*
-----------------------------------------------------------------------------
24. Math.round()
-----------------------------------------------------------------------------
Definition:
Rounds to nearest integer.

Example:
*/
console.log(Math.round(4.6));

/*
Explanation:
Returns 5.
*/


/*
-----------------------------------------------------------------------------
25. Math.floor()
-----------------------------------------------------------------------------
Definition:
Rounds down to nearest integer.

Example:
*/
console.log(Math.floor(4.9));

/*
Explanation:
Returns 4.
*/


/*
-----------------------------------------------------------------------------
26. Math.ceil()
-----------------------------------------------------------------------------
Definition:
Rounds up to nearest integer.

Example:
*/
console.log(Math.ceil(4.1));

/*
Explanation:
Returns 5.
*/


/*
-----------------------------------------------------------------------------
27. Math.trunc()
-----------------------------------------------------------------------------
Definition:
Removes decimal part.

Example:
*/
console.log(Math.trunc(4.9));

/*
Explanation:
Returns 4.
*/


/*
-----------------------------------------------------------------------------
28. Math.random()
-----------------------------------------------------------------------------
Definition:
Generates a random number between 0 and 1.

Example:
*/
console.log(Math.random());

/*
Explanation:
Returns a different random value each time.
*/


/*
-----------------------------------------------------------------------------
29. Math.abs()
-----------------------------------------------------------------------------
Definition:
Returns absolute (positive) value.

Example:
*/
console.log(Math.abs(-20));

/*
Explanation:
Returns 20.
*/


/*
-----------------------------------------------------------------------------
30. Math.max()
-----------------------------------------------------------------------------
Definition:
Returns the largest value.

Example:
*/
console.log(Math.max(10, 20, 30));

/*
Explanation:
Returns 30.
*/


/*
-----------------------------------------------------------------------------
31. Math.min()
-----------------------------------------------------------------------------
Definition:
Returns the smallest value.

Example:
*/
console.log(Math.min(10, 20, 30));

/*
Explanation:
Returns 10.
*/


/*
-----------------------------------------------------------------------------
32. Math.pow()
-----------------------------------------------------------------------------
Definition:
Raises a number to a power.

Example:
*/
console.log(Math.pow(2, 3));

/*
Explanation:
2³ = 8.
*/


/*
-----------------------------------------------------------------------------
33. Math.sqrt()
-----------------------------------------------------------------------------
Definition:
Returns square root of a number.

Example:
*/
console.log(Math.sqrt(25));

/*
Explanation:
Returns 5.
*/


/*
-----------------------------------------------------------------------------
34. Math.cbrt()
-----------------------------------------------------------------------------
Definition:
Returns cube root of a number.

Example:
*/
console.log(Math.cbrt(27));

/*
Explanation:
Returns 3.
*/


/*
-----------------------------------------------------------------------------
35. Math.sign()
-----------------------------------------------------------------------------
Definition:
Returns sign of a number.

Example:
*/
console.log(Math.sign(-10));
console.log(Math.sign(20));

/*
Explanation:
Negative → -1
Positive → 1
*/


/*
-----------------------------------------------------------------------------
36. Math.log()
-----------------------------------------------------------------------------
Definition:
Returns natural logarithm of a number.

Example:
*/
console.log(Math.log(Math.E));

/*
Explanation:
Returns 1 because ln(e) = 1.
*/


/*
-----------------------------------------------------------------------------
37. Math.exp()
-----------------------------------------------------------------------------
Definition:
Returns e raised to the given power.

Example:
*/
console.log(Math.exp(2));

/*
Explanation:
Returns e².
*/


/*
-----------------------------------------------------------------------------
38. Math.sin(), Math.cos(), and Math.tan()
-----------------------------------------------------------------------------
Definition:
Trigonometric functions that work with radians.

Example:
*/
let angle = Math.PI / 4;

console.log(Math.sin(angle));
console.log(Math.cos(angle));
console.log(Math.tan(angle));

/*
Explanation:
Used in graphics, games, animations, and scientific calculations.
Math.PI / 4 represents 45 degrees.
*/

// ============================================================================
// End of Numbers and Mathematics
// ============================================================================