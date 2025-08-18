//Let create function to add 1sec of delay.
//endTime - startTime ≥ 1 sec.

function delayOneSec() {
    let currTime = new Date().getTime();

    while(new Date().getTime() - currTime < 1000) {

    }
}

function delayNSec(n) {
    let count = 0;
    for(let i=0; i<n; i++) {
        console.log("Sec ", count);
        count++;
        delayOneSec()

    }
}

delayNSec(10);

console.log("Hello World")