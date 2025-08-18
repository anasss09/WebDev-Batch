function promise () {
    return new Promise(function(resolve, reject){
        setTimeout(function() {

            let dukaan = false;
            if(dukaan) {
                resolve("Mill gyi")
            } else {
                reject("Tullu lele")
            }
        }, 2000);
    })
}

promise().then(function(msg) {
    console.log("Status", msg);
}).catch(function(err) {
    console.log("Status", err)
})