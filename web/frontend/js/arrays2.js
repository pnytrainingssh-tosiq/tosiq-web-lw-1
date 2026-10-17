const languages = ["urdu", "english", "persian", "hindi", "turkish"]
let list = document.getElementById("lngs")

for (let i = 0; i < languages.length; i++){
    list.innerHTML += `<option>${languages[i]}</option>`
}

// map, filter, find, reduce, some

const employees = [
    {id: 1, name: "Alexa", salary: 40000, status: "active"},
    {id: 2, name: "Samith", salary: 140000, status: "inactive"},
    {id: 3, name: "Zia", salary: 45000, status: "active"},
    {id: 4, name: "Huraira", salary: 30000, status: "inactive"},
    {id: 5, name: "April", salary: 8000, status: "active"},
]

showData(employees)
function showData(data) {
    let list = document.getElementById("list")
    data.map((emp) => {
        list.innerHTML += `
        <tr>
            <td>${emp.id}</td>
            <td>${emp.name}</td>
            <td>${emp.salary}</td>
            <td>${emp.status}</td>
        </tr>
        `
    })
}


