const path = require('path')
const express = require('express')
const app = express()

//process.env.CYCLIC_DB = 'glamorous-battledress-tickCyclicDB'



//const CyclicDb = require('cyclic-dynamodb')
//let j = CyclicDb.collection('junk')


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

app.all('/', async (req, res) => {
    console.log(process.env)
//    let last_req = await j.get('last_req')
//    await j.set('last_req', req.query)

    res.cookie(`c`,Buffer.from('yo').toString('base64'), { 
    domain: 'cyclic-app.com',
    maxAge: 900000, httpOnly: true });
    
    console.log("Just got a request!")
//     res.statusCode = 401
//     res.setHeader('WWW-Authenticate','Basic')
    return res.json({
        message: 'main branch1'
    })
})

app.get('/ifttt', (req, res)=>{
res.status(200).send('ok')
})
app.listen(3000)
