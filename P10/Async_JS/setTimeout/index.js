let text = document.getElementById("text")
let change = document.getElementById("change")
let dont = document.getElementById("dont")
let changeText;

change.addEventListener("click", () => {
    changeText = setTimeout(() => {
        text.innerText = "Text is changed successfully"
    }, 3000)
})

dont.addEventListener("click", () => {
    clearTimeout(changeText)
})
