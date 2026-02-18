let text = document.getElementById("text")
let btn = document.getElementById("btn")
let api = "https://api.quotable.io/random"

btn.addEventListener("click", async () => {
    try{
        let rawData = await fetch(api)
    let res = await rawData.json()
    text.innerText = res.content
    }catch(error){
        console.log(error)
    }
})