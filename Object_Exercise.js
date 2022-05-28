Object_Exercise
let product = {
    itemName : 'Banana',
    price : 99, 
    discount : 40,
    itemCode : 'Disc40'
}

//Factor Function
function prod_No_1(name , price, discount, code){
    return{
        itemName : name,
        price : price,
        discount : discount, 
        itemCode : code
    }
}

let Prod_1_final = prod_No_1('Apple', 100,40, 'Disc40')

console.log(Prod_1_final)

// Constructor Function
function Product_2 (name , price, discount, code) {
    this.itemName = name,
    this.price = price,
    this.discount = discount,
    this.itemCode = code,
    this.discount_amt = function(){
        return (price * discount)/100
    }
}

let prod_2 = new Product_2('Banana', 80, 30, 'Disc30')

console.log(prod_2)
console.log(prod_2.discount_amt())
