const express = require("express")
const path = require("path")
const users = require("./users.json")
const aboutPageFileLocation = path.join(__dirname, "index.html")
const app = express()

// serverName.methodName("/route", callBackFunction)
app.get("/", (req, res) => {
    res.send("Welcome to home page")
    // res.json() -- to send JSON data
})

app.get("/about", (req, res) => {
    res.sendFile(aboutPageFileLocation)
})

app.get("/users", (req, res) => {
    res.json({
        name : "Shrey",
        location : "Solan",
        university : "Shoolini",
        year : 2026
    })
})

// API route
app.get("/api/users", (req, res) => {
    res.json(users)
})

// Dynamic Routing
app.get("/api/users/:id", (req, res) => {
    const providedId = parseInt(req.params.id)
    let myUser = users.find((user) => {
        return user.id == providedId
    })
    if(myUser){
        res.json(myUser)
    }else{
        res.json({
            success : "False",
            Info : "No user found with the provided id"
        })
    }
})

app.listen(3000, ()=>{
    console.log("Server started...")
})