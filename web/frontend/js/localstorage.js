// let username = "Ali"
// localStorage.setItem("username", username)


// let name = localStorage.getItem("username")
// console.log(name)

// let color = "red"
// localStorage.setItem("clr", color)
let lsClr = localStorage.getItem("clr")
document.body.style.backgroundColor = lsClr
// localStorage.removeItem("username")

function clearLocalStorage(){
    localStorage.clear()
    document.body.style.backgroundColor = ""
}