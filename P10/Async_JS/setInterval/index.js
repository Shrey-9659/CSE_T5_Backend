let timer = document.getElementById("timer")
let start = document.getElementById("start")
let stop = document.getElementById("stop")
let reset = document.getElementById("reset")
let active = false;
let time = 0;
let startTimer;


start.addEventListener("click", () => {
    if(!active){
        startTimer = setInterval(() => {
        time++;
        timer.innerText = `${time}`
        active = true
    }, 1000)
    }
})
stop.addEventListener("click", () => {
    clearInterval(startTimer)
})

reset.addEventListener("click", () => {
    clearInterval(startTimer);
    time = 0;
    timer.innerText = `${time}`
})