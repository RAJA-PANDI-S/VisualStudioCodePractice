/*******************************************************
6. STRINGS IN JAVASCRIPT
Definition + Sample Program + Simple Explanation
*******************************************************/


/*======================================================
1. String Creation
Definition:
Strings are used to store text data.
======================================================*/

let str = "Hello JavaScript";

console.log(str);

// Explanation:
// A string is a sequence of characters.


/*======================================================
2. String Literals
Definition:
Strings created using single quotes,
double quotes, or backticks.
======================================================*/

let a = 'Single Quotes';
let b = "Double Quotes";
let c = `Backticks`;

console.log(a, b, c);

// Explanation:
// String literals are the most common way
// to create strings.


/*======================================================
3. String Constructors
Definition:
Strings can be created using String().
======================================================*/

let text = new String("JavaScript");

console.log(text);

// Explanation:
// Creates a String object.
// String literals are generally preferred.


/*======================================================
4. String Immutability
Definition:
Strings cannot be modified after creation.
======================================================*/

let name = "John";

// name[0] = "M"; // Does not change string

console.log(name);

// Explanation:
// Strings are immutable.
// A new string must be created instead.


/*======================================================
5. String Indexing
Definition:
Characters can be accessed using indexes.
======================================================*/

let language = "JavaScript";

console.log(language[0]);
console.log(language[4]);

// Explanation:
// Index starts at 0.


/*======================================================
6. String Length
Definition:
Returns number of characters.
======================================================*/

let word = "Hello";

console.log(word.length);

// Explanation:
// length is a property, not a method.


/*======================================================
7. Escape Sequences
Definition:
Special characters prefixed with backslash.
======================================================*/

console.log("Hello\nWorld");
console.log("JavaScript\tTutorial");
console.log("He said \"Hi\"");

// Explanation:
// \n = New Line
// \t = Tab
// \" = Double Quote


/*======================================================
8. Template Literals
Definition:
Strings enclosed in backticks (`).
======================================================*/

let user = "John";

console.log(`Welcome ${user}`);

// Explanation:
// Supports interpolation and multiline text.


/*======================================================
9. String Interpolation
Definition:
Embedding variables inside template strings.
======================================================*/

let age = 25;

console.log(`Age is ${age}`);

// Explanation:
// ${expression} inserts dynamic values.


/*======================================================
10. Multiline Strings
Definition:
Strings spanning multiple lines.
======================================================*/

let message = `
Hello
Welcome
To JavaScript
`;

console.log(message);

// Explanation:
// Backticks allow multiline strings.


/*======================================================
11. Tagged Template Literals
Definition:
A function processes a template literal.
======================================================*/

function tag(strings, value) {
    return strings[0] + value.toUpperCase();
}

let result = tag`Hello ${"world"}`;

console.log(result);

// Explanation:
// Tags allow custom handling of template literals.


/*======================================================
12. String Concatenation
Definition:
Combining multiple strings.
======================================================*/

let firstName = "John";
let lastName = "Doe";

let fullName = firstName + " " + lastName;

console.log(fullName);

// Explanation:
// + operator joins strings.


/*======================================================
13. String Comparison
Definition:
Strings are compared alphabetically.
======================================================*/

console.log("Apple" < "Banana");

// Explanation:
// Returns true because Apple comes before
// Banana alphabetically.


/*======================================================
14. String Methods
Definition:
Built-in functions used to manipulate strings.
======================================================*/

let sample = "JavaScript";

console.log(sample.toUpperCase());

// Explanation:
// Methods make string manipulation easier.


/*======================================================
15. charAt()
Definition:
Returns character at specified position.
======================================================*/

console.log("JavaScript".charAt(4));

// Explanation:
// Returns "S"


/*======================================================
16. at()
Definition:
Returns character using positive or negative index.
======================================================*/

console.log("JavaScript".at(-1));

// Explanation:
// Returns last character "t"


/*======================================================
17. includes()
Definition:
Checks if string contains text.
======================================================*/

console.log("JavaScript".includes("Script"));

// Explanation:
// Returns true or false.


/*======================================================
18. indexOf()
Definition:
Returns first occurrence position.
======================================================*/

console.log("JavaScript".indexOf("a"));

// Explanation:
// Returns index of first match.


/*======================================================
19. lastIndexOf()
Definition:
Returns last occurrence position.
======================================================*/

console.log("JavaScript".lastIndexOf("a"));

// Explanation:
// Searches from the end.


/*======================================================
20. slice()
Definition:
Extracts part of a string.
======================================================*/

console.log("JavaScript".slice(0, 4));

// Explanation:
// Returns "Java"


/*======================================================
21. substring()
Definition:
Returns characters between indexes.
======================================================*/

console.log("JavaScript".substring(4, 10));

// Explanation:
// Returns "Script"


/*======================================================
22. split()
Definition:
Converts string into array.
======================================================*/

let fruits = "Apple,Mango,Orange";

console.log(fruits.split(","));

// Explanation:
// Splits string wherever delimiter appears.


/*======================================================
23. replace()
Definition:
Replaces first matching occurrence.
======================================================*/

console.log(
    "I like Java".replace("Java", "JavaScript")
);

// Explanation:
// Replaces first occurrence only.


/*======================================================
24. replaceAll()
Definition:
Replaces all matching occurrences.
======================================================*/

console.log(
    "cat cat cat".replaceAll("cat", "dog")
);

// Explanation:
// Every occurrence is replaced.


/*======================================================
25. toUpperCase()
Definition:
Converts string to uppercase.
======================================================*/

console.log("hello".toUpperCase());

// Explanation:
// Output: HELLO


/*======================================================
26. toLowerCase()
Definition:
Converts string to lowercase.
======================================================*/

console.log("HELLO".toLowerCase());

// Explanation:
// Output: hello


/*======================================================
27. trim()
Definition:
Removes spaces from beginning and end.
======================================================*/

console.log("   Hello   ".trim());

// Explanation:
// Removes extra spaces around text.


/*======================================================
28. trimStart()
Definition:
Removes leading spaces.
======================================================*/

console.log("   Hello".trimStart());

// Explanation:
// Removes spaces at beginning only.


/*======================================================
29. trimEnd()
Definition:
Removes trailing spaces.
======================================================*/

console.log("Hello   ".trimEnd());

// Explanation:
// Removes spaces at end only.


/*======================================================
30. startsWith()
Definition:
Checks whether string starts with text.
======================================================*/

console.log("JavaScript".startsWith("Java"));

// Explanation:
// Returns true.


/*======================================================
31. endsWith()
Definition:
Checks whether string ends with text.
======================================================*/

console.log("JavaScript".endsWith("Script"));

// Explanation:
// Returns true.


/*======================================================
32. padStart()
Definition:
Pads string at beginning.
======================================================*/

console.log("5".padStart(3, "0"));

// Explanation:
// Output: 005


/*======================================================
33. padEnd()
Definition:
Pads string at end.
======================================================*/

console.log("5".padEnd(3, "0"));

// Explanation:
// Output: 500


/*======================================================
34. repeat()
Definition:
Repeats string specified number of times.
======================================================*/

console.log("Hi ".repeat(3));

// Explanation:
// Output: Hi Hi Hi


/*======================================================
35. match()
Definition:
Searches string using regular expression.
======================================================*/

console.log("JavaScript".match(/a/g));

// Explanation:
// Returns array of matches.


/*======================================================
36. matchAll()
Definition:
Returns all regex matches with details.
======================================================*/

let matches =
    [..."test1 test2".matchAll(/test\d/g)];

console.log(matches);

// Explanation:
// Finds all matching patterns.


/*======================================================
37. search()
Definition:
Returns position of regex match.
======================================================*/

console.log("JavaScript".search(/Script/));

// Explanation:
// Returns index where match starts.


/*======================================================
38. String.raw()
Definition:
Returns raw string without processing escapes.
======================================================*/

console.log(String.raw`Hello\nWorld`);

// Explanation:
// Output: Hello\nWorld


/*======================================================
39. Unicode and UTF-16
Definition:
JavaScript stores strings using UTF-16 encoding.
======================================================*/

let emoji = "😀";

console.log(emoji);
console.log(emoji.length);

// Explanation:
// Most characters use 1 code unit.
// Some Unicode characters (like emojis)
// use 2 UTF-16 code units.


/*******************************************************
SUMMARY

String Creation       -> Create text values
String Literals       -> ' ', " ", `
String Constructors   -> new String()
Immutability          -> Cannot modify directly
Indexing              -> Access by position
Length                -> Character count
Escape Sequences      -> \n, \t, \"
Template Literals     -> Backtick strings
Interpolation         -> ${expression}
Multiline Strings     -> Backticks support multiple lines
Tagged Templates      -> Custom template processing
Concatenation         -> Join strings
Comparison            -> Alphabetical comparison

Important Methods:
charAt()      -> Character at index
at()          -> Supports negative indexes
includes()    -> Check existence
indexOf()     -> First position
lastIndexOf() -> Last position
slice()       -> Extract part
substring()   -> Extract by indexes
split()       -> Convert to array
replace()     -> Replace first match
replaceAll()  -> Replace all matches
toUpperCase() -> Uppercase
toLowerCase() -> Lowercase
trim()        -> Remove surrounding spaces
trimStart()   -> Remove leading spaces
trimEnd()     -> Remove trailing spaces
startsWith()  -> Check beginning
endsWith()    -> Check ending
padStart()    -> Pad beginning
padEnd()      -> Pad ending
repeat()      -> Repeat string
match()       -> Regex match
matchAll()    -> All regex matches
search()      -> Search regex
String.raw()  -> Raw string output
Unicode UTF-16-> Internal string encoding
*******************************************************/