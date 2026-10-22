// Topic: promises
// Definition:
// Promises is an important JavaScript/TypeScript concept used heavily in Playwright automation.

console.log("--- promises demo ---");

// Moderate Example
const p=new Promise(res=>res(100)); p.then(v=>console.log(v));
