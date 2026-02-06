// setTimeout(function, timeMS)
console.log("one")
let timer = setTimeout(() =>{
    console.log("two")
}, 1000)
setTimeout(() =>{
    console.log("four")
}, 2000)
console.log("three")

// clearTimeout(reference)
clearTimeout(timer)