// ============================================================================
// 8. ARRAYS IN JAVASCRIPT
// Each topic contains:
// 1. Definition
// 2. Sample Program
// 3. Simple Explanation
// ============================================================================

/*
-----------------------------------------------------------------------------
1. Array Creation
-----------------------------------------------------------------------------
Definition:
An array is a special object used to store multiple values in a single variable.

Example:
*/
let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits);

/*
Explanation:
The array stores three values in one variable.
*/


/*
-----------------------------------------------------------------------------
2. Array Literals
-----------------------------------------------------------------------------
Definition:
The simplest way to create an array using square brackets [].

Example:
*/
let colors = ["Red", "Green", "Blue"];

console.log(colors);

/*
Explanation:
Array literals are the most commonly used method.
*/


/*
-----------------------------------------------------------------------------
3. Array Constructors
-----------------------------------------------------------------------------
Definition:
Arrays can be created using the Array() constructor.

Example:
*/
let numbers = new Array(10, 20, 30);

console.log(numbers);

/*
Explanation:
Creates an array containing 10, 20, and 30.
*/


/*
-----------------------------------------------------------------------------
4. Array Indexing
-----------------------------------------------------------------------------
Definition:
Array elements are accessed using zero-based indexes.

Example:
*/
let animals = ["Dog", "Cat", "Tiger"];

console.log(animals[0]);
console.log(animals[2]);

/*
Explanation:
First element index is 0.
*/


/*
-----------------------------------------------------------------------------
5. Array Length
-----------------------------------------------------------------------------
Definition:
length returns the total number of elements.

Example:
*/
let cities = ["Delhi", "Chennai", "Mumbai"];

console.log(cities.length);

/*
Explanation:
Returns 3.
*/


/*
-----------------------------------------------------------------------------
6. Sparse Arrays
-----------------------------------------------------------------------------
Definition:
Arrays with empty slots are called sparse arrays.

Example:
*/
let sparse = [];
sparse[0] = "A";
sparse[5] = "B";

console.log(sparse);
console.log(sparse.length);

/*
Explanation:
Indexes 1 to 4 are empty.
*/


/*
-----------------------------------------------------------------------------
7. Multidimensional Arrays
-----------------------------------------------------------------------------
Definition:
Arrays containing other arrays.

Example:
*/
let matrix = [
  [1, 2],
  [3, 4]
];

console.log(matrix);

/*
Explanation:
Represents rows and columns.
*/


/*
-----------------------------------------------------------------------------
8. Nested Arrays
-----------------------------------------------------------------------------
Definition:
An array inside another array.

Example:
*/
let data = ["John", ["HTML", "CSS", "JS"]];

console.log(data[1][0]);

/*
Explanation:
Access nested array values using multiple indexes.
*/


/*
-----------------------------------------------------------------------------
9. Array Destructuring
-----------------------------------------------------------------------------
Definition:
Extract values from arrays into variables.

Example:
*/
let nums = [10, 20, 30];

let [a, b, c] = nums;

console.log(a, b, c);

/*
Explanation:
Array values are assigned to variables.
*/


/*
-----------------------------------------------------------------------------
10. Array Copying
-----------------------------------------------------------------------------
Definition:
Creating a duplicate array.

Example:
*/
let original = [1, 2, 3];
let copy = [...original];

console.log(copy);

/*
Explanation:
Spread operator copies elements.
*/


/*
-----------------------------------------------------------------------------
11. Shallow Copy
-----------------------------------------------------------------------------
Definition:
Copies only top-level elements.

Example:
*/
let arr1 = [[1, 2]];
let arr2 = [...arr1];

arr2[0][0] = 100;

console.log(arr1);

/*
Explanation:
Nested objects are still shared.
*/


/*
-----------------------------------------------------------------------------
12. Deep Copy
-----------------------------------------------------------------------------
Definition:
Copies all nested elements completely.

Example:
*/
let person = [{ name: "John" }];

let deepCopy = JSON.parse(JSON.stringify(person));

deepCopy[0].name = "David";

console.log(person);

/*
Explanation:
Original array remains unchanged.
*/


/*
-----------------------------------------------------------------------------
13. Array Mutability
-----------------------------------------------------------------------------
Definition:
Arrays can be modified after creation.

Example:
*/
let items = ["Pen", "Book"];

items[0] = "Pencil";

console.log(items);

/*
Explanation:
Array contents can change.
*/


/*
-----------------------------------------------------------------------------
14. Array References
-----------------------------------------------------------------------------
Definition:
Arrays are assigned by reference.

Example:
*/
let x = [1, 2];
let y = x;

y.push(3);

console.log(x);

/*
Explanation:
Both variables reference the same array.
*/


/*
-----------------------------------------------------------------------------
15. Array Methods
-----------------------------------------------------------------------------
Definition:
Built-in functions used to manipulate arrays.

Example:
*/
let arr = [1, 2, 3];

console.log(arr.length);

/*
Explanation:
JavaScript provides many useful array methods.
*/


/*
-----------------------------------------------------------------------------
16. push()
-----------------------------------------------------------------------------
Definition:
Adds element(s) at the end.

Example:
*/
let pushArr = [1, 2];

pushArr.push(3);

console.log(pushArr);

/*
Explanation:
3 is added to the end.
*/


/*
-----------------------------------------------------------------------------
17. pop()
-----------------------------------------------------------------------------
Definition:
Removes the last element.

Example:
*/
let popArr = [1, 2, 3];

popArr.pop();

console.log(popArr);

/*
Explanation:
Removes 3.
*/


/*
-----------------------------------------------------------------------------
18. shift()
-----------------------------------------------------------------------------
Definition:
Removes the first element.

Example:
*/
let shiftArr = [1, 2, 3];

shiftArr.shift();

console.log(shiftArr);

/*
Explanation:
Removes 1.
*/


/*
-----------------------------------------------------------------------------
19. unshift()
-----------------------------------------------------------------------------
Definition:
Adds element(s) at the beginning.

Example:
*/
let unshiftArr = [2, 3];

unshiftArr.unshift(1);

console.log(unshiftArr);

/*
Explanation:
Adds 1 at the start.
*/


/*
-----------------------------------------------------------------------------
20. splice()
-----------------------------------------------------------------------------
Definition:
Adds, removes, or replaces elements.

Example:
*/
let spliceArr = [1, 2, 3];

spliceArr.splice(1, 1, 100);

console.log(spliceArr);

/*
Explanation:
Replaces 2 with 100.
*/


/*
-----------------------------------------------------------------------------
21. slice()
-----------------------------------------------------------------------------
Definition:
Returns part of an array.

Example:
*/
let sliceArr = [1, 2, 3, 4];

console.log(sliceArr.slice(1, 3));

/*
Explanation:
Returns [2,3].
*/


/*
-----------------------------------------------------------------------------
22. concat()
-----------------------------------------------------------------------------
Definition:
Merges arrays.

Example:
*/
console.log([1, 2].concat([3, 4]));

/*
Explanation:
Combines arrays together.
*/


/*
-----------------------------------------------------------------------------
23. join()
-----------------------------------------------------------------------------
Definition:
Converts array into a string.

Example:
*/
console.log(["A", "B", "C"].join("-"));

/*
Explanation:
Output: A-B-C
*/


/*
-----------------------------------------------------------------------------
24. indexOf()
-----------------------------------------------------------------------------
Definition:
Returns first matching index.

Example:
*/
console.log(["A", "B", "C"].indexOf("B"));

/*
Explanation:
Returns 1.
*/


/*
-----------------------------------------------------------------------------
25. lastIndexOf()
-----------------------------------------------------------------------------
Definition:
Returns last matching index.

Example:
*/
console.log(["A", "B", "A"].lastIndexOf("A"));

/*
Explanation:
Returns 2.
*/


/*
-----------------------------------------------------------------------------
26. includes()
-----------------------------------------------------------------------------
Definition:
Checks whether a value exists.

Example:
*/
console.log(["JS", "Java"].includes("JS"));

/*
Explanation:
Returns true.
*/


/*
-----------------------------------------------------------------------------
27. find()
-----------------------------------------------------------------------------
Definition:
Returns first matching element.

Example:
*/
let value = [10, 20, 30].find(num => num > 15);

console.log(value);

/*
Explanation:
Returns 20.
*/


/*
-----------------------------------------------------------------------------
28. findIndex()
-----------------------------------------------------------------------------
Definition:
Returns index of first matching element.

Example:
*/
console.log([10, 20, 30].findIndex(x => x > 15));

/*
Explanation:
Returns 1.
*/


/*
-----------------------------------------------------------------------------
29. findLast()
-----------------------------------------------------------------------------
Definition:
Returns last matching element.

Example:
*/
console.log([10, 20, 30, 40].findLast(x => x > 15));

/*
Explanation:
Returns 40.
*/


/*
-----------------------------------------------------------------------------
30. findLastIndex()
-----------------------------------------------------------------------------
Definition:
Returns last matching index.

Example:
*/
console.log([10, 20, 30, 40].findLastIndex(x => x > 15));

/*
Explanation:
Returns 3.
*/


/*
-----------------------------------------------------------------------------
31. filter()
-----------------------------------------------------------------------------
Definition:
Returns all matching elements.

Example:
*/
console.log([1,2,3,4].filter(x => x % 2 === 0));

/*
Explanation:
Returns [2,4].
*/


/*
-----------------------------------------------------------------------------
32. map()
-----------------------------------------------------------------------------
Definition:
Creates a new transformed array.

Example:
*/
console.log([1,2,3].map(x => x * 2));

/*
Explanation:
Returns [2,4,6].
*/


/*
-----------------------------------------------------------------------------
33. reduce()
-----------------------------------------------------------------------------
Definition:
Reduces array to a single value.

Example:
*/
let sum = [1,2,3].reduce((acc, val) => acc + val, 0);

console.log(sum);

/*
Explanation:
Returns total sum 6.
*/


/*
-----------------------------------------------------------------------------
34. reduceRight()
-----------------------------------------------------------------------------
Definition:
Works like reduce from right to left.

Example:
*/
let result = ["A","B","C"].reduceRight((acc,val) => acc + val);

console.log(result);

/*
Explanation:
Output: CBA
*/


/*
-----------------------------------------------------------------------------
35. forEach()
-----------------------------------------------------------------------------
Definition:
Executes a function for each element.

Example:
*/
[1,2,3].forEach(num => {
  console.log(num);
});

/*
Explanation:
Loops through array items.
*/


/*
-----------------------------------------------------------------------------
36. some()
-----------------------------------------------------------------------------
Definition:
Checks if at least one element matches.

Example:
*/
console.log([1,2,3].some(x => x > 2));

/*
Explanation:
Returns true.
*/


/*
-----------------------------------------------------------------------------
37. every()
-----------------------------------------------------------------------------
Definition:
Checks if all elements match.

Example:
*/
console.log([2,4,6].every(x => x % 2 === 0));

/*
Explanation:
Returns true.
*/


/*
-----------------------------------------------------------------------------
38. sort()
-----------------------------------------------------------------------------
Definition:
Sorts array in place.

Example:
*/
let sortArr = [3,1,2];

sortArr.sort((a,b) => a-b);

console.log(sortArr);

/*
Explanation:
Returns [1,2,3].
*/


/*
-----------------------------------------------------------------------------
39. toSorted()
-----------------------------------------------------------------------------
Definition:
Returns a sorted copy without changing original array.

Example:
*/
let ts = [3,1,2];

console.log(ts.toSorted((a,b)=>a-b));

/*
Explanation:
Original array remains unchanged.
*/


/*
-----------------------------------------------------------------------------
40. reverse()
-----------------------------------------------------------------------------
Definition:
Reverses original array.

Example:
*/
let rev = [1,2,3];

rev.reverse();

console.log(rev);

/*
Explanation:
Returns [3,2,1].
*/


/*
-----------------------------------------------------------------------------
41. toReversed()
-----------------------------------------------------------------------------
Definition:
Returns reversed copy.

Example:
*/
let tr = [1,2,3];

console.log(tr.toReversed());

/*
Explanation:
Original array is not modified.
*/


/*
-----------------------------------------------------------------------------
42. fill()
-----------------------------------------------------------------------------
Definition:
Fills array with a value.

Example:
*/
console.log(new Array(3).fill(0));

/*
Explanation:
Returns [0,0,0].
*/


/*
-----------------------------------------------------------------------------
43. copyWithin()
-----------------------------------------------------------------------------
Definition:
Copies values within same array.

Example:
*/
let cw = [1,2,3,4];

cw.copyWithin(0,2);

console.log(cw);

/*
Explanation:
Copies from index 2 to index 0.
*/


/*
-----------------------------------------------------------------------------
44. flat()
-----------------------------------------------------------------------------
Definition:
Flattens nested arrays.

Example:
*/
console.log([1,[2,[3]]].flat(2));

/*
Explanation:
Returns [1,2,3].
*/


/*
-----------------------------------------------------------------------------
45. flatMap()
-----------------------------------------------------------------------------
Definition:
Maps and flattens one level.

Example:
*/
console.log([1,2,3].flatMap(x => [x, x*2]));

/*
Explanation:
Returns [1,2,2,4,3,6].
*/


/*
-----------------------------------------------------------------------------
46. at()
-----------------------------------------------------------------------------
Definition:
Access elements using positive or negative indexes.

Example:
*/
let atArr = [10,20,30];

console.log(atArr.at(-1));

/*
Explanation:
Returns last element 30.
*/


/*
-----------------------------------------------------------------------------
47. Array.from()
-----------------------------------------------------------------------------
Definition:
Creates an array from iterable objects.

Example:
*/
console.log(Array.from("HELLO"));

/*
Explanation:
Returns ["H","E","L","L","O"].
*/


/*
-----------------------------------------------------------------------------
48. Array.of()
-----------------------------------------------------------------------------
Definition:
Creates an array from arguments.

Example:
*/
console.log(Array.of(1,2,3));

/*
Explanation:
Returns [1,2,3].
*/


/*
-----------------------------------------------------------------------------
49. Array.isArray()
-----------------------------------------------------------------------------
Definition:
Checks whether a value is an array.

Example:
*/
console.log(Array.isArray([1,2,3]));
console.log(Array.isArray("Hello"));

/*
Explanation:
Returns true only for arrays.
*/


/*
-----------------------------------------------------------------------------
50. Array Iterators
-----------------------------------------------------------------------------
Definition:
Special methods used to iterate array values.

Example:
*/
let iterator = ["A", "B"].values();

for(let value of iterator){
  console.log(value);
}

/*
Explanation:
values(), keys(), entries() return iterators.
*/


/*
-----------------------------------------------------------------------------
51. Array-Like Objects
-----------------------------------------------------------------------------
Definition:
Objects that look like arrays but are not actual arrays.

Example:
*/
let arrayLike = {
  0: "A",
  1: "B",
  length: 2
};

console.log(Array.from(arrayLike));

/*
Explanation:
Array.from() converts it to a real array.
*/


/*
-----------------------------------------------------------------------------
52. Typed Arrays
-----------------------------------------------------------------------------
Definition:
Typed arrays store binary numeric data efficiently.

Example:
*/
let typed = new Int8Array([10,20,30]);

console.log(typed);

/*
Explanation:
Stores data in fixed numeric formats.
*/


/*
-----------------------------------------------------------------------------
53. ArrayBuffer
-----------------------------------------------------------------------------
Definition:
Represents raw binary memory.

Example:
*/
let buffer = new ArrayBuffer(8);

console.log(buffer.byteLength);

/*
Explanation:
Creates 8 bytes of memory.
*/


/*
-----------------------------------------------------------------------------
54. DataView
-----------------------------------------------------------------------------
Definition:
Provides a way to read and write data inside ArrayBuffer.

Example:
*/
let buf = new ArrayBuffer(4);
let view = new DataView(buf);

view.setInt8(0, 100);

console.log(view.getInt8(0));

/*
Explanation:
Reads and writes binary data at specific positions.
*/


// ============================================================================
// End of Arrays
// ============================================================================