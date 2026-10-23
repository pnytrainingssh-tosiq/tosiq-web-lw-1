const quotes = [
    {id: 1, author: "Alexander", quote: "Alexander quote 1"},
    {id: 2, author: "Alexander", quote: "Alexander quote 2"},
    {id: 3, author: "John", quote: "John quote 1"},
    {id: 4, author: "Sam", quote: "Sam quote 1"},
    {id: 5, author: "Sam", quote: "Sam quote 2"},
    {id: 6, author: "John", quote: "John quote 2"},
    {id: 7, author: "Alexander", quote: "Alexander quote 3"},
    {id: 8, author: "Harry", quote: "Harry quote 1"},
    {id: 9, author: "Harry", quote: "Harry quote 2"},
    {id: 10, author: "Sam", quote: "Sam quote 3"},
]

showAllQuotes(quotes)
function showAllQuotes (data) {
    let tbl = document.getElementById("quote-tbl")

    data.map((q) => {
        tbl.innerHTML += `
        <tr class="hover:bg-gray-100">
            <td class="px-3 py-4">${q.id}</td>
            <td class="px-3 py-4">${q.author}</td>
            <td class="px-3 py-4">${q.quote}</td>
        </tr>
        `
    })
}

// filtering data 
function filterByAuthor () {
    let author = document.getElementById("author").value
    
    let tbl = document.getElementById("quote-tbl")
    tbl.innerHTML = ""

    if (author == "all") {
        showAllQuotes(quotes)
    } else {
        const filteredData = quotes.filter((q) => q.author == author)
        showAllQuotes(filteredData)
    }
}