// We made our own method/function .

function Course(title) {
    this.title = title,
        this.enroll = function () {
            console.log("This is function inside the function of enrollment.")
        }
}

// Using 'Function' we were able to make our new function.
// This is  Constructor Function type. 
let course_func = new Function('title',
    `    this.title = title,
this.enroll = function() {
    console.log("This is function inside the function of enrollment.")
}`)

let course_func2 = new course_func('JavaS')         // This step is makes the fuction as an object.

course_func2.enroll()



