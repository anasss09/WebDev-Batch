let obj = {
    a: 1,
    b: "Hello",
    "HelloWorld": "Earth",
    "": "Empty String",
    " ": "Space"
}

// console.log(obj.a)
// console.log(obj.HelloWorld)
// console.log(obj[" "])
// console.log(obj[""])

for(let k in obj) {
    console.log(obj[k])
}