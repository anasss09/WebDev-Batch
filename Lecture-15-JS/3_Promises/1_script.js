// Syntax
// let p = new Promise(function(resolve,reject){});
// resolve ko call krna mtlb fulfill ho gaya
// reject ko call krna mtlb fail ho gaya

// p.then(resolve_ki_definition,reject_ki_definition);
// p.then(resolve_ki_definition).catch(reject_ki_definition);

let dukankhulih = false;

let p = new Promise(function(resolve, reject) {

    setTimeout(function() {
        if(dukankhulih) {
            resolve("Mill gyi maggie")
        } else {
            reject("Tullu lele")
        }
    }, 2000)
})


p.then(function(millGyi) {
    console.log("Status", millGyi);
})
.catch(function(tullu) {
    console.log("Status", tullu);
})