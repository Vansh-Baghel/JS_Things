# Motivation

![motivation](./Resources_imgs%2Cpdfs/Motivation.jpeg)

- You will feel like the things are difficult to code when you start applyin your own logic.
- Once you exit the tutorial & code on your own , you will feel like coding is too tough but its completely normal .
- You will never completely learn the web dev because its too vast field and good professionals always admit that they dont know full web dev.
- So just keep going, get into many errors, keep the mindset to solve them, get frustrated and uncomfortable behind a single file of code and solve it but dont stop your journey and feel that you are not made for coding!!

---

---

![type_of_JS](./Resources_imgs%2Cpdfs/DTL.jpeg)

---

---

# DOM (Document Object Model)

- Document :- HTML

  Object :- All the elements/tags which we use.

  Model :- The whole structure formed through combination of html, css and js.

# Elements

## document.querySelector('elementName')

- `document` is the tag through which we link the js to document (html) .
- `querySelector` selects the element which comes first in your document. You can also call class through querySelector.
  `querySelector('.vansh')`

## prompt

- Used to popup the information related to input text and to get the input.

* Always returns string even if u add any number.

# Variables

## Rules of variables

- Can contain :- `_` and `'$'`
- Can contain number but only in between and not in the start.

## Cases of variables

### Camel Case

- Start letter will be lower and any 1 letter must be capital in between.

### Pascal Case

- Start letter must be capital.

## Types to describe them

![rules](./Resources_imgs%2Cpdfs/Variables.jpeg)

# Operators

[Types of Operators in Detail](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)

`==` & `===`

- The difference between both of them is that '==' cannot compare string and int while '===' can identify the difference between them.
  > x = 3 == '3' ------ True  
  >  x = 3 === '3' ------ False

# Way to write the input text in output

1. Write its variable with + signs to concatinate the sentence.

```CSS
a + " is a good " + b
```

2. Use $ sign with back ticks.

```CSS
(`${variableName} is a good boy`)
```

# Loops

1. For
2. While
3. Do-while

4. for..in

- `for..in` is used to run a loop inside any object to access the value from key word. (key:value pair is used here).
- `for..in` iterates over all enumerable property keys of an object

```JS
console.log(key , objectName[key])
This will print 'key value' of that object.
```

5. for..of

- for..of iterates over the values of an iterable object or array.

* Used to use all elements from a particular loop.

# Objects

**_Everything in JS is an object, including the functions_**

- Objects are **Dynamic** in nature.

* Difference between obejct and variable is that we use `,` in object and `;` in variable.
* We can call it 2 different ways, ie, by dot method and bracket method.
* Brackets are used mostly when the value of object is stored in a variable.
* Variables written inside the object is called **property**. name : "Cow"
* Functions used insde object is called **method**.
* EG :-

```JS
let animal = {
    name : "Cow",
    legs : "4",
    gender : "Female"
}

let genderProperty = "gender";

(animal.name);
(animal["legs"]);
(animal[genderProperty]);
```

## Primitive VS Reference Datatypes

- Basically, **Primitve** is **Pass by value** & **Reference** is **Pass by reference**.
- Check out `Primitive VS Reference Datatypes` file.

* Research more from google.

## Ways to clone an Object

- `...`
- assign()
- By using `for..of`

* Check out `Clones_Of_Objects` file.

## Factory Function VS Constructor Function

**_(Template used to make objects)_**

### Factory Function

- Most important dissimilarity is that we use `':'` while writing properties.

* Like normal function it is first defined with or without parameters and then properties inside it is written in curly braces.
* Then it is assigned to certain object to call it through `console.log` or even without storing it in object will also work.

### Constructor Function

- Most important dissimilarity is that we use `'='` while writing properties(variable inside objects).

* Here, we use different keywords like `this, new` .
* _this_ is used to write properties inside this function. _new_ is used to assign the function to the object which acts as return keyword.

## Exercise related to Object

- Refer **Object_Exercise** file.

# Class

![class](./Resources_imgs%2Cpdfs/Class.png)

```JS
let Product1 = class{
  constructor(name, roll, div){
  }
}
```

- Syntax is same as that of Constructor function. Just we use `Constructor` predefined keyword.

## getter & setter

- These are 2 predefined functions used to get and set certain value.
- setter is used to set the value inside the console and getter is used to get the value printed.
- We dont use `()` while calling these methods.

```JS
get getDisc(){
  return this.discount
}

set setDisc(value){
  this.discount = value
}
```

woah.setDisc = 10
woah.getDisc = 10

## Method Definition

- You can make your own method/function inside the class and can use it.

```JS
disc_Value(){
  return this.price * this.discount /100;
}

chair.disc_value()
```

# Strings

- We can also concatinate string and any number.

```JS
  1. "hello" + 100
     output :- "hello100"

  2. number= 123
     number.toString()
     output :- "123"

  3. string = "123"
     Number(string);
     output :- 123

  4.   name = "vansh"
      'vansh'
      age = 19
      19
      sent= "My name is " + name + " and age is " + age
      'My name is vansh and age is 19'
      sent= `My name is ${name} and age is ${age}`
      'My name is vansh and age is 19'
```

## Exercise

`String_exercise1`

- Pehle sabko lowercase mai convert kiya.
- The lowercase wale k FirstAlphabet ko liya and alag kiya.
- Alag krke replace kiya with uppercase, if alag se uppercase krte toh merge kaise krta dono words ko.
- Created a new element in html through js using createElement function.
- 'li' k variable mai content ko link krdiya through textContent.
- Lastly, new changes ko main html mai append krdiya through appendChild.

`String_exercise2`

- holi and Holi are two different words in JS.
- All same, just '-1' means ki jisme Holi nhi aata vo string.

# Type Conversion

- To change one datatype into another.

## String Conversion

```Js
String(123)   Explicit
123 + ''      Inplicit
```

## Boolean Conversion

## Numeric Conversion

```JS
Number('123')   Explicit
+ '123'         Implicit
```

# Coersion

## Explicit VS Implicit

- Explicit is said when we add the datatype into it.
- Implicit is when we directly type the value without mentioning the datatype.

```JS
String(123) ----> '123'   Explicit Coersion.
6 + '4' ----> 64          Implicit Coersion.
```

# Arrays

## indexOf()

- Used to find any element which occurs first into the array.

## lastIndexOf()

- Used to find any element which occurs last into the array.

## includes

- It is a boolean type which helps to find that certain element is present into the array or not.
- Used only in Primitive datatype.

## find

- Used in reference datatype.
- Used to find that the element is present in the array or not.
- Its syntax is tough therefore refer `Array` file.

## push

- Used to add an element at the end of array.

## unshift

- Used to add an element in the beginnig of an array.

## shift

- Used to delete an element from teh start of the arrray.

## pop

- Used to delete an element from the end of array.

## Joining arrays

- concat()
- Spread operator :- ... wala method

```JS
let n1 = [1,2,3]
let n2 = [4,5,6]
let n3 = [...n1,...n2]

n3 ----> [1,2,3,4,5,6]
```

# Async , await

- Async is used as a promise . It'll be executed when its fnished.
- **_Await_** is used to run the particular execution afer its finished . It'll execute the further code unless its finished .
- `.then` is used to print the await statement if its completed, and if not then it'll just move to further steps.

* It is handled asynchronously.

# Arrows

- This is a way to define function with less number of words or code.
- Single parameters do not need parenthesis but you will have to put parenthesis if there are multiple paramteres.
- One liners do not require braces/return, one line will automatically return.

# fetch()

- While writing `.json()` , it'll parse the values(fit them into braces) and make them an object and if we use `.text` then it'll print all the values in the form of text which we dont want as it'll be too big.
- `stringify` is used to convert an object into string.

# JS Udemy Notes

# How to solve problem

- Understanding the problem
- Breaking into sub-problems

# Debugging

- By using `console.warn` and `console.error` in js, you can change the console ka looks.

* We can debug from the google prompt(inspect) from **sources** by giving the breakpoint and running it .

# textContent

- It selects the text of any specified element.

# classList

- Used to add, remove , toggle or replace the elements of html .

# DRY code (Do Not Repeat Yourself)

- It is very important to not to repeat the steps of codes.
- A very big disadvantage is that we need to change all the lines if we want to change one code into that repeated code, it can become a nightmare if the code is too big.

# keydown (An event of eventListener)

- Used to make keys responsive on a web page.

# JS Behind the scenes THEORY

## Concurrency Model

- It means that how js engine handles multiple tasks at the same time.

## Compilation VS Interpretation

- **Compilation** means code is converted into machine code at once & then it can be used anytime we wish
- **Interpretation** means code will written and converted at the same time so the execution takes alot of time to be converted which is not acceptable.
- JS is **Just-In-Time Compilation** , means ki first it'll be compiled and then immediately executed.

## Runtime in browser

Includes 3 things:-

### JS engine

- **Call Stack** is the place where all the codes are executed
- **Heap** is the place which stores all the objects our application needs.

### Web APIs

### CallBack Queue

- EG:- event listener --> click, etc

## Types of scope in JS

### Global scope

- These are variables declared outside any function and will be accessible everywhere.

### Function scope

- These are variables that are accessed inside the function. Also called local scope.

### Block scope

- These are variables only accessible inside block means codes written inside the braces.

* All functions k variables are block scope in strict mode.

- Only _let_ and _const_ are applied in this scope.
  > var is a function scope and not a block scope . let and const are block scope
  - Block scopes are not accessible outside the blocks , function scopes are accessible inside the function itself.

### Scope chain

Means the order on which the functions are dependent on other functions are written in the code.  
**_Variable lookup_**

- All variables can be accessible from parent function/variable . It cant go backwards , i.e. , the highest priority cannot be of bottom function .

* The scope only works upwards and not side ways, means 2 variables inside a common function cannot have access with the variables. In easy words , 2 child of a parent cannot use each other.
* Scope doesnt have any effect by function call, it only sees the upward order.
* The scope chain **isnt important** if the variable we are looking for is in the **current scope** , for eg, it'll print a variable which is inside the same block rather than printing that variable wiht same name which is defined in the global variable.
* If we reassign outer scope's variable inside the inner scope, then the new content will be from inner scope . But if we declare the same variable inside the inner scope then it'll ignore the inner scope and will print outer scope ka value.

## Hoisting

- It makes some types of variables accessible before they get declared.

* WE cant use hoisting for **let** & **const** variables and it'll throw show _uninitialized_, functions work & var shows weird behaviour by giving the output as **undefined**..

### TDZ (Temporal Dead Zone)

- let and const variables are not hoisting and will show `cannot access before initializing` if we try to use before initialization.
- TDZ is the zone from where the scope starts till the line where the variable is declared.

* It is always safe to use variable after declaring and a very bad practice is to use it before declaration.

* We need both practice in our codes :- To use a variable before declaration , To use a variable after declaration.

## Practicing Hoisting & TDZ

- We cannot call function stored in variable before declaring, but we can call function before declaring if its not stored in any variable.
- In case of function , var will give error of `not a function` & for let it'll be uninitialized.
- We can easily make mistake while using var variable during loops and it'll be really hard to detect the problem.
- The best practice is to use `const` when we dont need to change a variable , to avoid the use of `var` and to use `let` if we want to change the variable later.

* Always declare functions first and use only after declaration and declare variables first.

## This keyword

- 'this' keyword depends on _how_ is the function called, it'll act in different ways .

### Rules

- Inside a regular function call, _this_ keyword must be undefined.

### Method way

- If its used as a method, then will check the object which called it and find the asked method inside it.
  > EG:- vansh.calcAge(); Imagine calcAge is a method in which 'this' keyword is used, here vansh will become an object.

### Simple function call

- In strict mode, it'll show undefined. In normal mode , it'll show window object which could be problematic .

### Arrow functions

- Arrow functions do not get their own 'this' keyword, it'll point 'this' of surrounding function.
- The surrounding function can be the parent function of that arrow function and if its not a child function , then it'll show window function.
- Never use arrow function as a method (means function inside an object).

```JS
 let vansh = {
  greet : () => {}}

  // Use this
   let vansh = {
  greet : function() {}}

```

### EventListener

- DOM element on which it is attached

### Duplication object in another variable

- We can duplicate an object inside another variable .
- Refer this_keyword_practice for better understanding.

### Regular VS Arrow function

- Refer the file.

# Data Structures, Modern operators and strings

## Destructuring arrays and object

- Always uses brackets while declaring variables.

* To use elements inside array and objects by giving the variable names.

- Refer the file for better and proper understanding.

* Can change the object name and it can only be done on the LHS side in the curly braces with colom. Use parenthesis while destructuring key names of an object to get the values of objects.

## Spread Operator

- Used to concat arrays.

* Used to get a array elements individually rather than to get a whole array in nested form.

* It can also be used as destructuring because here we dont assign variables to every elements of array.

## Rest Operator

- Same like Spread , just the difference is that it is used on the left side in the declare part .

* Always used in the end .
  > EG:- let (a, b, ...c) and not let (a,...b,c)

## Short Circuiting

- The logic is it'll immediately stop checking if the value is false in _AND_ and will return the falsy value; and in _OR_ , it'll check the second element and if both are false then it'll return second else will return first.

* For `OR` it will return _first value_ for the values and will return _second value_ if _all_ values are false.

* For `AND` it will return _first value_ ; and will return _second value_ if all are true.

## Nullish Value

- Will see null and undefined as _falsy_ value and will return the other value present with it.
- Will return 1st value if none of _null_ or _undefined_ is present.

* Will also return 0 if its written first and if _null_ and _undefined_ are not present.

## Enhanced Objects Literals

- Can write object functions (methods) in smaller way .
  > EG:- order : function (para1, para2) ---> order(para1, para2)

## Optional Chaining

- Alternative of this chaining is the use of _if-else_ statement , which sometimes goes too big to write & through this we can get the desired output in a single step.

* Used to check if any element or method exists or not.
* Nullish and optional chaining are best combination to use .

- All the written path before the question mark is been checked as its true or false.
- It works for methods (function inside object) to check if some items are present or not.
- Also, works for array.

* It makes the code readable by avoiding undefined , error or none outputs.

- Undefined is still better than error or none output.

## Object notations

- Variables :- Called properties ehich contains keys and values.
- Functions :- Called methods

## Object.keys() & Object.values()

- Used to extract NAMES from the object.

* It saves the energy to loop any object k properties(variables inside object).
* Used to extract values from the object.

## Object.entries() & .entries

- We use entries to get the entry values in array , and use Object.entries to get entries values of objects.

* Returns both keys and values at the same time , so we can avoid writing the code twice for getting them .

## For loops

1. for in

- `for..in` is used to run a loop inside any **object** to access the value from key word. (key:value pair is used here).
- `for..in` iterates over all enumerable property keys of an object

2. for of

\*- _for..of_ iterates over the values of an iterable **array**.
\*\* Values can be extracted from the object especially.

- Used to use all elements from a particular loop.

## Sets

- We need to use contructor (`new` keyword) before set
- It does not repeat the values , the set mut be unique.
- It is different than arrays, elements cannot be extracted from any sets because it doesn't have index number and all values are unique.
- If you want elements to be extracted then just use arrays.
- We can use existing method `has` to check if any values is present or not , also `size` is used to check the length of the set. NOTE that instead of length, we use size.

## Methods we see in Sets and Map

- typeof
- has :- Returns boolean value.
- size
- delete
- clear :- To remvoe all the elements from the map.

## Iterator in output solution

- Whenever we see output as 'Iterator' while we are extracting any array or object , then simply add **Spread Operator** to fix it.

## Map

- Key and Value are separated just by a comma .
- The difference in this and object is that object only allows _strings_ to be the keys, but map keys can be _anything_.
- Map can be converted to object by using _Spread Operator_ for map variable.
- To match the type of any variable or key , we use `typeof` keyword and can write the type into the apostrophe.

## JSON data

- Data from web API comes in the special file called JSON.

# Arrays Vs Sets

| Arrays                                  | Sets                               |
| --------------------------------------- | ---------------------------------- |
| 1. Use when you need all list of values | 1. Use when you need unique values |
| 2. Use when you need to manipulate data | 2. Use to remove duplicates        |

# Objects VS Maps

| Objects                                             | Maps                                                 |
| --------------------------------------------------- | ---------------------------------------------------- |
| 1. Easier to write and access values with . and [ ] | 1. Easy to compute size and iterate                  |
| 2. Only string can be the key name.                 | 2. Any data type can be the key name.                |
| 3. Use when you need to include functions (methods) | 3. Use when you need to include key and values only. |
| 4. Use when working with JSON                       | 4. Use when you need keys that are not strings.      |

## Working with strings

- `slice` method is used to extract the value certain value from an array and can also slice elements(means any words or numbers). `slice(startValue , endValue)` .
- `splice` method is used to remove the elements from the array and delete it.
- _-1_ in slice refers to the last value & in `indexOf` it refers to the value which is not present. NOTE :- indexOf is case sensitive method.
- `trim` is used to remove the blank spaces.
- `replace` & `replaceAll` is used to replace first value or all values respectively . `replace(oldVal , newVal)`
- `includes` , `startsWith` & `endsWith` all return a boolean value .
- `split` is used to split strings into arrays.
- `join` is used to join array values into a string.
- `padStart` & `padEnd` is used to add any values prior or after certain value & it wont change the original array.
- `repeat` method is used to repeat

## Takeaway from exercise

- The thing I learnt is that we must create a _for_ loop to **split()** the array elements into two words.

# Deep into functions

## Default functions

- Can use OR operator to set default value to avoid '_undefined_' msg in the output.
- By passing _undefined_ as parameter, we are printing default value.

## Callback functions

- These are functions which are used inside another function .
- The parent function is called higher order function and these functions are defined outside the parent function but are used inside it.

## Call method

- Used to point a certain object for _this_ keyword and this pointing is done by the first argument which we pass .
- It is very useful to use 2 functions at same time , and their inner contnt to form a new value or variable.

## Bind method

- It'll return new function . It borrows method w/o creating its copy.
- We can also predefine any arguments in this method.
- First argument will always be referred to this keyword.

## Partial application

- When a certain method is predefined by the argument then its called partial application .
- Watch example for better understanding. line 201

## Immediately invoked function

- Means to not store a function in a variable . We can also call these functions.
- We add _paranthesis_ around them to make it considerable.

## Data encapsulation

- When one variable is defined in a function and is not accessible outside the function .
- Its a ttype of a private variable for global scope.

## Concept of Closure

- Imagine a parent function with variables and a child function .
- This concepts says that the child function can have access to the variables. We know that these variables cannot be used outside the function.

# 11 . Working with arrays

## Methods

### Slice and splice methods

- Slice doesnt change the og array but splice do change it .
- _splice_ is used to delete elements permanently from the array

### Reverse method

- Changes the og array and reverses it.

### Math.abs method

- It'll always rerturn positive values , and any value is negative then it'll be converted into positive.

* Can be used to extract and trace that which values are positive and which are negative.

### forEach method

- It iterates the loop and save in console too one by one.
- Used to track all the values and store it in arguments using loop to iterate .
- Syntax :- (currentElement , indexNUmber , array)
- _forEach_ with _Map_ will give proper key and vlue combination.

## Map Method

- It saves as one new array rather than iterating each step.
- Loops over array , does not change the og array, easier than forEach .
- It uses function and callback functions for desired output.

### entries() Method

- Used to extract (index , values) from arrays.

## Set

- These are unique values . They have (value , arr) and not index .

## Cannot read property error (this keyword)

- When we use any method ,which have this keyword in it, with any button , then the this keyword will be transferred to the button and the error will be displayed.
- At such time , using **bind** to join the function with its original method solves the issue.
- Its tough to recognise this error if we dont have proper knowledge .

## setTimeOut

- setTimeOut will literally take value in the form of millisecond and will run that function after the specified time.

## setInterval && clearInterval

- Will continously keep adding the specified value after the specified time value .
- Will stop if clearInterval is applied to the variable the setInterval is assigned.

## CSS of banklist

- We use margin to align any value in the end or start of the row .
- grid-row is used to arrange the order in which any column will be displayed. Similar with the column. We use numbers to define the row number , ie , how down it'll be in the web page.

## Map Vs Reduce Vs Filter

- Map :- is used to edit elements of an array and store them in a new array . EG:- TO multiply the arr elements and store it.
- Reduce :- is used to form a single element from a big array . For eg :- Adding all the elements of an array .
- Filter :- Used to remove certain elements based on the condition .

## insertAdjacentHTML

- Used to import html content in js file and link it .
- We need to specify the position where we want to add that element in the html in its syntax.
- There are 2 arguments in this method , 1st says the position where we want to add and 2nd says is the variable where we have stored the html code in js file.

## innerHTML

- Used to set or return or edit the html content in js or by js.

## Arrow function

- Arrow function doesnt need return keyword or semicolon if only one line code is present.
