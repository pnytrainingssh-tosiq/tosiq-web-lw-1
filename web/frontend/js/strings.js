// length, toUpperCase(), toLowerCase(), includes(), startsWith()
// endsWith(), replace(), replaceAll(), split(), repeat()

// let str1 = "Ahmad"
// if (str1.length > 5) {
//     console.log("Characters is too long")
// } else {
//     console.log(str1.length)
// }
let name = "ahmad"
console.log(name.toUpperCase())

let name2 = "AHMAD"
console.log(name2.toLowerCase())

let userEmail = "aliexpressemail.com"

let validate = userEmail.includes("@")
console.log(validate)
if (validate) {
    console.log("Email is valid")
} else {
    console.log("Email isn't valid")
}
// .org, .co, .com, .edu
let checkEmail = userEmail.endsWith(".com")
console.log(checkEmail)

let portfolio = "https://www.my-portfolio.com"

let checkPort = portfolio.startsWith("https://")

if (checkPort) {
    console.log(portfolio)
} else {
    console.log("Url isn't valid")
}

let paragraph = "A quick brown fox jumps over the lazy dog"
// let replacedData = paragraph.replace("o", "e")
let replacedData = paragraph.replaceAll("o", "e")
console.log(replacedData)

let word = "Apple "
let repeatedWords = word.repeat(2)
document.write(repeatedWords)
console.log(repeatedWords)

let serverTime = "2015-12-25T15:32:06.427"
let date = serverTime.split("T")
console.log("Orignal value: ", serverTime)
console.log(date[1].split(".")[0])
let time = date[1].split(".")
// console.log(time[0])