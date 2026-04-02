const express = require("express")
const path = require("path")
const fs = require("fs")
const users = require("./users.json")

const homePage = path.join(__dirname,"/views/HomePage/index.html")
const formPage = path.join(__dirname,"/views/RegistrationPage/index.html")
const submitPage = path.join(__dirname,"/views/SubmittedPage/index.html")

const app = express()


// Home Page
app.get("/", (req, res) => {
    res.sendFile(homePage)
})

// Form Page
app.get("/home/form", (req, res) => {
    res.sendFile(formPage)
})


// Submit Page
// Middlewares : 
app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.get("/home/submit", (req, res) => {
    res.redirect("/home/form")
})
app.post("/home/submit", (req, res) => {
    // const newDataToAdd = {msg : "New data added"}
    const userData = req.body
    const length = users.length
    users.push({id : length+1, ...userData})
    
    fs.writeFileSync("users.json", JSON.stringify(users))
    fs.readFile(submitPage, "utf-8", (err, data) => {
        if(err) console.log(err)
            else {
        const newData = data
        .replace("{firstName}", userData.firstName)
        .replace("{lastName}", userData.lastName)
        .replace("{email}", userData.email)
        .replace("{title}", userData.jobTitle)
        res.send(newData)
    }
    })    
})

app.listen(3000, () => {
    console.log("Server started...")
})

// 1. user.json ka data index.js m chahiye, [{},{},{}]
// 2. newData {}, isko userData m push karna hoga - [{},{},{},{new}]
// 3. user.json ko update kar dena pdega
