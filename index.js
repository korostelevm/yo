const path = require('path')
const express = require('express')
const app = express()
const axios = require('axios')

app.all('*', async (req, res) => {
    console.log('Recieved request')
    let r = await    axios.get(`https://api.techniknews.net/ipgeo/${req.headers['x-forwarded-for']}`)

    console.log('ip lookup...')
    console.log(r.data)
    res.json(req.headers)
})
app.listen(process.env.PORT || 3000)
