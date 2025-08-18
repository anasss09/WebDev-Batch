const fs = require('fs')

let filepath = __dirname + '/data.json'

fs.readFile(filepath, 'utf-8', (err, data) => {
    if(err) {
        console.log(err);
        
    } else {
        let jsn = JSON.parse(data)
        console.log(jsn.text);
        
    }
})