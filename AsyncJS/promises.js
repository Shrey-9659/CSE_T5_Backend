let promiseDone = false;
let newPromise = new Promise((resolve, reject) => {
    if(promiseDone){
        console.log("I scored 9+ CGPA")
        resolve("Shrey Khandelwal");
    }else{
        console.log("I did not score 9+ CGPA")
        reject();
    }
});
newPromise
.then((data) => {
    console.log("Promise is resolved")
    console.log(data)
})
.catch(() => {
    console.log("Promise is rejected")
})
.finally(() => {
    console.log("I will run all the time")
})