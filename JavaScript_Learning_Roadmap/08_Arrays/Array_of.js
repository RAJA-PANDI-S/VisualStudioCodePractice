// Topic: Array_of
// Definition: Array of is an important JavaScript concept.

console.log("Array_of");

// Moderate Example
function demo(){
  const data=[1,2,3,4,5];
  const result=data.map(x=>x*2).filter(x=>x>4);
  console.log(result);
}
demo();
