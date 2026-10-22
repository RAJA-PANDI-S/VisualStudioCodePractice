// Topic: Variable_Hoisting
// Definition: Variable Hoisting is an important JavaScript concept.

console.log("Variable_Hoisting");

// Moderate Example
function demo(){
  const data=[1,2,3,4,5];
  const result=data.map(x=>x*2).filter(x=>x>4);
  console.log(result);
}
demo();
