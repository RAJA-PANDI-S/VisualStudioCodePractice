/**
 * Topic: History_and_Evolution
 * Definition: History and Evolution is an important TypeScript concept used in modern application and Playwright development.
 */

console.log("History_and_Evolution");

interface User {
  id:number;
  name:string;
}

function processUsers(users: User[]): User[] {
  return users.filter(u => u.id > 1);
}

const users: User[] = [
  { id:1, name:'John' },
  { id:2, name:'Alice' },
  { id:3, name:'Bob' }
];

console.log(processUsers(users));
