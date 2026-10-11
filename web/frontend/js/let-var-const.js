console.log(name)
var name = "23Ali, usman"
var name = "Usman"
// variable can be redec and reinitialized
// it is global scope identifier

let category = "Food"
category = "Clothing"
console.log(category)
// variable cannot be redec and but can reinitialized
// it is block scope identifier

console.log(status)
const status = "inactive" 
// status = "inactive"
// variable cannot be redec and reinitialized
// it is block scope identifier


let age1 = 23
{
    let age = 30
    console.log(age, name)
    console.log(age1)
}
// console.log(age)
