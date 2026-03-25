const express = require("express")

const app = express()

// serverName.methodName("/route", callBackFunction)
app.get("/", (req, res) => {
    res.send("Welcome to home page")
    // res.send() -- to send Data
    // res.sendFile() -- to send file
    // res.json() -- to send JSON data
})

app.listen(3000, ()=>{
    console.log("Server started...")
})