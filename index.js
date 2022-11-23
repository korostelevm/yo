const express = require('express')
const app = express()
const router = express.Router()

router.get('/', async (req, res)=>{
    console.log(req.headers)
    console.log("Just got a request!")

    return res.json({
        message: 'ok'
    })
})



app.listen(3000)
