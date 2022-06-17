//Functions without return type
let bread1 = prompt("Enter the type of bread");
let sauce1 = prompt("Enter the sauce name");
let veggies1 = prompt("Enter the veggies you want");

let sandwich = bread1 + " hahawheat " + sauce1 + " " + veggies1 ;
console.log(sandwich);

//Function using return type.
function makeSand(bread1, sauce1, veggies1){
    let sandd= bread1 + " This ones different " + sauce1 ;
    return sandd
}

let vegSand = makeSand(bread1, sauce1, veggies1);
console.log(vegSand)
