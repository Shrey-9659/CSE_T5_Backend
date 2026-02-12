let text = document.getElementById("text")
let btn = document.getElementById("btn")
let api = "https://api.quotable.io/random"

btn.addEventListener("click", () => {
    fetch(api)
    .then((rawData) => {
        return rawData.json()
    })
    .then((res) => {
        // Actual Data
        // console.log(res.content)
        text.innerText = res.content

    })
    .catch((err) => console.log(err))
})