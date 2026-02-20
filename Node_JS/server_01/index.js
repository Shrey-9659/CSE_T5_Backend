const http = require("http")

const app = http.createServer((req, res) => {
    console.log(req.url)
});

app.listen(3000, () => {
    console.log("Server is running...")
})

// -- / -> Welcome to home page
// -- /about -> Welcome to about page
// -- -> 404 page not found