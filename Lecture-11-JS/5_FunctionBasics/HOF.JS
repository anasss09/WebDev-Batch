// function OF() {
//     function IF() {
//         console.log("Inside Inner function ")
//     }

//     return IF;
// }

// let f = OF()
// f()

// function add(a, b) {
//     return a+b;
// }

// function sub(a, b) {
//     return a-b;
// }

// function operation(add, sub) {
//     console.log(add(10, 20));
//     console.log(sub(20, 10));
// }

// operation(add, sub)





function operation(add, sub) {
    console.log(add(10, 20));
    console.log(sub(20, 10));
}

operation(function add(a, b) {
    return a+b;
}, function sub(a, b) {
    return a-b;
});