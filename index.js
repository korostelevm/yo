const path = require('path')
const express = require('express')
const app = express()



function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

app.get('/sleep/:secs', async (req,res)=>{
    console.log(`sleeping ${req.params.secs}`)
    for(let i=0; i<=(+req.params.secs); i++){
        console.log(i)
        await sleep(1000)
    }
    
    
    return res.send(`slept ${req.params.secs}`)
})
app.all('/file',(req,res)=>{
    res.sendFile(path.resolve(__dirname, "./image.png"));
})

app.all('/', (req, res) => {
    
    res.cookie(`c`,Buffer.from('yo').toString('base64'), { 
    domain: 'cyclic-app.com',
    maxAge: 900000, httpOnly: true });
    
    console.log("Just got a request!")
//     res.statusCode = 401
//     res.setHeader('WWW-Authenticate','Basic')
    return res.send('ok')
})
app.listen(process.env.PORT || 3000)
