const fs = require('fs/promises')
const path = require('path')

let file1 = path.join(__dirname, 'data.json');       //__dirname + '/data.json'
let file2 = path.join(__dirname, 'data1.json');
let outpath = path.join(__dirname, 'output.json');



async function getData(file1, file2) {
        try {
            let data1 = await fs.readFile(file1)
            let data2 = await fs.readFile(file2)
            data1 = JSON.parse(data1)
            data2 = JSON.parse(data2)
            data = [...data1, ...data2]
            data.sort((a,b)=>a-b)
            await fs.writeFile(outpath, JSON.stringify(data))
        }
        catch(err) {
            console.log(err);
            
        }
}

getData(file1, file2)
