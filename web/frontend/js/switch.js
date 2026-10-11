function findDay () {
    let dayNumber = Number(document.getElementById("day-number").value)
    switch(dayNumber){
        case 1:
            console.log("Monday")
        case 2:
            console.log("Tuesday")
            break
        case 3:
            console.log("Wednesday")
            break
        case 4:
            console.log("Thrusday")
            break
        default:
            console.log("Something went wrong")
    }
}