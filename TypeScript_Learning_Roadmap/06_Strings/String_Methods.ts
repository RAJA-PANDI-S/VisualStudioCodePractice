/**
 * Topic: String_Methods
 * Definition: String Methods is an important TypeScript concept used in modern application and Playwright development.
 */

console.log("String_Methods");

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
