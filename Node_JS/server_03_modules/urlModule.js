const domain = "https://www.youtube.com/watch?v=eILUmCJhl64&name=shrey"
// https - Protocol
// www.youtube.com - Domain/Hostname
// /watch - Path
// /watch/video - Path (Nested Path)
// v=eILUmCJhl6 - Query
// v=eILUmCJhl6&name=shrey - Query/SearchParams

const http = require("http")
const url = require("url")

const app = http.createServer((req, res) => {
    const myurl = url.parse(req.url)
    console.log(myurl.pathname)
    if(myurl.pathname === "/submit"){
        res.end("Form submitted by Shrey")
    }
})

app.listen(3000, () => {
    console.log("Server started...")
})