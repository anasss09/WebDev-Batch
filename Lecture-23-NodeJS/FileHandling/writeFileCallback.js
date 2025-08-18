const fs = require('fs')

filepath = __dirname + '/data.json'

let data = {
    text : 'Hello World',
    date : '06/07/2025',
    time : 11.40,
    Location : "Delhi"
}

fs.writeFile(filepath, JSON.stringify(data), (err) => {
    if(err) {
        console.log(err);
        
    } else {
        console.log("Done");
        
    }
})