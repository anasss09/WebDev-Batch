let lib1 = require('./lib1')

console.log('Running lib2 File');

let b = 20;

module.exports = {
    b,
    lib1
}