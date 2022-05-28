Clones_Of_Objects

let course = {
    title: 'javascript',
    enroll() {
        console.log("This is function inside the function of enrollment.")
    }
}

let course_1 = {...course}
course_1.title = 'JS'
console.log(course_1 )

let course_2 = Object.assign({},course)
course_2.title = 'JavaScript'
console.log(course_2)

let course_3 = {};
for(let key of Object.keys(course)){
    course_3[key] = course[key]
}

console.log(course_3)


