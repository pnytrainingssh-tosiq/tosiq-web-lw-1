// variable declaration
// var initialization
// condition
// increament / decreament
// table of 4: 4 x 1 = 4

let sum = 0
for (let i = 1; i<= 10; i++) {
    sum = sum + i
}
console.log("Total number of sum is", sum)

for (let i = 1; i<= 10; i++) {
    // console.log(i, "I love javascript")
    // output: 1 I love javascript

    if (i % 2 == 1) {
        let table4 = `4 x ${i} = ${i*4}`
        console.log(table4)
    }
}