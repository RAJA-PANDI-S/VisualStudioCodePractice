// Topic: async_await
// Definition:
// Async Await is an important JavaScript/TypeScript concept used heavily in Playwright automation.

console.log("--- async_await demo ---");

// Moderate Example
async function getData(){ return new Promise(r=>setTimeout(()=>r("Done"),100)); }
getData().then(console.log);
