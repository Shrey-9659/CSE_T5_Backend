const http = require("http")
const fs = require("fs")

const app = http.createServer((req, res) => {
    // Writing in a file

    // Sync way
    // fs.writeFileSync("example.txt", "Sync way")

    // Async way
    // fs.writeFile("exampleAsync.txt", "Async way of writing in a file", (err, data) => {
    //     if(err){
    //         console.log("Error in writing in a file")
    //     }else{
    //         console.log("data added successfully")
    //     }
    // })


    // Reading a file

    // Sync
    // let readData = fs.readFileSync("example.txt", "utf-8")
    // console.log(readData)

    // Async
    // fs.readFile("example.txt", "utf-8", (err, data) => {
    //     if(err) console.log(err)
    //         else console.log(data)
    // })

    // Appending in a file

    // Sync
    // fs.appendFileSync("example.txt", "Naya Data append ho gaya")

    // Async
    // fs.appendFile("example.txt", "Async data append kr diya", (err, data) => {
    //     if(err) console.log(err)
    //         else console.log("Data appending successfully")
    // })

    // Copying a file
    // fs.cpSync("example.txt", "copyFile.txt")

    // Deleting a file
    // fs.unlink("copyFile.txt", (err, data) => {
    //     if(err) console.log(err)
    //         else console.log("File deleted")
    // })

    // Stats of a file
    // let stats = fs.statSync("example.txt")
    // console.log(stats)

})

app.listen(3000, () => {
    console.log(`http://localhost:3000`)
})