let api = "https://jsonplaceholder.typicode.com/users"

fetch(api)
.then((data) => {
    return data.json()
})
.then((result) => {
    console.log(result)
})
.catch((error) => {
    console.log(error)
})