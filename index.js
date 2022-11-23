const express = require('express')
const app = express()
const router = express.Router()

router.get('*', async (req, res)=>{
    console.log(req.path)
    console.log(req.headers)
    console.log("Just got a request!")
    console.log(req.query)
    console.log(req.url)
    return res.json({
        message: 'ok',
        h: req.headers,
        q: req.query,
        route: req.url
    })
})

app.use(router)


app.listen(3001)
