class Student{
    // This is private field which couldn't be called outside the class. To call this , we can use method in which this field is.
    #id;
    #region = [];

    constructor(name , age , id){
        this.name = name;
        this.age = age;
        this.#id = id;
    }

    studentId(){
        console.log(`Its ID is ${this.#id}`);
    }

    studentRegion(places){
        return this.#region.push(places);
    }

    getPlaces(){
        return this.#region;
    }

    static friends(){
        console.log("Everyone has got friends, you sure?");
    }
}

const s1 = new Student("Vansh" , 18 , 121);
console.log(`Student 1 is ${s1.name} and ${s1.name}'s age is ${s1.age}`);
s1.studentId(121);
s1.studentRegion("Maharashtra ");
s1.studentRegion(" Goa ");
console.log(`${s1.name} have visited ${s1.getPlaces()}`);
Student.friends();