# Author:- Vansh Baghel

# Date:- 19-April-2022

# Email :- vanshbaghel912@gmail.com

# Linkedin & Twitter:- https://www.linkedin.com/in/vansh-baghel-24ab42232 https://twitter.com/VanshBaghel07

# Feel free to contact me if you face any queries or errors.

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

# Type Conversion

- Means it converts the element datatype into

## Explicit VS Implicit

- Explicit is said when we add the datatype into it.
- Implicit (also known as Type coercion) is when we directly type the value without mentioning the datatype.

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

- This can be the best to use while playing with CSS like add or removing any class .
- Used to add, remove , toggle , contains (to check if present) or replace the elements of html .

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

- All the written path before the _question mark_ is been checked as its true or false.
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

**While using these methods , convert the value into string and only these will be applicable**

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

## setTimeout && clearTimeout functions

- The first value must always be a function & second is the time interval in millisecond.
- clearTimeout is used to stop the setTimeout function , ie , to stop the timer.
- setTimeOut will literally take value in the form of millisecond and will run that function after the specified time.

## setInterval && clearInterval functions

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
- Returns the html tag , while textContent returns only the text.

## Arrow function

- Arrow function doesnt need return keyword or semicolon if only one line code is present.
- It can be used for multiple liners tho but dont forgot to put the curly braces.

## reduce

> Syntax :- (function(acc , current value , index , array{}), initial value of accumulator) .

- Here , currentValue will be the second element of array , acc will be the first value or the default we set .
- Here accumulator means the value formed from multiple elements.
- acc can start with 0 even in any array , by putting 0 in `initial value` .
- Can return the _maximum_ value too from many elements . Another way to get max is by `Math.max` .
- We always return the accumulator .
- Logic behind finding max :-

  - Basically mov will be new acc if mov is greater .

    acc = 1 , curr = 8 ; it'll return 8

    now , arr = 8 , curr = 3 ; it'll return 8

    now , arr = 8 , curr = 9 ; it'll return 9 .

  - **_NOTE_** :- When acc is set to 0 , then first element will be the cur value and 0 will be acc.

```JS
a = [1,8,3,9]
acc > curr ? acc : curr
```

## Chaining method

- To use filter , reduce , map methods and arrow function together .

## Find method

- Used to find a particular element from array according to the given condition.
- It returns only one element or first element even if multiple elements satisfies the condition .

## preventDefault() method

- Dont forget to use parenthesis as it doesnt throw error and can ruin your work . (Already happened)
- This is used to prevent the reload of html page which blocks certain functions.
- _form_ element of html requires this method .

## findIndex Method

- It finds the index of the element we ask , we can give conditions to find the proper element we desire.
- It is not easy to find certain elements without condition , so this is the best practice of it.

## indexOf VS findIndex

- indexOf returns the index only for the element we write , we cannot write the condition in the parenthesis.
- findIndex also returns the index , but it supports the conditions we want to provide.

## includes() VS some() method

- _some_ accepts condition and function or arrow function must be written in it .
- _**Similarity**_
  - Used to check if the element exist or not & it returns a boolean value.
- _**Difference**_
  - includes() takes only value and in some() method we can give the condition to reach the element we desire.

## some() VS every()

- **some** will return true if any elements of array satisfies the condition whereas **every** will return true only if all the values are true.

## flat() method

- It will combine a nested array into one array , and the default value is 1 level.
- [flat explanation with example](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)

## flatMap

- Since use of flat & map is too often , we can use this.
- We can only go 1 level deep in this , to go deeper we have to use flat itself
- We have to pass condition like Map in the parenthesis.

## flat VS flatMap

- _**Similarities**_ :-
  - Both will change nested array to normal array one level deep

## sort

- It mutates the original array.
- It converts the array in string values and arrange alphabetically.
- We cannot sort numbers properly , as it will return negative first then all numbers starting from 1 and so on .
- This is a rule for sorting numbers that if `return < 0, A, B (keep order)` & if `return > 0, B, A (switch order)` where A and B are 2 consecutive numbers.
- To sort numbers , we use this

```JS
/* a, b are consecutive numbers of array. */
// Ascending
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });

/* If a > b , then ofc a - b will be positive , which satisfies the condition of swtich order. b - a for descending.*/
movements.sort((a, b) => a - b);
console.log(movements);
```

## new Array

- If only one parameter is passed then it will create new array with those number os elements.

## fill method

- We can specify the element and position of it where we want to add in an array.
- It is used to expand the existing array or to make any new array.

## from method

- Used to change each element of array .
- Syntax :- ({length: 2} , arrowFn) . arrayFunction is used for passing condition and print them as elements till the length mentioned.

## Exceptions

- It is not any method or rule , it just means to manipulate certains words from sentence like toLower , toUpper and stuff and also keep certain words normal without being changed.

## typeof

- Used to check type of variable .
- _typeof_ must be written properly , its not 'typeOf'

## Where and how to use array

![array usage](./Resources_imgs%2Cpdfs/Array%20usage.jpeg)

## How to count array elements with certain condition

- We can use length or even reduce for this work . Can check _Array practice methods_ file.

## How to add new property in an object

- We can use forEach or map method and without creating a new function , we can just do our task (see challenge 4 that how recFood was added in dogs object)

## replace & split

- These methods can only be used with strings , and not with arrays.

# 12 .

## Number keyword and '+'

- This keyword is used to convert string into numbers and also '+' sign does the same work .
- EG:- `'+24'` = `24`

## Number.parseInt

- Used to convert any string into number and it automatically removes the characters out of string.

## isNaN VS isInfinity

- _isNan_ returns a boolean value and checks if the value is number or not , one bad output is that it doesnt consider the infinite value as false.
- _isInfinite_ is the best method to check if any value is number or not , it do consider the infinite value as not a number.

## Math function

- We learnt `round, ceil , floor , trunc , min , max , random`
- These are type coercion as they convert string into numbers .

```JS
'20' = 20
20 = 20
'20x' = NaN
```

### Math.random

- Used to get any random number , but the decimals comes too big .
- To avoid decimal issue , we use toFixed or trunc.

### Math.trunc

- The Math.trunc() function returns the integer part of a number by removing any fractional digits.

### Math.abs method

- It'll always rerturn positive values , and any value is negative then it'll be converted into positive.

* Can be used to extract and trace that which values are positive and which are negative.

### Condition of min to max range using Math.random

```JS
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;
// 0...1 -> 0...(max - min) -> min...max
// console.log(randomInt(10, 20));
```

## toFixed(number of nos after decimal)

- To print required number of decimals in one output , we use this.
- It returns a string value

## Numeric Separators

- To show big numbers , we use _underscore_ to separate the numbers and in the output only number will be visible.

## BigInt or n

- To display too big number which JS cant handle .
- We cannot mix BigInt with other numbers , we can only perform operations on 2 _BigInt_ .

## Methods to create dates

- **new Date** is one of method to find current date .
- **Date.now()** gives us the timespan which is the millisecond from 1 Jan.
- If we pass timespan in new Data then will get the date and time of that timespan.
- We can get all things from date by using methods like _date,month,year,hour,min,sec_ .
- _toISOString_ is used to store the date value into string. It refers to some international standard

## Changing timezone using Intl

- We use _new_ keyword before using it.
- To get the date, time and all according to your timezone , we use **Intl.DateTimeFormat(locale,options).format(date)** .
- Here ,

1. locale => language-country .
2. format => Used to say that which date we want to format.
3. options => Used to add dates , hours , weekday , etc onto your output according to the time zone you entered . It is an object . The properties in it have keyword to access like to add _minutes_ , we use _minute_ and not min or minutes .
4. Navigator.language :- If we pass this in locale, then the time zone will be automated with your browser.

## To display difference between dates

- We use 2 _days_ parameters and minus them , the result will get will be in millisecond .
- To convert into days from millisecond , we divide them by _(1000 * 60 * 60 \* 24)_
- If we have time passed in the day , the answer of difference in 2 days will be in decimal , so to fix that we use _Math.round()_ .
- Use _Math.abs()_ to avoid printing the negative day difference.

# Advanced-DOM-and-Events

![DOM diagram](/Resources_imgs%2Cpdfs/DOM%20explanation.jpeg)

- DOM helps us to interact with HTML elements and modify the browser using Javascript.
- We interact with the browser using DOM.
- DOM is a type of API which contains alot of methods .
- Every single DOM element is a node and these nodes in JS is represented by different types of objects.
- All elements of HTML element has to go in DOM as well as per the rule , therefore all elements of HTML has access to many properties .
- Each HTML element has its own unique properties and DOM stores it due to which we have different attributes to HTML elements like for a we have href.
- Inheritance of methods and properties takes place , ie , HTML element has access to all methods of _Element_ as well as of _Node_ . We can also say that HTML element is also an _Element_ and a _Node_ since it comes under _Element_ and _Node_.
- _queryselector_ comes under both Element and Document type.
- We can call EventTarget on every single type of node into DOM API.

## prepend VS append

- Both methods are used to add elements in the html tag from JS.
- _prepend_ is used to add the element in the start of certain parent element.
- _append_ is used to add the element in the end of certain parent element.

## before VS after

- Syntax :- parentEl.before(addingEl)
- Both methods are used to add elements in the html tag from JS.
- It adds the element into HTML but as a sibling to other elements and not as child element.
- _before_ adds the element before the parent element specified.
- _after_ adds the element after the parent element specified.

## before , after , prepend , append similarity

- These elements can also be used to change the position of elements , and main working of them is to insert the element in html file .
- Since DOM elements are unique , they cant be on different places at the same time , similarly these inserted element cannot be at 2 places at same time , for eg:- we cannot use append and after or before at the same time .
- To add DOM elements are different places at the same time , we need to clone it. Cloning can be done by using =>
  _cloneNode_ method.

## cloneNode

- Used to add an element at multiple places using DOM method ie from JS to html.

## getComputerStyle

- This method is used to use the CSS style to JS , we cannot get access to CSS file into JS without using this method.

## root in CSS

- root in CSS is same that of documentElement of JS .
- It changes all the styles which have that particular style if _setProperty_ is used

## setProperty(selectedStyle , newStyle)

- We can change the value of existing CSS file using this method.

## getAttribute & setAttribute

- Attributes are the things we pass in html tag code .
  EG:- class , id , onclick are the standard property .
- When the attributes are non standard property wrt the html element , then we have to use these methods to get that attribute.
- By _**setAttributes**_ we add the attribute into the tag ie inside the <> brackets it'll be added.
- By _**getAttributes**_ we can get the value's name of any element .

> EG :- for a , link:href => URL (path) ; link.getAttribute ()=> # or any website link which we have provided .

## data attributes

- Any attributes which starts with data are datasets
- We use camel case to call it and get the answer even if in the attribute it is different .
  > EG:- data-version-number in html , Element.dataset.versionNumber

## window.pageXoffset & window.pageYoffset

- Used to get the distance of the page from the top most of the view port to the current view port of your page .

## getBoundingClientRect()

- This get all the dimensions of the section we mention .
- We can get the distance from top , left , right and so many more .
- Used to scroll or just get the value.

## scrollIntoView()

- This method is used to scroll the page to the required position .
- This is the modern way of doing so .
- We can specify and add the effect by using _behaviour_ keyword in curly braces.

## remove()

- Used to delete any html element or paragraph from the webpage.

## target method

- It shows the html element line of code from JS .
- Can be helpful to which the block of code in console and to select certain class or id of the same.

## Bubbling and Capturing

![non-delegation](./Resources_imgs%2Cpdfs/non-delegation.png)
![delegation](./Resources_imgs%2Cpdfs/delegation.png)

- Used to make the website faster by avoiding the storing/running of each element and running the same event just once in the parent step.
- This means that all the events that we put to the child element , will also be applicable to the parent element.
- If we log the output into the parent element we avoid printing the outputs everytime we click onto some child element in case of eventListener as click .
- Rather than using forEach to select multiple elements from a parent at every eventListener , we must use the _target_ and get the output in parent element itself.

## closest

- Used to avoid the event to take place on child element and to make it work for the parent element
- closest method is used to let the JS know till which parent element it must go.

# Fetch API

- Fetch API returns a promise.

# 16. Asynchronous JS Promises

## Asynchronous Code

- Asynchornous code is non-blocking , ie, it doesn't stop the execution of code.
- It lets other execution to take place, without disturbing the flow .
- Once the execution of asynchronous code is done it is executed no matter the other flow of task.
- We can control the flow of this code by **nested callback** & **Promises** . Promises is more modern type.

## AJAX

- AJAX is **Asynchronous Javascript And XML**.
- It allows us to communicate with the website in asynchronous way.
- We can **req** or **post** the data from the web page and the information of these web pages are stored in **Web APIs**.

![web to client](./Resources_imgs%2Cpdfs/api%20to%20client.jpeg)

## Web API

- Another term is Endpoints.
- Its the application running on server that receives the requestes for data and sends data back as response.
- While using any API , **CORS** (Cross Origin Resource Sharing) must be _Yes_ or _Unknown_ . Without it we cannot access third party API.
- API are in the form of **JSON** and to convert them into readable format we must convert it using **parse**.

## Controlling asynchronous behaviour

- Old way to do this is to use **Nested Callback functions**.
- New way is by using **Promise** .

## Promises

- It is a type of container for future value (which is asynchronously deliered value).
- Why should we use Promises? **ADVANTAGES** :-
  - We dont need to use callback functions and all will already be in sequences.
  - We can chain promises for sequence tasks and escape the _Callback Hell_ .
- Stages of promise:-
  - Pending :- Before the future value is available.
  - Settled :- Asynchronous task gets finished.
    - Settled are of two types :-
    1. Fulfilled :- It shows the success and we can access the information.
    2. Rejected :- An error happened and we cannot access the API.
- These promises are either rejected or accepted and once its done then its impossible to change .
- These stages are seen when we try to **consume promise**.

## Consume Promise

- It means to use the data inside promise .
- If theres no data present , we have to first build the promise .

## Issues faced while using API

- Without destructuring the API data, it wasnt working . `[data] and not data while assigning the variable name `

## then method

- We use **then** method on promises.
- We have to pass a callback function and that function will be executed once the code is finished running.
- We pass one argument in that function which will return the output of the fulfilled promise.
- We need to pass the function for getting actual data in 2nd _then_ method.
- Dont forgot to use **return** word as it has caused you error in this topic as well as in previous project too.
- Always log the data in the **second then** statement because the data maybe accessed from data[0] after selecting its first element of the API data.

## fetch function

- fetch returns a promise.
- We need to use **then** method to resolve the promise.
- **json** method is attached to all _response_(resolved value) which we get by fetch method.
- **json()** function is also asynchronous and therefore it will also have a new promise.
- Therefore we need to call 2 **then** methods because the json() itself becomes a promise.
- Whenever we want to add any value , make sure to use _headers_ object and convert the value into string by using _JSON.stringify_.
- We need to pass the function for getting actual data in 2nd _then_ method.

## Nested fetch

- To use fetch as nested method , we need to return the **second fetch** method in the body of **second then** method.
- The **second then** method will always return the fulfilled value.

## Way to access properties from object

- We can get it by using **for..in** loop we can get the key or value ka value.
- By using _Object.keys_ or _Object.value_ , we can get the following.
- To get the key pairs , use Object.key(object.property) .
- You did this thing in **Region_API-task** which surely was on challenging task!! But am proud to do that :) .

## Handling rejection / Catching error

### catch() method

- We can catch any error and alert the code that error has happened rather than watching the rejection message in the console.
- If we dont use **catch** function , then the console will have messae of rejection.
- **catch** function accepts function and parameter which will include message which we want to keep.
- Best place to use **console.error** which will highlight the error in console.
- **Uncaught** word in message will not be shown anymore.

### err

- We can use **err** which is predefined error msg of JS.
- _err.message_ is predefined method to throw the error message.

### finally method

- This method will work in both the cases.
- Best usage is the loading spinner when the promise is not appeared. Like the loading screen.

### then , catch , finally methods

- then runs when the promise is fulfilled , catch runs when the promise is rejected and finally runs for all cases.

### Throw method , Adding error messages manually

- We can use **throw new Error** to display a new error msg and change the default, mostly is used with _**if**_ statement in **first then method**.
- Name inside if statement must be the same of that in **then**.
- Remember that after using this , we have to return the res.json() value for it to work.
- It"ll run unless the error get caught ie till the **_catch_** method.
- The **err.message** will change accordingly with this to the new statement which will assign.

![async_behind the scene](./Resources_imgs%2Cpdfs/async_behind%20the%20scenes.jpeg)

## ok method

- Condition inside **if** can be **!(parameterName).ok** for **reject** argument.

## Asynchronous behind the scene (Theory)

- All the asynchronous tasks work in the environment of web APIs.
- **Callback queue** is the place where events happen , and where the asynchronous task waits after completing .
- **Event Loop** checks that is the callstack is empty or not , and if its empty then it will take first task from **callback queue** and place it inside the callstack .
- Each time an event loop takes a callback from callback queue , we say that there was an **event loop tick**.
- And in this way , asynchronous code works in non-blocking way . It waits other callback queue tasks to finish and then its executed.
- The callbacks from fetch goes in **microtasks queue** where it has the priority to be executed before the tasks present inside the **callback queue**.
- So in other words , once the fetch callback execution is completed, then it will **run directly without waiting** for other tasks present inside the callback queue to be executed .

## Promisifying

- It means to convert the callback based asynchronous behaviour into promise based.
- Like by using this we will be able to use fetch function as **nested fetch** rather than putting the callback functions and avoiding the callback hell.
- In simpler words we are creating nested fetch promises which will be needing in the first fetch function.
- We use a variable as a function like

```JS
let timer = function(){
  return new Promise function (resolve , reject){
    code
  }
}

timer().then().then()
```

## new Promise function

- It accepts two parameters **resolve** and **reject** .
- In the **catch** function , the value inside the **reject function** will be printed.
- Any condition in **resolve** will be fulfilled! and in the **reject** will be rejected.
- We must not forget to put **timer** to make it asynchronous as the whole idea about the Promise function is to make it that.
- We just create the resolve and reject conditions , rest of the work of putting **then** is done later by using the promise function variable.

## Promise.resolve & Promise.reject

- These 2 functions are used to resolve or reject the input values **immediately**.
- It will be the next value inside the **microtask queue** and will be executed before the other **callback queue** tasks.

## setTimeout using resolve

- We pass **2 arguments** in the setTimeout function , and as the first argument we will pass the **resolve** word/value and in second simply the timer value.

## load eventHandler

- We use load when any task is taking place , like if something is loading and once its finished this function will work.
- To put any image from JS , we must always use **load** function as it makes the work easy and can handle it asynchronously.

## async / await

- Always wrap the whole code with **try** & **catch**
- It is the best way to handle any ashychronous task.
- We dont need to use any **then** method
- We must store the **await** function in any variable , and then use it.
- In **await** function we pass the **fetch** and **json()** step into the paranthesis.
- We can use more than one await funtions and can use **many API** in one **async** function , which will avoid the use of **callback hell** or **nested fetch** method.
- We **cannot use catch()** method in async await.

## try and catch

- We have to wrap all the code of async function inside the curly braces of the try method .
- Then we can use catch function to catch the error caused inside the file.
- This method can be used for any function , not just specifically for async await.

## async await return behaviour

- It returns the **whole promise** even when we return some other string like _You are in India_.
- It will not return the text , so to fix that we use **then** method which will get the **fulfilled** data and log the **return message**.
- If the async function is rejected , even then the then method will return the fulfilled value but it will be undefined , it should return the error message which it doesn't.
- To return the rejected message, we will **rethrow** the error , ie, will use `throw err;` at the **end** of the async function so that it reviews the error.

## Combination functions (imp)

- It takes in **array of promises** and returns a new promise.

### Promise.all (imp)

- Whenever we run a code using asynchronous code , the data we are passing might **not depend** on one another.
- If the data is **imdependent** of other APIs , then it best to use **Promise.all** .
- **Normal behaviour** without this method is that **code will run one after the another** , but by using this method all the **code will run parallel** , ie, simultaneously.
- This **saves** alot of **time** for our web to load.
- If we want to do it using async await , then simply use **await** for Promise.all and wrap all the promises inside the method.
- Promise.all takes in **array of promises** and returns a new promise.
- Remember , that if any one Promise gets rejected , then the whole array of promises will be rejected.

### Promise.allSettled

- Same as Promise.all but it'll work even if any promise is rejected.

### Promise.race (imp)

- This function also takes the array of promises as input .
- It will return the promise which is executed the fastest among the arrays.
- It is very useful in real world as we can use this function to fix the low speed internet of some people and can return only few values and can skip the loading of rest after some time interval if the array of promise is too large.
- It returns the other promises even if one function is rejected .

## Promise.any

- Same as Promise.race just it returns the fulfilled value and ignoress the rejected values .

## DOM traversing
* It means the ways to find or select HTML elements based on their relation to other elements.
 
 ### .children
 * It is used to select all HTML child elements present in a parent element.
 * * Works only for direct children.
 
 ### closest
 * It selects the closest parent element for the element which we select.
 * If there are multiple parent elements and we want to select the direct parent then this method is usefull.
 * Same like querySelector just difference is querySelector selects child elements and this selects parent element.
 
 ### parentElement
 * Selects the parent element for an element.

 ### previousSibling , nextSibling and parentElement.children
 * To select all ibling elements , we can use parentElement.children which will go to the parent element and then all the elements children of it (ie siblings).
 * for eg:- to select siblings of h1 element which is inside div with h2, h3 ; we will select div and then its children which will be h1 ,h2 ,h3.

## mouseover and mouseout event handlers
* These are like hover and non hover in JS .
* We can handle the events of hover and change other element of html k properties too.
* mouseout will undo the effect we added as soon as we remove the hover.

 


