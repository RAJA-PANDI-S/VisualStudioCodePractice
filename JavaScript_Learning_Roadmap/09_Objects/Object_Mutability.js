// Topic: Object_Mutability
// Definition: Object Mutability is an important JavaScript concept.

console.log("Object_Mutability");

// Moderate Example
function demo(){
  const data=[1,2,3,4,5];
  const result=data.map(x=>x*2).filter(x=>x>4);
  console.log(result);
}
demo();
