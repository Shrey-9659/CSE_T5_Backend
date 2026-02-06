// setInterval(function, timeInMS)

let everySecond = setInterval(() => {
    console.log("First")
}, 1000)

// clearInterval(reference)
setTimeout(() => {
    clearInterval(everySecond)
},5000)