function maggielaa(cb) {
    console.log("Maggie lene gya")
    setTimeout(function() {
        console.log("Maggie le aaya")
        cb(maggiekha)
    }, 2000);
}

function maggiebna(cb) {
    console.log("Maggie bnana start")
    setTimeout(function() {
        console.log("Maggie bnana end")
        cb()
    }, 2000);
}

function maggiekha() {
    console.log("Maggie khana starts")
    setTimeout(function() {
        console.log("Maggie khana ends")
    }, 2000);
}


maggielaa(maggiebna)
