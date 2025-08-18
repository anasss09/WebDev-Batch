let a = 10;

function add(a,b) {
    return a+b;
}

function isPrime(n) {
    for(let i=2; i<n/2; i++) {
        if(n%i == 0) return false
    }

    return true;
}


module.exports = {
    a,
    add,
    isPrime
}