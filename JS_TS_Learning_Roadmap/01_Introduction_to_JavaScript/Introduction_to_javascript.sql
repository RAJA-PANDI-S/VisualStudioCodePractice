# JavaScript Fundamentals — Complete Notes

## 1. Introduction to JavaScript

**Definition:** JavaScript is a high-level programming language primarily used to make web pages interactive. It can also be used for backend development, mobile applications, desktop applications, and more.

**Example:**
```javascript
let name = "Raja";
console.log("Hello, " + name);
```

**Output:**
```text
Hello, Raja
```

---

## 2. History and Evolution of JavaScript

**Definition:** JavaScript was created by Brendan Eich in 1995 while working at Netscape. It was initially called Mocha, then LiveScript, and finally JavaScript. The ECMAScript standard was introduced in 1997 to standardize the language.

**Important milestones:**
- 1995: JavaScript was created.
- 1997: ECMAScript standardization began.
- 2009: ECMAScript 5 introduced important features, including strict mode and JSON support.
- 2015: ES6 (ECMAScript 2015) introduced `let`, `const`, classes, arrow functions, modules, and more.
- Later years: Regular yearly ECMAScript releases introduced additional language features.

**Example:**
```javascript
// Older style
var name = "Raja";

// Modern JavaScript
const userName = "Raja";
let age = 25;
```

---

## 3. JavaScript Features

**Definition:** Features are the characteristics and capabilities of JavaScript.

**Important features:**
- Dynamic typing: Variable types do not need to be declared explicitly.
- Interpreted/JIT-compiled execution: Modern engines commonly use interpretation and compilation.
- Event-driven programming: Code can respond to clicks, keyboard input, and other events.
- First-class functions: Functions can be stored in variables and passed as arguments.
- Prototype-based inheritance: Objects can inherit properties and methods through prototypes.
- Asynchronous programming: Supports callbacks, promises, and `async`/`await`.
- Cross-platform support: Runs in browsers and many other environments.
- Garbage collection: Memory management is largely automatic.
- Multi-paradigm programming: Supports procedural, object-oriented, and functional styles.

**Example:**
```javascript
const greet = (name) => `Hello, ${name}`;

console.log(greet("Raja"));
```

**Output:**
```text
Hello, Raja
```

---

## 4. JavaScript vs Java

**Definition:** JavaScript and Java are separate programming languages despite their similar names.

| Feature | JavaScript | Java |
|---|---|---|
| Typing | Dynamically typed | Statically typed |
| Execution | JavaScript engine | JVM (Java Virtual Machine) |
| Common use | Web development, servers, applications | Enterprise, Android-related development, backend systems |
| Functions | First-class functions | Methods and functional features |
| Inheritance | Prototype-based | Class-based |
| File extension | `.js` | `.java` |
| Compilation | Commonly interpreted and JIT-compiled | Compiled to bytecode and executed by the JVM |

**JavaScript example:**
```javascript
let value = 10;
value = "Hello";
console.log(value);
```

**Java example:**
```java
public class Main {
    public static void main(String[] args) {
        int value = 10;
        System.out.println(value);
    }
}
```

Java does not allow assigning a string to an `int` variable like the JavaScript example does.

---

## 5. JavaScript vs TypeScript

**Definition:** TypeScript is a programming language developed by Microsoft that extends JavaScript with features such as static type checking. TypeScript code is generally compiled or transpiled into JavaScript before execution.

| Feature | JavaScript | TypeScript |
|---|---|---|
| Typing | Dynamic | Supports static type checking |
| Type annotations | Not supported in standard JavaScript syntax | Supported |
| Execution | Runs in JavaScript engines | Typically transpiled to JavaScript |
| Error detection | Many errors appear at runtime | Some errors can be detected before runtime |
| File extension | `.js` | `.ts` |

**JavaScript example:**
```javascript
let age = 25;
age = "Twenty-five";
```

**TypeScript example:**
```typescript
let age: number = 25;

// Type error during type checking
// age = "Twenty-five";
```

**Note:** TypeScript types are primarily checked during development and compilation. They do not automatically provide runtime validation of external data.

---

## 6. JavaScript Engines

**Definition:** A JavaScript engine is software that parses, compiles, and executes JavaScript code.

**Popular engines:**
- V8: Used by Chrome and Node.js.
- SpiderMonkey: Used by Firefox.
- JavaScriptCore: Used by Safari.
- Chakra: Used historically by Microsoft Edge and other Microsoft products.

**Example:**
```javascript
console.log(10 + 20);
```

A JavaScript engine processes this code and produces the result `30`.

**Key point:** A JavaScript engine executes the language, while a runtime environment provides additional capabilities such as timers, networking, and file access.

---

## 7. JavaScript Runtime Environments

**Definition:** A runtime environment is the complete environment in which JavaScript code executes. It includes a JavaScript engine and additional APIs or facilities.

**Examples:**
- Browser runtime: Provides the DOM, browser events, `fetch()`, and timers.
- Node.js runtime: Provides file system access, server networking, and process information.
- Deno runtime: Provides JavaScript and TypeScript execution with web-standard APIs and additional runtime capabilities.

**Browser example:**
```javascript
console.log(window.location.href);
```

**Node.js example:**
```javascript
console.log(process.version);
```

The first example requires a browser environment. The second requires Node.js.

---

## 8. Client-Side vs Server-Side JavaScript

**Definition:** Client-side JavaScript runs on the user's device, usually inside a web browser. Server-side JavaScript runs on a server using a runtime such as Node.js.

| Feature | Client-Side | Server-Side |
|---|---|---|
| Execution | User's browser | Server |
| Main purpose | User interface and interactions | Business logic, APIs, data processing |
| Common APIs | DOM, `window`, browser events | File system, server networking |
| Example environment | Chrome | Node.js |

**Client-side example:**
```javascript
document.querySelector("#message").textContent = "Hello!";
```

**HTML:**
```html
<p id="message">Original text</p>
```

**Server-side example (Node.js):**
```javascript
console.log("Running on the server");
```

**Key point:** JavaScript can run on both the client and server. Sensitive operations and secrets should not be entrusted to client-side code.

---

## 9. ECMAScript Standards

**Definition:** ECMAScript is the standardized specification that defines the core features and behavior of JavaScript.

**Important terms:**
- ECMAScript: The language specification.
- ES5: The fifth edition, published in 2009.
- ES6 / ES2015: The major 2015 update.
- ES2016 onward: Annual editions adding new features.
- TC39: The committee responsible for developing ECMAScript.

**Example:**
```javascript
// let and const were introduced in ES2015
const country = "India";
let population = 100;

console.log(country, population);
```

**Key point:** JavaScript implementations follow ECMAScript while also providing environment-specific APIs.

---

## 10. Setting Up the Development Environment

**Definition:** A development environment is the collection of tools used to write, execute, test, and debug JavaScript programs.

**Common tools:**
- Code editor: Visual Studio Code.
- Browser: Chrome, Firefox, or Edge.
- Browser developer tools: Console, debugger, and network inspector.
- Node.js: Executes JavaScript outside the browser.
- npm: Package manager distributed with Node.js.

**Steps:**
1. Install a code editor.
2. Install a modern browser.
3. Create a file named `app.js`.
4. Write the following code.
5. Run it in a browser console or with Node.js.

**Example (`app.js`):**
```javascript
console.log("JavaScript environment is ready!");
```

**Run using Node.js:**
```bash
node app.js
```

**Output:**
```text
JavaScript environment is ready!
```

---

## 11. Including JavaScript in HTML

**Definition:** JavaScript can be included in an HTML document using the `<script>` element.

**Example:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>JavaScript Example</title>
</head>
<body>
    <h1>Hello World</h1>

    <script>
        console.log("JavaScript is working!");
    </script>
</body>
</html>
```

**Explanation:**
- The `<script>` element contains or loads JavaScript.
- The browser executes the script according to its placement and attributes.
- The console message appears in the browsers developer console.

**External JavaScript example:**
```html
<script src="app.js"></script>
```

---

## 12. Internal, External, and Inline JavaScript

**Definition:** These are three common ways of placing JavaScript in an HTML page.

### A. Internal JavaScript

JavaScript is written inside a `<script>` element in the HTML file.

```html
<!DOCTYPE html>
<html>
<body>
    <script>
        let message = "Internal JavaScript";
        console.log(message);
    </script>
</body>
</html>
```

### B. External JavaScript

JavaScript is stored in a separate `.js` file and loaded using `src`.

**HTML (`index.html`):**
```html
<script src="app.js" defer></script>
```

**JavaScript (`app.js`):**
```javascript
console.log("External JavaScript");
```

The `defer` attribute allows the external script to execute after the HTML has been parsed.

### C. Inline JavaScript

JavaScript is written directly in an HTML event-handler attribute.

```html
<button onclick="alert('Button clicked!')">
    Click Me
</button>
```

**Best practice:** Prefer external JavaScript files and use `addEventListener()` for event handling in maintainable applications. Inline event handlers are generally discouraged for larger projects.

---

## 13. Strict Mode

**Definition:** Strict mode is a JavaScript execution mode that enables stricter language rules and helps detect certain programming mistakes.

It is enabled using `"use strict";`.

**Example without strict mode:**
```javascript
function example() {
    accidentalVariable = 10;
}

example();

console.log(accidentalVariable);
```

In a classic, non-strict script, this can create a global variable.

**Example with strict mode:**
```javascript
"use strict";

function example() {
    // ReferenceError: accidentalVariable is not defined
    accidentalVariable = 10;
}

example();
```

**Important points:**
- Prevents accidental creation of global variables through undeclared assignments.
- Makes certain silent failures throw errors.
- Changes some historical JavaScript behaviors.
- Applies to the whole script or a function body, depending on where it is declared.
- JavaScript modules and class bodies are automatically strict.

---

## 14. JavaScript Syntax

**Definition:** Syntax refers to the rules that determine how JavaScript code must be written.

**Example:**
```javascript
let age = 25;

if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}
```

**Explanation:**
- `let` declares a variable.
- `age >= 18` is a condition.
- Curly braces `{}` define a block.
- `console.log()` displays output.

**Incorrect syntax example:**
```javascript
// Missing closing parenthesis
// console.log("Hello";
```

A syntax error prevents the affected code from being parsed correctly.

---

## 15. Statements and Expressions

**Definition of a statement:** A statement performs an action or controls program execution.

**Definition of an expression:** An expression produces a value.

**Examples:**
```javascript
// Variable declaration statement
let age = 25;

// Expression
age + 5;

// Assignment statement
age = 30;

// Conditional statement
if (age >= 18) {
    console.log("Adult");
}
```

**Expression example:**
```javascript
let result = 10 + 20;
console.log(result);
```

**Output:**
```text
30
```

Here, `10 + 20` is an expression because it evaluates to `30`. The declaration `let result = 10 + 20;` is a statement.

**Key point:** Expressions can be used inside statements, and some expressions can also form complete expression statements.

---

## 16. Comments

**Definition:** Comments are explanatory text in source code that JavaScript does not execute as program instructions.

### A. Single-line comment

```javascript
// This is a single-line comment
let age = 25;
```

### B. Multi-line comment

```javascript
/*
This is a multi-line comment.
It can span several lines.
*/
let name = "Raja";
```

**Purpose:**
- Explain complex logic.
- Document assumptions.
- Improve code readability.
- Temporarily disable code during debugging.

**Important:** Comments should explain why something is done when the code itself does not make the reason obvious.

---

## 17. Identifiers

**Definition:** An identifier is a name used for variables, functions, classes, parameters, and other named entities.

**Examples:**
```javascript
let userName = "Raja";

function calculateTotal() {
    return 100 + 50;
}

class Student {
}

console.log(userName);
console.log(calculateTotal());
```

**Identifier naming rules:**
- Can contain letters, digits, underscores (`_`), and dollar signs (`$`).
- Cannot begin with a digit.
- Cannot contain spaces.
- Cannot be a reserved keyword when used as an ordinary identifier.
- Are case-sensitive.

**Valid identifiers:**
```javascript
let userName;
let user_name;
let $price;
let _count;
let value2;
```

**Invalid identifiers:**
```javascript
// let 2value = 10;
// let user name = "Raja";
// let class = "JavaScript";
```

The invalid examples are commented out to avoid syntax errors.

---

## 18. Keywords and Reserved Words

**Definition:** Keywords are words with special meanings in JavaScript syntax. Reserved words are words that cannot be used as ordinary identifiers in particular language contexts.

**Common keywords:**
- `let`
- `const`
- `var`
- `function`
- `return`
- `if`
- `else`
- `for`
- `while`
- `class`
- `new`
- `this`
- `try`
- `catch`
- `throw`
- `import`
- `export`
- `switch`
- `break`
- `continue`

**Example:**
```javascript
const age = 25;

if (age >= 18) {
    console.log("Eligible");
}
```

Here, `const` and `if` are keywords.

**Incorrect example:**
```javascript
// let return = 10;
```

`return` cannot be used as an ordinary variable name.

**Note:** Some words have context-dependent restrictions. For example, `await` and `yield` have special rules depending on the surrounding syntax.

---

## 19. Naming Conventions

**Definition:** Naming conventions are agreed-upon practices for naming variables, functions, classes, constants, and other identifiers consistently.

**Common conventions:**

- `camelCase`: Variables and functions.
- `PascalCase`: Classes and constructor-like names.
- `UPPER_SNAKE_CASE`: Constants representing fixed configuration values.
- Descriptive names: Prefer names that communicate purpose.

**Example:**
```javascript
// camelCase
let firstName = "Raja";
let totalAmount = 500;

// Function name in camelCase
function calculateTotal(price, tax) {
    return price + tax;
}

// PascalCase
class StudentDetails {
}

// UPPER_SNAKE_CASE
const MAX_RETRY_COUNT = 3;

console.log(calculateTotal(100, 10));
```

**Output:**
```text
110
```

**Important:** These conventions are widely used but are not all enforced by JavaScript syntax. The use of uppercase for constants is a convention, not a requirement.

---

## 20. Semicolons and Automatic Semicolon Insertion

**Definition:** A semicolon (`;`) marks the end of many JavaScript statements. JavaScript also has an Automatic Semicolon Insertion (ASI) mechanism that inserts semicolons in certain situations when parsing code.

**Example with semicolons:**
```javascript
let a = 10;
let b = 20;

console.log(a + b);
```

**Example where ASI works:**
```javascript
let name = "Raja"
console.log(name)
```

This usually executes correctly because JavaScript can insert semicolons where appropriate.

**Important pitfall:**
```javascript
function getValue() {
    return
    10;
}

console.log(getValue());
```

**Output:**
```text
undefined
```

Because of automatic semicolon insertion, the `return` statement ends before `10`.

**Correct version:**
```javascript
function getValue() {
    return 10;
}

console.log(getValue());
```

**Output:**
```text
10
```

**Best practice:** Use semicolons consistently to reduce ambiguity and prevent common ASI-related mistakes.

---

## 21. Case Sensitivity

**Definition:** JavaScript is case-sensitive, meaning uppercase and lowercase letters are treated as different characters in identifiers.

**Example:**
```javascript
let name = "Raja";
let Name = "Kumar";
let NAME = "Developer";

console.log(name);
console.log(Name);
console.log(NAME);
```

**Output:**
```text
Raja
Kumar
Developer
```

These are three different variables.

**Function example:**
```javascript
function greet() {
    console.log("Hello");
}

greet();

// Greet(); would cause a ReferenceError
```

`greet` and `Greet` are different identifiers.

**Key point:** Pay attention to capitalization in variable names, function names, object properties, and built-in APIs.

---

# End of JavaScript Fundamentals — Topic 1
