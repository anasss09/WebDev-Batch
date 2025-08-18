const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

let cbDB = undefined

async function main() {
    return client.connect().then((client) => {
        cbDB = client.db('codingBlocks')
    })
}

function getDB() {
    if(cbDB != undefined) return cbDB;
    return null;
}


module.exports.mongoConnect = main;
module.exports.getDB = getDB