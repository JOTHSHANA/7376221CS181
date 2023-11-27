const express = require('express')
const app = express()
const PORT = 3000

app.get('/', (req, res) =>
    res.send('Hello World!\n7376221CS181 - JOTHSHANA S M'))

app.listen(PORT, () => console.log(
    `Example app listening at http:localhost:${PORT}`
))