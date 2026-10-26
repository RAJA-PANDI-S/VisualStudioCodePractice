// ============================================================================
// 15. ASYNCHRONOUS JAVASCRIPT
// Each Topic Contains:
// 1. Definition
// 2. Sample Program
// 3. Simple Explanation
// ============================================================================

/*
-----------------------------------------------------------------------------
1. Synchronous vs Asynchronous Programming
-----------------------------------------------------------------------------
Definition:
Synchronous code executes line by line.
Asynchronous code allows other tasks to run while waiting.

Example:
*/
console.log("Start");

setTimeout(() => {
  console.log("Async Task");
}, 1000);

console.log("End");

/*
Explanation:
Output:
Start
End
Async Task

Async tasks do not block execution.
*/


/*
-----------------------------------------------------------------------------
2. Blocking vs Non-Blocking Operations
-----------------------------------------------------------------------------
Definition:
Blocking operations stop execution until completed.
Non-blocking operations let other code execute.

Example:
*/
setTimeout(() => {
  console.log("Non-Blocking");
}, 1000);

console.log("Running");

/*
Explanation:
JavaScript continues executing while waiting.
*/


/*
-----------------------------------------------------------------------------
3. Callbacks
-----------------------------------------------------------------------------
Definition:
A callback is a function passed to another function.

Example:
*/
function process(callback) {
  callback();
}

process(() => console.log("Done"));

/*
Explanation:
The callback executes later.
*/


/*
-----------------------------------------------------------------------------
4. Callback Functions
-----------------------------------------------------------------------------
Definition:
Functions passed as arguments and executed later.

Example:
*/
function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

greet("John", () => console.log("Welcome"));

/*
Explanation:
Callback runs after greeting.
*/


/*
-----------------------------------------------------------------------------
5. Callback Hell
-----------------------------------------------------------------------------
Definition:
Multiple nested callbacks make code difficult to read.

Example:
*/
setTimeout(() => {
  console.log("Step 1");

  setTimeout(() => {
    console.log("Step 2");

    setTimeout(() => {
      console.log("Step 3");
    }, 1000);

  }, 1000);

}, 1000);

/*
Explanation:
Deep nesting is called Callback Hell.
*/


/*
-----------------------------------------------------------------------------
6. Inversion of Control
-----------------------------------------------------------------------------
Definition:
You hand control of execution to another function.

Example:
*/
function fetchData(callback) {
  callback("Data Received");
}

fetchData(data => console.log(data));

/*
Explanation:
Callback execution is controlled externally.
*/


/*
-----------------------------------------------------------------------------
7. Promises
-----------------------------------------------------------------------------
Definition:
A Promise represents future completion or failure of an operation.

Example:
*/
const promise = new Promise((resolve) => {
  resolve("Success");
});

promise.then(result => console.log(result));

/*
Explanation:
Promises simplify async programming.
*/


/*
-----------------------------------------------------------------------------
8. Promise States
-----------------------------------------------------------------------------
Definition:
A Promise has three states:
Pending, Fulfilled, Rejected.

Example:
*/
const p = new Promise((resolve) => {
  resolve("Fulfilled");
});

/*
Explanation:
Promise starts pending and settles later.
*/


/*
-----------------------------------------------------------------------------
9. Promise Chaining
-----------------------------------------------------------------------------
Definition:
Multiple .then() methods can be chained.

Example:
*/
Promise.resolve(5)
  .then(num => num * 2)
  .then(num => console.log(num));

/*
Explanation:
Each .then() receives previous result.
*/


/*
-----------------------------------------------------------------------------
10. Promise Resolution and Rejection
-----------------------------------------------------------------------------
Definition:
resolve() completes successfully.
reject() completes with error.

Example:
*/
new Promise((resolve, reject) => {
  reject("Failed");
})
.catch(error => console.log(error));

/*
Explanation:
Promise can either resolve or reject.
*/


/*
-----------------------------------------------------------------------------
11. .then()
-----------------------------------------------------------------------------
Definition:
Handles successful promise completion.

Example:
*/
Promise.resolve("Done")
  .then(result => console.log(result));

/*
Explanation:
Runs when promise resolves.
*/


/*
-----------------------------------------------------------------------------
12. .catch()
-----------------------------------------------------------------------------
Definition:
Handles promise errors.

Example:
*/
Promise.reject("Error")
  .catch(error => console.log(error));

/*
Explanation:
Runs when promise rejects.
*/


/*
-----------------------------------------------------------------------------
13. .finally()
-----------------------------------------------------------------------------
Definition:
Runs regardless of success or failure.

Example:
*/
Promise.resolve("Success")
  .finally(() => console.log("Finished"));

/*
Explanation:
Used for cleanup tasks.
*/


/*
-----------------------------------------------------------------------------
14. Promise.resolve()
-----------------------------------------------------------------------------
Definition:
Creates an already resolved promise.

Example:
*/
Promise.resolve("Hello")
  .then(console.log);

/*
Explanation:
Immediately resolves a value.
*/


/*
-----------------------------------------------------------------------------
15. Promise.reject()
-----------------------------------------------------------------------------
Definition:
Creates an already rejected promise.

Example:
*/
Promise.reject("Error")
  .catch(console.log);

/*
Explanation:
Immediately rejects a value.
*/


/*
-----------------------------------------------------------------------------
16. Promise.all()
-----------------------------------------------------------------------------
Definition:
Waits for all promises to succeed.

Example:
*/
Promise.all([
  Promise.resolve(1),
  Promise.resolve(2)
])
.then(console.log);

/*
Explanation:
Returns all results together.
*/


/*
-----------------------------------------------------------------------------
17. Promise.allSettled()
-----------------------------------------------------------------------------
Definition:
Waits for all promises regardless of outcome.

Example:
*/
Promise.allSettled([
  Promise.resolve("Success"),
  Promise.reject("Failure")
])
.then(console.log);

/*
Explanation:
Provides status of every promise.
*/


/*
-----------------------------------------------------------------------------
18. Promise.race()
-----------------------------------------------------------------------------
Definition:
Returns first settled promise.

Example:
*/
Promise.race([
  Promise.resolve("Winner"),
  Promise.resolve("Second")
])
.then(console.log);

/*
Explanation:
First completed promise wins.
*/


/*
-----------------------------------------------------------------------------
19. Promise.any()
-----------------------------------------------------------------------------
Definition:
Returns first fulfilled promise.

Example:
*/
Promise.any([
  Promise.reject("Fail"),
  Promise.resolve("Success")
])
.then(console.log);

/*
Explanation:
Ignores rejected promises until one succeeds.
*/


/*
-----------------------------------------------------------------------------
20. async Functions
-----------------------------------------------------------------------------
Definition:
Functions declared with async return promises.

Example:
*/
async function getData() {
  return "Data";
}

getData().then(console.log);

/*
Explanation:
async automatically returns a Promise.
*/


/*
-----------------------------------------------------------------------------
21. await Keyword
-----------------------------------------------------------------------------
Definition:
Pauses async function until promise resolves.

Example:
*/
async function loadData() {
  const result = await Promise.resolve("Loaded");

  console.log(result);
}

loadData();

/*
Explanation:
Makes async code look synchronous.
*/


/*
-----------------------------------------------------------------------------
22. Error Handling in Async Functions
-----------------------------------------------------------------------------
Definition:
Use try...catch inside async functions.

Example:
*/
async function fetchData() {

  try {
    await Promise.reject("Error");
  } catch (err) {
    console.log(err);
  }
}

fetchData();

/*
Explanation:
Handles async errors safely.
*/


/*
-----------------------------------------------------------------------------
23. Sequential vs Parallel Execution
-----------------------------------------------------------------------------
Definition:
Sequential executes one after another.
Parallel executes together.

Example:
*/
async function parallel() {
  const [a, b] = await Promise.all([
    Promise.resolve("A"),
    Promise.resolve("B")
  ]);

  console.log(a, b);
}

/*
Explanation:
Both promises run simultaneously.
*/


/*
-----------------------------------------------------------------------------
24. Concurrent vs Parallel Programming
-----------------------------------------------------------------------------
Definition:
Concurrent tasks progress together.
Parallel tasks run at the same time.

Example:
*/
Promise.all([
  Promise.resolve("Task 1"),
  Promise.resolve("Task 2")
]).then(console.log);

/*
Explanation:
JavaScript supports concurrency via Event Loop.
*/


/*
-----------------------------------------------------------------------------
25. Top-Level await
-----------------------------------------------------------------------------
Definition:
Allows await outside functions in modules.

Example:
*/
const result = await Promise.resolve("Ready");

console.log(result);

/*
Explanation:
Works only in ES Modules.
*/


/*
-----------------------------------------------------------------------------
26. Event Loop
-----------------------------------------------------------------------------
Definition:
Coordinates execution of async tasks.

Example:
*/
console.log("Start");

setTimeout(() => console.log("Timer"), 0);

console.log("End");

/*
Explanation:
Event Loop executes async tasks later.
*/


/*
-----------------------------------------------------------------------------
27. Call Stack
-----------------------------------------------------------------------------
Definition:
Tracks currently executing functions.

Example:
*/
function one() { two(); }
function two() { console.log("Running"); }

one();

/*
Explanation:
Functions enter and leave the stack.
*/


/*
-----------------------------------------------------------------------------
28. Task Queue
-----------------------------------------------------------------------------
Definition:
Stores asynchronous callbacks awaiting execution.

Example:
*/
setTimeout(() => {
  console.log("Queue Task");
}, 0);

/*
Explanation:
Callback enters task queue.
*/


/*
-----------------------------------------------------------------------------
29. Microtask Queue
-----------------------------------------------------------------------------
Definition:
Stores Promise callbacks.

Example:
*/
Promise.resolve()
  .then(() => console.log("Microtask"));

/*
Explanation:
Processed before task queue.
*/


/*
-----------------------------------------------------------------------------
30. Macrotasks
-----------------------------------------------------------------------------
Definition:
Tasks such as setTimeout and setInterval.

Example:
*/
setTimeout(() => {
  console.log("Macrotask");
}, 0);

/*
Explanation:
Executed after microtasks.
*/


/*
-----------------------------------------------------------------------------
31. Rendering Queue
-----------------------------------------------------------------------------
Definition:
Browser rendering updates UI when call stack becomes empty.

Example:
*/
document.body.style.color = "red";

/*
Explanation:
Browser schedules rendering.
*/


/*
-----------------------------------------------------------------------------
32. Execution Order
-----------------------------------------------------------------------------
Definition:
JavaScript follows Call Stack → Microtasks → Macrotasks.

Example:
*/
console.log("1");

Promise.resolve().then(() => console.log("2"));

setTimeout(() => console.log("3"));

console.log("4");

/*
Explanation:
Output:
1
4
2
3
*/


/*
-----------------------------------------------------------------------------
33. Timers
-----------------------------------------------------------------------------
Definition:
Functions for delayed and repeated execution.

Example:
*/
setTimeout(() => {
  console.log("Timer");
}, 1000);

/*
Explanation:
Timers schedule future tasks.
*/


/*
-----------------------------------------------------------------------------
34. setTimeout()
-----------------------------------------------------------------------------
Definition:
Executes once after delay.

Example:
*/
setTimeout(() => {
  console.log("Executed");
}, 1000);

/*
Explanation:
Runs one time.
*/


/*
-----------------------------------------------------------------------------
35. setInterval()
-----------------------------------------------------------------------------
Definition:
Executes repeatedly.

Example:
*/
const id = setInterval(() => {
  console.log("Running");
}, 1000);

/*
Explanation:
Runs until stopped.
*/


/*
-----------------------------------------------------------------------------
36. clearTimeout()
-----------------------------------------------------------------------------
Definition:
Cancels a timeout.

Example:
*/
const timeoutId = setTimeout(() => {
  console.log("Hello");
}, 2000);

clearTimeout(timeoutId);

/*
Explanation:
Prevents timeout execution.
*/


/*
-----------------------------------------------------------------------------
37. clearInterval()
-----------------------------------------------------------------------------
Definition:
Stops an interval.

Example:
*/
const intervalId = setInterval(() => {

}, 1000);

clearInterval(intervalId);

/*
Explanation:
Stops repeated execution.
*/


/*
-----------------------------------------------------------------------------
38. queueMicrotask()
-----------------------------------------------------------------------------
Definition:
Adds a task to the microtask queue.

Example:
*/
queueMicrotask(() => {
  console.log("Microtask");
});

/*
Explanation:
Runs before macrotasks.
*/


/*
-----------------------------------------------------------------------------
39. requestAnimationFrame()
-----------------------------------------------------------------------------
Definition:
Schedules animation before next repaint.

Example:
*/
requestAnimationFrame(() => {
  console.log("Animation Frame");
});

/*
Explanation:
Used for smooth animations.
*/


/*
-----------------------------------------------------------------------------
40. requestIdleCallback()
-----------------------------------------------------------------------------
Definition:
Executes when browser is idle.

Example:
*/
requestIdleCallback(() => {
  console.log("Idle Task");
});

/*
Explanation:
Used for low-priority work.
*/


/*
-----------------------------------------------------------------------------
41. AbortController
-----------------------------------------------------------------------------
Definition:
Cancels asynchronous operations.

Example:
*/
const controller = new AbortController();

controller.abort();

/*
Explanation:
Useful for cancelling fetch requests.
*/


/*
-----------------------------------------------------------------------------
42. Cancellation Patterns
-----------------------------------------------------------------------------
Definition:
Techniques for stopping async operations.

Example:
*/
const controller2 = new AbortController();

setTimeout(() => {
  controller2.abort();
}, 1000);

/*
Explanation:
Prevents unnecessary work.
*/


/*
-----------------------------------------------------------------------------
43. Async Iterators
-----------------------------------------------------------------------------
Definition:
Iterators that return Promises.

Example:
*/
const asyncIterable = {
  async *[Symbol.asyncIterator]() {
    yield 1;
    yield 2;
  }
};

/*
Explanation:
Produces async values.
*/


/*
-----------------------------------------------------------------------------
44. Async Generators
-----------------------------------------------------------------------------
Definition:
Generator functions using async and yield.

Example:
*/
async function* generator() {
  yield "A";
  yield "B";
}

/*
Explanation:
Combines async functions and generators.
*/


/*
-----------------------------------------------------------------------------
45. for await...of
-----------------------------------------------------------------------------
Definition:
Loops through async iterables.

Example:
*/
async function run() {

  for await (const value of generator()) {
    console.log(value);
  }
}

run();

/*
Explanation:
Waits for async values automatically.
*/


/*
-----------------------------------------------------------------------------
46. Race Conditions
-----------------------------------------------------------------------------
Definition:
Occur when multiple async operations affect shared data.

Example:
*/
let balance = 100;

/*
Two async operations changing balance
may produce unexpected results.
*/

/*
Explanation:
Execution timing affects outcome.
*/


/*
-----------------------------------------------------------------------------
47. Promise Combinators
-----------------------------------------------------------------------------
Definition:
Methods that combine multiple promises.

Example:
*/
Promise.all([]);
Promise.race([]);
Promise.any([]);
Promise.allSettled([]);

/*
Explanation:
Manage multiple async operations together.
*/


/*
-----------------------------------------------------------------------------
48. Concurrency Control
-----------------------------------------------------------------------------
Definition:
Limits the number of simultaneously running tasks.

Example:
*/
async function processTasks(tasks) {

  for (const task of tasks) {
    await task();
  }
}

/*
Explanation:
Controls resource usage and prevents overload.
*/


// ============================================================================
// QUICK SUMMARY
// ============================================================================

/*
Callbacks          -> Old async technique
Promises           -> Better async handling
async/await        -> Simplified async code
Event Loop         -> Manages async execution
Call Stack         -> Tracks function calls
Microtask Queue    -> Promise callbacks
Task Queue         -> Timer callbacks
Promise.all()      -> Wait for all promises
Promise.race()     -> First completed promise
AbortController    -> Cancel async tasks
Async Generator    -> Yield async values
for await...of     -> Iterate async data
*/


// ============================================================================
// END OF ASYNCHRONOUS JAVASCRIPT
// ============================================================================