const http = require("http")
const fs = require("fs")

const app = http.createServer((req, res) => {
    // Writing in a file
    // Sync way
    fs.writeFileSync("example.txt", "Sync way") 
    // Async way 
    fs.writeFile("exampleAsync.txt", "Async way of writing in a file", (err, data) => {
        if(err){
            console.log("Error in writing in a file")
        }else{
            console.log("data added successfully")
        }
    })
})

app.listen(3000, () => {
    console.log(`http://localhost:3000`)
})