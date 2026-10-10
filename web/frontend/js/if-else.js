// var isLoggedin = false

// if (isLoggedin) { // condition true
//     console.log("User loggedin successfull")
// } else { // condition false
//     console.log("Given credentials are invalid")
// }

// leap year code here


function checkLeapYear(){
    var year = document.getElementById("year").value
    // 0000 => 1000 9999
    if (year.length != 4) {
        alert("Invalid entry")
        return;
    }

    if (!year) {
        alert("Please provide year")
        return;
    }

    if (year % 4 == 0) {
        console.log(year,"is leap year")
    } else {
        console.log(year,"is not leap year")
    }
}