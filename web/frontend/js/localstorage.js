// let username = "Ali"
// localStorage.setItem("username", username)


// let name = localStorage.getItem("username")
// console.log(name)

// let color = "red"
// localStorage.setItem("clr", color)
let lsClr = localStorage.getItem("clr")
document.body.style.backgroundColor = lsClr
// localStorage.removeItem("username")


let user = {id: 1, name: "Ali", email: "ali@email.com"}

// object to string
localStorage.setItem("user", JSON.stringify(user))

let ouruser = localStorage.getItem("user")

// string to object
document.write(JSON.parse(ouruser).email)

function clearLocalStorage(){
    localStorage.clear()
    document.body.style.backgroundColor = ""
}