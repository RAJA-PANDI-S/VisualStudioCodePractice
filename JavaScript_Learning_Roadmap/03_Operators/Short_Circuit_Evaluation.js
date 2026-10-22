// Topic: Short_Circuit_Evaluation
// Definition: Short Circuit Evaluation is an important JavaScript concept.

console.log("Short_Circuit_Evaluation");

// Moderate Example
function demo(){
  const data=[1,2,3,4,5];
  const result=data.map(x=>x*2).filter(x=>x>4);
  console.log(result);
}
demo();
