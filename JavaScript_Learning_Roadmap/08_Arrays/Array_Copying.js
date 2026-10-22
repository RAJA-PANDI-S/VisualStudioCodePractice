// Topic: Array_Copying
// Definition: Array Copying is an important JavaScript concept.

console.log("Array_Copying");

// Moderate Example
function demo(){
  const data=[1,2,3,4,5];
  const result=data.map(x=>x*2).filter(x=>x>4);
  console.log(result);
}
demo();
