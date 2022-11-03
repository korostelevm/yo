const path = require('path')
const express = require('express')
const app = express()

app.all('/', (req, res) => {
    console.log(Date.now())
    console.log(req.headers)
    res.json(req.headers)
})
app.listen(process.env.PORT || 3000)
