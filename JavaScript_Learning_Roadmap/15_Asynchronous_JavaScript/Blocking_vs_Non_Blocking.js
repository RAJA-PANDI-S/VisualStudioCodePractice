// Topic: Blocking_vs_Non_Blocking
// Definition: Blocking vs Non Blocking is an important JavaScript concept.

console.log("Blocking_vs_Non_Blocking");

// Moderate Example
function demo(){
  const data=[1,2,3,4,5];
  const result=data.map(x=>x*2).filter(x=>x>4);
  console.log(result);
}
demo();
