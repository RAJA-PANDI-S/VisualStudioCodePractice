# =====================================================
# PYTHON COMPLETE CHEAT SHEET
# =====================================================

# =====================================================
# 1. PRINT
# =====================================================

print("Hello Python")


# =====================================================
# 2. VARIABLES
# =====================================================

name = "Varshini"
age = 25
salary = 50000.50
is_active = True

print(name)
print(age)
print(salary)
print(is_active)


# =====================================================
# 3. DATA TYPES
# =====================================================

print(type(name))
print(type(age))
print(type(salary))
print(type(is_active))


# =====================================================
# 4. TYPE CONVERSION
# =====================================================

num = "100"

converted_num = int(num)

print(converted_num)
print(type(converted_num))


# =====================================================
# 5. MULTIPLE ASSIGNMENT
# =====================================================

x, y, z = 10, 20, 30

print(x, y, z)


# =====================================================
# 6. STRINGS
# =====================================================

message = "Python Programming"

print(message)
print(message.upper())
print(message.lower())
print(message.replace("Python", "Java"))
print(len(message))


# =====================================================
# 7. STRING SLICING
# =====================================================

text = "Hello Python"

print(text[0])
print(text[0:5])
print(text[-1])


# =====================================================
# 8. F-STRING
# =====================================================

name = "Varshini"
age = 25

print(f"My name is {name} and age is {age}")


# =====================================================
# 9. LIST
# =====================================================

fruits = ["Apple", "Mango", "Orange"]

print(fruits)

fruits.append("Banana")

print(fruits)

print(fruits[0])


# =====================================================
# 10. LIST METHODS
# =====================================================

numbers = [1, 2, 3]

numbers.append(4)
numbers.insert(0, 0)
numbers.remove(2)

print(numbers)


# =====================================================
# 11. LIST COMPREHENSION
# =====================================================

squares = [num * num for num in range(1, 6)]

print(squares)


# =====================================================
# 12. TUPLE
# =====================================================

employee = (101, "Varshini")

print(employee)

# employee[0] = 10  # Error


# =====================================================
# 13. SET
# =====================================================

numbers_set = {1, 2, 3, 3, 4}

print(numbers_set)

numbers_set.add(5)

print(numbers_set)


# =====================================================
# 14. DICTIONARY
# =====================================================

student = {
    "id": 1,
    "name": "Varshini",
    "course": "Python"
}

print(student)

print(student["name"])

student["city"] = "Chennai"

print(student)


# =====================================================
# 15. OPERATORS
# =====================================================

a = 10
b = 3

print(a + b)
print(a - b)
print(a * b)
print(a / b)
print(a % b)
print(a ** b)
print(a // b)


# =====================================================
# 16. COMPARISON OPERATORS
# =====================================================

print(a > b)
print(a < b)
print(a == b)
print(a != b)


# =====================================================
# 17. LOGICAL OPERATORS
# =====================================================

print(True and False)
print(True or False)
print(not True)


# =====================================================
# 18. IF ELSE
# =====================================================

marks = 85

if marks >= 50:
    print("Pass")
else:
    print("Fail")


# =====================================================
# 19. ELIF
# =====================================================

score = 90

if score >= 90:
    print("Grade A")
elif score >= 75:
    print("Grade B")
else:
    print("Grade C")


# =====================================================
# 20. FOR LOOP
# =====================================================

for i in range(1, 6):
    print(i)


# =====================================================
# 21. WHILE LOOP
# =====================================================

count = 1

while count <= 3:
    print(count)
    count += 1


# =====================================================
# 22. BREAK
# =====================================================

for i in range(10):

    if i == 5:
        break

    print(i)


# =====================================================
# 23. CONTINUE
# =====================================================

for i in range(5):

    if i == 2:
        continue

    print(i)


# =====================================================
# 24. FUNCTIONS
# =====================================================

def greet():
    print("Hello Python")


greet()


# =====================================================
# 25. FUNCTION PARAMETERS
# =====================================================

def add(a, b):
    return a + b


print(add(10, 20))


# =====================================================
# 26. DEFAULT PARAMETERS
# =====================================================

def welcome(name="Guest"):
    print("Welcome", name)


welcome()
welcome("Varshini")


# =====================================================
# 27. KEYWORD ARGUMENTS
# =====================================================

def employee_info(id, name):
    print(id, name)


employee_info(name="Varshini", id=101)


# =====================================================
# 28. *ARGS
# =====================================================

def total(*numbers):

    print(sum(numbers))


total(10, 20, 30)


# =====================================================
# 29. **KWARGS
# =====================================================

def display(**data):

    print(data)


display(name="Varshini", city="Chennai")


# =====================================================
# 30. LAMBDA FUNCTION
# =====================================================

square = lambda x: x * x

print(square(5))


# =====================================================
# 31. MAP
# =====================================================

nums = [1, 2, 3]

result = list(map(lambda x: x * x, nums))

print(result)


# =====================================================
# 32. FILTER
# =====================================================

nums = [1, 2, 3, 4, 5, 6]

even_numbers = list(
    filter(lambda x: x % 2 == 0, nums)
)

print(even_numbers)


# =====================================================
# 33. REDUCE
# =====================================================

from functools import reduce

sum_value = reduce(
    lambda a, b: a + b,
    [1, 2, 3, 4]
)

print(sum_value)


# =====================================================
# 34. EXCEPTION HANDLING
# =====================================================

try:

    num = 10 / 2

    print(num)

except Exception as e:

    print(e)

finally:

    print("Finished")


# =====================================================
# 35. CUSTOM EXCEPTION
# =====================================================

try:

    age = -1

    if age < 0:
        raise ValueError("Age cannot be negative")

except ValueError as e:

    print(e)


# =====================================================
# 36. FILE WRITE
# =====================================================

with open("sample.txt", "w") as file:

    file.write("Hello Python")


# =====================================================
# 37. FILE READ
# =====================================================

with open("sample.txt", "r") as file:

    print(file.read())


# =====================================================
# 38. MODULE IMPORT
# =====================================================

import math

print(math.sqrt(25))


# =====================================================
# 39. RANDOM
# =====================================================

import random

print(random.randint(1, 5))


# =====================================================
# 40. DATE TIME
# =====================================================

from datetime import datetime

print(datetime.now())


# =====================================================
# 41. CLASS
# =====================================================

class Employee:

    def __init__(self, emp_id, name):

        self.emp_id = emp_id
        self.name = name

    def display(self):

        print(self.emp_id)
        print(self.name)


emp = Employee(101, "Varshini")

emp.display()


# =====================================================
# 42. INHERITANCE
# =====================================================

class Animal:

    def sound(self):
        print("Animal Sound")


class Dog(Animal):

    def bark(self):
        print("Bow Bow")


dog = Dog()

dog.sound()
dog.bark()


# =====================================================
# 43. ENCAPSULATION
# =====================================================

class BankAccount:

    def __init__(self):

        self.__balance = 1000

    def get_balance(self):

        return self.__balance


account = BankAccount()

print(account.get_balance())


# =====================================================
# 44. POLYMORPHISM
# =====================================================

class Cat:

    def sound(self):
        print("Meow")


class Cow:

    def sound(self):
        print("Moo")


animals = [Cat(), Cow()]

for animal in animals:
    animal.sound()


# =====================================================
# 45. ABSTRACT CLASS
# =====================================================

from abc import ABC, abstractmethod


class Shape(ABC):

    @abstractmethod
    def area(self):
        pass


class Circle(Shape):

    def area(self):
        return 3.14 * 5 * 5


circle = Circle()

print(circle.area())


# =====================================================
# 46. ITERATOR
# =====================================================

nums = iter([1, 2, 3])

print(next(nums))
print(next(nums))


# =====================================================
# 47. GENERATOR
# =====================================================

def generate_numbers():

    for i in range(3):
        yield i


for i in generate_numbers():
    print(i)


# =====================================================
# 48. DECORATOR
# =====================================================

def decorator_function(func):

    def wrapper():

        print("Before function")

        func()

        print("After function")

    return wrapper


@decorator_function
def hello():

    print("Hello")


hello()


# =====================================================
# 49. TYPE HINTS
# =====================================================

def multiply(a: int, b: int) -> int:

    return a * b


print(multiply(5, 10))


# =====================================================
# 50. DATACLASS
# =====================================================

from dataclasses import dataclass


@dataclass
class Student:

    id: int
    name: str


student = Student(
    1,
    "Varshini"
)

print(student)


# =====================================================
# 51. JSON
# =====================================================

import json

person = {
    "name": "Varshini",
    "age": 25
}

json_data = json.dumps(person)

print(json_data)

python_obj = json.loads(json_data)

print(python_obj)


# =====================================================
# 52. ENUM
# =====================================================

from enum import Enum


class Status(Enum):

    PENDING = 1
    APPROVED = 2
    REJECTED = 3


print(Status.APPROVED)


# =====================================================
# 53. ZIP
# =====================================================

names = ["Varshini", "John"]
scores = [90, 80]

for name, score in zip(names, scores):
    print(name, score)


# =====================================================
# 54. ENUMERATE
# =====================================================

fruits = ["Apple", "Mango"]

for index, value in enumerate(fruits):
    print(index, value)


# =====================================================
# 55. SET COMPREHENSION
# =====================================================

square_set = {
    x * x
    for x in range(5)
}

print(square_set)


# =====================================================
# 56. DICTIONARY COMPREHENSION
# =====================================================

square_dict = {
    x: x * x
    for x in range(5)
}

print(square_dict)


# =====================================================
# 57. ASYNC / AWAIT
# =====================================================

import asyncio


async def fetch_data():

    return "Data Received"


async def main():

    result = await fetch_data()

    print(result)

# asyncio.run(main())  # Uncomment to run


# =====================================================
# 58. CONTEXT MANAGER
# =====================================================

with open("sample.txt", "r") as file:

    data = file.read()

    print(data)


# =====================================================
# 59. GLOBAL VARIABLE
# =====================================================

counter = 0


def increment():

    global counter

    counter += 1


increment()

print(counter)


# =====================================================
# 60. PASS STATEMENT
# =====================================================

def future_function():
    pass


# =====================================================
# END OF PYTHON CHEAT SHEET
# =====================================================


"""

Topics Covered
Variables
Data Types
Strings
Lists
Tuples
Sets
Dictionaries
Operators
If / Else
Loops
Functions
Lambda
*args
**kwargs
List/Set/Dict Comprehensions
Exceptions
File Handling
Modules
OOP
Inheritance
Encapsulation
Polymorphism
Abstraction
Iterators
Generators
Decorators
Type Hints
Dataclasses
JSON
Enum
Zip
Enumerate
Async/Await
Context Managers
Global Variables

This covers roughly 90-95% of Python concepts commonly used in real projects and interviews.

"""
