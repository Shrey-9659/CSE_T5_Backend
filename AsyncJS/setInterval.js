// setInterval(() => {
//     console.log("first")
// }, 1000)
let count = 0;
let num = setInterval(()=>{
    console.log(count)
    count++
},1000)

setTimeout(() =>{
    clearInterval(num)
}, 10000)