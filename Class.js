class Product {
    constructor(name,price,discount,code){
        this.itemName = name;
        this.price = price;
        this.discount = discount;
        this.itemCode = code;
    }
}

let pencil = new Product('pen',20,2,'p10')

console.log(pencil.itemName)

// Class Expression
let Product_1 = class{
    constructor(name,price,discount,code){
        this.itemName = name;
        this.price = price;
        this.discount = discount;
        this.itemCode = code;
    }
    get get_prod(){
        return this.discount;
    }
    set set_prod(value){
        this.discount = value;
    }
    discountValue(){                    // This is a method we defined.
        return this.discount*this.price/100
    }
}

let pen_pencil = new Product_1 ('Wooden_pencil', 120, 20, 'C20')
/* 
console.log(pen_pencil.get_prod)
console.log(pen_pencil.set_prod = 10)
console.log(pen_pencil.get_prod)
console.log(pen_pencil.itemName)
console.log(pen_pencil.discountValue())
 */

// Extending class
class Stationary extends Product{
    constructor(itemName){
        super(itemName)
    }
    get_Stationary(){
        return this.itemName + " is a stationary product."
    }
}

let Prod = new Stationary('Roller scale',60,2,'p12')
console.log(Prod.get_Stationary())
