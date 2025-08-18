const fs = require('fs/promises')

let filepath = __dirname + '/data.json'

let data = {
    text : 'Hello World',
    date : '06/07/2025',
    time : 11.40,
    Location : "Delhi"
}

fs.writeFile(filepath, JSON.stringify(data))
    .then(() => {
        console.log('Done');
        
    })
    .catch((err) => {
        console.log(err);
        
    })