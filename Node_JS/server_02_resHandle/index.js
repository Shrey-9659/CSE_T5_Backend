const http = require("http")
// To send response data : res.write(), res.end()

const app = http.createServer((req, res) => {
    if(req.url == "/"){
        console.log("welcome to home page")
        res.write("Welcome to home page")
        res.end()
    }else if(req.url == "/contact"){
        console.log("welcome to contact page")
        res.end("Welcome to contact page")
    }else{
        console.log("404 : Page Not Found")
        res.write("Page not found - 1")
        res.write("Page not found - 2")
        res.write("Page not found - 3")
        res.end("Page not found - 4")
        // res.end("Page not found - 5")
        // res.end("Page not found - 6")
    }
});

app.listen(3000, () => {
    console.log("Server started...")
})