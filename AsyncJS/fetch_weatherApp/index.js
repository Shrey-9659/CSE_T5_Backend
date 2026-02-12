let btn = document.getElementById("btn")
let city = document.getElementById("city")
let temp = document.getElementById("temp")

btn.addEventListener("click", () => {
    let api = `https://api.weatherapi.com/v1/current.json?key=e884e49500a94e69811163154241309&q=${city.value}`
    fetch(api)
    .then(rawData => rawData.json())
    .then(res => {
        // console.log(res.current.temp_c)
        temp.innerText = res.current.temp_c
    })
    .catch(err => console.log(err))
})