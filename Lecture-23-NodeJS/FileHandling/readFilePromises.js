const fs = require('fs/promises')

filepath = __dirname + '/data.json'

// fs.readFile(filepath)
//     .then((data) => {
//         const jsonData = JSON.parse(data)
//         console.log(jsonData.date);
        
        
//     }).catch((err) => {
//         console.log(err);
        
//     })


// fs.readFile(filepath, {
//     encoding: 'utf-8' // encoding pehle hi lgane se buffer nhi aega.
// })
//     .then((data) => {
//         const jsonData = JSON.parse(data)
//         console.log(jsonData.text);
        
        
//     }).catch((err) => {
//         console.log(err);
        
//     })


// fs.readFile(filepath)
//     .then((data) => {
//         console.log(data.toString());
        
        
//     }).catch((err) => {
//         console.log(err);
        
//     })


async function getData() {
    try {
        let data = await fs.readFile(filepath);
        data = JSON.parse(data);
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}

getData();