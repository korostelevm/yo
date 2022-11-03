const path = require('path')
const express = require('express')
const app = express()
const axios = require('axios')

app.all('*', async (req, res) => {
    console.log('Recieved request, looking up ip...')
    let r = await    axios.get(`https://api.techniknews.net/ipgeo/${req.headers['x-forwarded-for']}`)
    console.log({
      continent: r.data.continent,
      country: r.data.country,
      countryCode: r.data.countryCode,
      regionName: r.data.regionName,
      city: r.data.city,
      lat: r.data.lat,
      lon: r.data.lon,
    })
    res.json(r.data)
})
app.listen(process.env.PORT || 3000)
