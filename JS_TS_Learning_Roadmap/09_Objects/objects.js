// ============================================================================
// 9. OBJECTS IN JAVASCRIPT
// Each topic contains:
// 1. Definition
// 2. Sample Program
// 3. Simple Explanation
// ============================================================================

/*
-----------------------------------------------------------------------------
1. Object Fundamentals
-----------------------------------------------------------------------------
Definition:
Objects store data as key-value pairs.

Example:
*/
let person = {
  name: "John",
  age: 25
};

console.log(person);

/*
Explanation:
Objects group related information together.
*/


/*
-----------------------------------------------------------------------------
2. Object Literals
-----------------------------------------------------------------------------
Definition:
The simplest way to create objects using {}.

Example:
*/
let car = {
  brand: "Toyota",
  model: "Camry"
};

console.log(car);

/*
Explanation:
Object literals are the most commonly used method.
*/


/*
-----------------------------------------------------------------------------
3. Object Constructors
-----------------------------------------------------------------------------
Definition:
Objects can be created using constructor functions.

Example:
*/
function User(name) {
  this.name = name;
}

let user1 = new User("David");

console.log(user1);

/*
Explanation:
new creates an object from a constructor.
*/


/*
-----------------------------------------------------------------------------
4. Object Properties
-----------------------------------------------------------------------------
Definition:
Properties are key-value pairs inside an object.

Example:
*/
let student = {
  name: "Sam",
  age: 20
};

console.log(student.name);

/*
Explanation:
name and age are properties.
*/


/*
-----------------------------------------------------------------------------
5. Property Keys
-----------------------------------------------------------------------------
Definition:
Keys identify property names within an object.

Example:
*/
let obj = {
  firstName: "John"
};

console.log(Object.keys(obj));

/*
Explanation:
firstName is the property key.
*/


/*
-----------------------------------------------------------------------------
6. Property Values
-----------------------------------------------------------------------------
Definition:
Values are the data stored in properties.

Example:
*/
let employee = {
  name: "Alex"
};

console.log(employee.name);

/*
Explanation:
Alex is the property value.
*/


/*
-----------------------------------------------------------------------------
7. Dot Notation
-----------------------------------------------------------------------------
Definition:
Access object properties using a dot (.).

Example:
*/
let person1 = {
  name: "John"
};

console.log(person1.name);

/*
Explanation:
Most common way to access properties.
*/


/*
-----------------------------------------------------------------------------
8. Bracket Notation
-----------------------------------------------------------------------------
Definition:
Access properties using square brackets.

Example:
*/
let person2 = {
  name: "John"
};

console.log(person2["name"]);

/*
Explanation:
Useful when property names are dynamic.
*/


/*
-----------------------------------------------------------------------------
9. Property Access
-----------------------------------------------------------------------------
Definition:
Reading values from object properties.

Example:
*/
const book = {
  title: "JavaScript"
};

console.log(book.title);

/*
Explanation:
Property access retrieves stored values.
*/


/*
-----------------------------------------------------------------------------
10. Property Assignment
-----------------------------------------------------------------------------
Definition:
Adding or changing property values.

Example:
*/
let user = {
  name: "John"
};

user.age = 25;

console.log(user);

/*
Explanation:
New properties can be added anytime.
*/


/*
-----------------------------------------------------------------------------
11. Computed Property Names
-----------------------------------------------------------------------------
Definition:
Property names can be created dynamically.

Example:
*/
let key = "email";

let account = {
  [key]: "test@gmail.com"
};

console.log(account);

/*
Explanation:
Property name comes from variable value.
*/


/*
-----------------------------------------------------------------------------
12. Property Shorthand
-----------------------------------------------------------------------------
Definition:
If variable name and property name are same, shorthand can be used.

Example:
*/
let name = "John";
let age = 25;

let person3 = { name, age };

console.log(person3);

/*
Explanation:
No need to write name:name.
*/


/*
-----------------------------------------------------------------------------
13. Method Shorthand
-----------------------------------------------------------------------------
Definition:
Short syntax for defining object methods.

Example:
*/
let calculator = {
  add(a, b) {
    return a + b;
  }
};

console.log(calculator.add(5, 3));

/*
Explanation:
Cleaner way to create methods.
*/


/*
-----------------------------------------------------------------------------
14. Nested Objects
-----------------------------------------------------------------------------
Definition:
Objects inside other objects.

Example:
*/
let employee1 = {
  name: "John",
  address: {
    city: "Chennai"
  }
};

console.log(employee1.address.city);

/*
Explanation:
Access nested properties with multiple dots.
*/


/*
-----------------------------------------------------------------------------
15. Object References
-----------------------------------------------------------------------------
Definition:
Objects are assigned by reference.

Example:
*/
let obj1 = { name: "John" };

let obj2 = obj1;

obj2.name = "David";

console.log(obj1.name);

/*
Explanation:
Both variables point to same object.
*/


/*
-----------------------------------------------------------------------------
16. Object Mutability
-----------------------------------------------------------------------------
Definition:
Object contents can be modified after creation.

Example:
*/
let product = {
  name: "Laptop"
};

product.name = "Desktop";

console.log(product);

/*
Explanation:
Objects are mutable by default.
*/


/*
-----------------------------------------------------------------------------
17. Object Destructuring
-----------------------------------------------------------------------------
Definition:
Extract properties into variables.

Example:
*/
let userInfo = {
  username: "John",
  city: "Delhi"
};

let { username, city } = userInfo;

console.log(username, city);

/*
Explanation:
Creates variables from object properties.
*/


/*
-----------------------------------------------------------------------------
18. Object Spread
-----------------------------------------------------------------------------
Definition:
Copies or merges object properties.

Example:
*/
let objA = { a: 1 };
let objB = { ...objA, b: 2 };

console.log(objB);

/*
Explanation:
Spread operator copies properties.
*/


/*
-----------------------------------------------------------------------------
19. Object Rest Properties
-----------------------------------------------------------------------------
Definition:
Collect remaining properties into a new object.

Example:
*/
let person4 = {
  name: "John",
  age: 25,
  city: "Chennai"
};

let { name: personName, ...rest } = person4;

console.log(rest);

/*
Explanation:
Stores remaining properties in rest.
*/


/*
-----------------------------------------------------------------------------
20. Property Existence Checks
-----------------------------------------------------------------------------
Definition:
Check whether a property exists.

Example:
*/
let vehicle = {
  type: "Car"
};

console.log("type" in vehicle);

/*
Explanation:
Returns true if property exists.
*/


/*
-----------------------------------------------------------------------------
21. in Operator
-----------------------------------------------------------------------------
Definition:
Checks if property exists in object.

Example:
*/
let userData = {
  id: 1
};

console.log("id" in userData);

/*
Explanation:
Returns true.
*/


/*
-----------------------------------------------------------------------------
22. Object.hasOwn()
-----------------------------------------------------------------------------
Definition:
Checks whether object owns a property directly.

Example:
*/
let person5 = {
  name: "John"
};

console.log(Object.hasOwn(person5, "name"));

/*
Explanationns true for own properties.
*/


/*
-----------------------------------------------------------------------------
23. Object.keys()
-----------------------------------------------------------------------------
Definition:
Returns all object keys.

Example:
*/
let details = {
  name: "John",
  age: 25
};

console.log(Object.keys(details));

/*
Explanation:
Returns ["name","age"].
*/


/*
-----------------------------------------------------------------------------
24. Object.values()
-----------------------------------------------------------------------------
Definition:
Returns all object values.

Example:
*/
console.log(Object.values(details));

/*
Explanation:
Returns ["John",25].
*/


/*
-----------------------------------------------------------------------------
25. Object.entries()
-----------------------------------------------------------------------------
Definition:
Returns key-value pairs as arrays.

Example:
*/
console.log(Object.entries(details));

/*
Explanation:
Useful for looping.
*/


/*
-----------------------------------------------------------------------------
26. Object.fromEntries()
-----------------------------------------------------------------------------
Definition:
Creates an object from key-value pairs.

Example:
*/
let result = Object.fromEntries([
  ["name", "John"],
  ["age", 25]
]);

console.log(result);

/*
Explanation:
Converts entries into an object.
*/


/*
-----------------------------------------------------------------------------
27. Object.assign()
-----------------------------------------------------------------------------
Definition:
Copies properties from source objects.

Example:
*/
let target = { a: 1 };

Object.assign(target, { b: 2 });

console.log(target);

/*
Explanation:
Adds properties to target object.
*/


/*
-----------------------------------------------------------------------------
28. Object.create()
-----------------------------------------------------------------------------
Definition:
Creates an object using another object as prototype.

Example:
*/
let prototypeObj = {
  greet() {
    console.log("Hello");
  }
};

let child = Object.create(prototypeObj);

child.greet();

/*
Explanation:
child inherits prototypeObj methods.
*/


/*
-----------------------------------------------------------------------------
29. Object.freeze()
-----------------------------------------------------------------------------
Definition:
Prevents modification of object.

Example:
*/
let settings = {
  theme: "Dark"
};

Object.freeze(settings);

// settings.theme = "Light";

console.log(settings);

/*
Explanation:
Properties cannot be changed.
*/


/*
-----------------------------------------------------------------------------
30. Object.seal()
-----------------------------------------------------------------------------
Definition:
Prevents adding or deleting properties.

Example:
*/
let account1 = {
  name: "John"
};

Object.seal(account1);

account1.name = "David";

console.log(account1);

/*
Explanation:
Existing values can still be updated.
*/


/*
-----------------------------------------------------------------------------
31. Object.preventExtensions()
-----------------------------------------------------------------------------
Definition:
Prevents adding new properties.

Example:
*/
let data1 = {
  name: "John"
};

Object.preventExtensions(data1);

// data1.age = 30;

console.log(data1);

/*
Explanation:
New properties cannot be added.
*/


/*
-----------------------------------------------------------------------------
32. Object.is()
-----------------------------------------------------------------------------
Definition:
Compares two values accurately.

Example:
*/
console.log(Object.is(5, 5));
console.log(Object.is(NaN, NaN));

/*
Explanation:
Returns true for identical values.
*/


/*
-----------------------------------------------------------------------------
33. Object.getOwnPropertyNames()
-----------------------------------------------------------------------------
Definition:
Returns all own property names.

Example:
*/
let employee2 = {
  id: 1,
  name: "John"
};

console.log(Object.getOwnPropertyNames(employee2));

/*
Explanation:
Returns all property names.
*/


/*
-----------------------------------------------------------------------------
34. Object.getOwnPropertySymbols()
-----------------------------------------------------------------------------
Definition:
Returns symbol properties.

Example:

If you want to use a Symbol as the property key, put the symbol inside square brackets:
*/

let id = Symbol("id");

let objSymbol = {
    [id]: 100
};

console.log(objSymbol);
console.log(objSymbol[id]); // 100

// Get symbol properties
console.log(Object.getOwnPropertySymbols(objSymbol)); // [Symbol(id)]

/*
🔍 Explanation
- Symbol("id") creates a unique symbol.
- [id]: 100 uses the symbol stored in id as the object's property key.
- objSymbol[id] accesses the value associated with that symbol.
- Object.getOwnPropertySymbols(objSymbol) returns an array containing the object's own symbol properties.
Remember: When using a variable or a Symbol as a computed property key in an object literal, use square brackets ([]) and a colon (:) to assign its value.
*/

let obj12 = {
    name: "Raja",
    age: 25,
    [id]: 100
};

console.log(Object.getOwnPropertySymbols(obj12)); // [Symbol(id)]

/*
Explanation:
Returns symbol keys.
*/


/*
-----------------------------------------------------------------------------
35. Property Descriptors
-----------------------------------------------------------------------------
Definition:
Provide metadata about object properties.

Example:
*/
let person6 = {
  name: "John"
};

console.log(
  Object.getOwnPropertyDescriptor(person6, "name")
);

/*
Explanation:
Shows writable, enumerable, configurable info.
*/


/*
-----------------------------------------------------------------------------
36. Getters and Setters
-----------------------------------------------------------------------------
Definition:
Special methods for getting and setting values.

Example:
*/
let userProfile = {
  firstName: "John",
  lastName: "Doe",

  get fullName() {
    return this.firstName + " " + this.lastName;
  },

  set fullName(value) {
    [this.firstName, this.lastName] = value.split(" ");
  }
};

console.log(userProfile.fullName);

userProfile.fullName = "David Smith";

console.log(userProfile.fullName);

/*
Explanation:
Getter reads value, setter updates value.
*/


/*
-----------------------------------------------------------------------------
37. Computed Properties
-----------------------------------------------------------------------------
Definition:
Property names generated using expressions.

Example:
*/
let field = "score";

let student1 = {
  [field]: 95
};

console.log(student1);

/*
Explanation:
Expression result becomes property name.
*/


/*
-----------------------------------------------------------------------------
38. Property Enumerability
-----------------------------------------------------------------------------
Definition:
Determines whether property appears in loops.

Example:
*/
let object1 = {};

Object.defineProperty(object1, "hidden", {
  value: "Secret",
  enumerable: false
});

console.log(Object.keys(object1));

/*
Explanation:
hidden property does not appear.
*/


/*
-----------------------------------------------------------------------------
39. Own vs Inherited Properties
-----------------------------------------------------------------------------
Definition:
Own properties belong directly to object.
Inherited properties come from prototype.

Example:
*/
let parent = {
  greet() {}
};

let childObj = Object.create(parent);

childObj.name = "John";

console.log(childObj.hasOwnProperty("name"));
console.log(childObj.hasOwnProperty("greet"));

/*
Explanation:
name is own property.
greet is inherited.
*/


/*
-----------------------------------------------------------------------------
40. Shallow vs Deep Cloning
-----------------------------------------------------------------------------
Definition:
Shallow cloning copies first level only.
Deep cloning copies nested objects too.

Example:
*/
let original = {
  info: {
    age: 25
  }
};

let shallowClone = { ...original };

let deepClone =
  JSON.parse(JSON.stringify(original));

console.log(shallowClone);
console.log(deepClone);

/*
Explanation:
Deep clone creates independent nested objects.
*/


/*
-----------------------------------------------------------------------------
41. Optional Chaining with Objects
-----------------------------------------------------------------------------
Definition:
Safely accesses nested properties without errors.

Example:
*/
let customer = {
  name: "John"
};

console.log(customer.address?.city);

/*
Explanation:
Returns undefined instead of throwing an error
when address does not exist.
*/


// ============================================================================
// END OF OBJECTS
// ============================================================================