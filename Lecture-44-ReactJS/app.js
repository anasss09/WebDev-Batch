const express = require('express')
const app = express()
const PORT = 3000
const path = require('path')

app.use(express.static(path.join(__dirname, 'static')))

app.listen(PORT, () => {
    console.log(`localhost:${PORT}`);
})