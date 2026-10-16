// collection of different types of an element is called array
// indexes        0          1        2         3
const colors = ["Purple", "Black", "Yellow", "Orange"]
const tasks = ["T1", "T2", "T3", "T4"]

console.log(colors[1])
// length, push, pop, unshift, shift, concat
// splice, map, filter, find, reduce
colors.push("Green")
// colors.pop()
// colors.unshift("Red")
// colors.shift()

console.log(colors)
const newArray = colors.concat(tasks)
console.log(newArray)
console.log(newArray.length)
