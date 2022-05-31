![type_of_JS](./Resources_imgs%2Cpdfs/DTL.jpeg)

# DOM (Document Object Model)

- Whenever we make a website, we create a document (ie HTML)
  and give styling to it through DOM itself by linking it to the document (by using CSS) .
- Document :- HTML

  Object :- All the elements/tags which we use.

  Model :- The whole structure formed through combination of html, css and js.

# Elements

## document.querySelector('elementName')

- `document` is the tag through which we link the js to document (html) .
- `querySelector` selects the element which comes first in your document. You can also call class through querySelector.
  `querySelector('.vansh')`

## prompt

- Used to popup the information related to input text.

## doc_button.addEventListener('click',inputMsg);

- `addEventListener` is used to make responsive to any element.
  EG:- 'click'
- doc_button is the assigned name of the variable and inputMsg is the user defined functionName .

## console.log()

- Its used to get output not on the web page, but in the inspect console section.

# Variables

## Rules of variables

- Can contain :- '\_' and '$'
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

== and ===

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

- for..in is used to run a loop inside any object to access the value from key word. (key:value pair is used here).
- for..in iterates over all enumerable property keys of an object

```CSS
console.log(key , objectName[key])
This will print 'key value' of that object.
```

5. for..of

- This directly gives us the value without worring about the key word.
- for..of iterates over the values of an iterable object.

# Function

Syntax :- `function name(parameter1,p2,p3){ code } `

`name(1,2,3);` is used to call the function.

- We need to pass certain value if we give the function some parameter.

* Functions are written in 2 types:- 1 is normal and another is when we return certain value.

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

- Most important dissimilarity is that we use `'='` while writing properties.
-

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

- Always use '' , "" or `` to define strings.
- We can also concatinate string and any number.
- We can also change the datatypes from no. to string and vice versa.

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

# Imp Methods in strings

You cannot run quokka mai outputs once u save the file.

```JS
var favShow = "Dragon Ball Z"
console.log(favShow.length)

console.log(favShow.indexOf("g"))

console.log(favShow[13-1])

console.log(favShow.slice(3,6))

console.log(favShow.toLowerCase())

console.log(favShow.toUpperCase())

Outputs :-
13

3

Z

gon

dragon ball z

DRAGON BALL Z
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
