const path = require('path')
const express = require('express')
const app = express()
var AWS = require("aws-sdk");
// AWS.config.update({
//   region: process.env.AWS_REGION || "us-east-2",
// });
let s3 = new AWS.S3()


process.env.CYCLIC_DB = 'glamorous-battledress-tickCyclicDB'



const CyclicDb = require('cyclic-dynamodb')
let j = CyclicDb.collection('junk')


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
app.get('/s3',async (req,res)=>{
    let obj = await s3.getObject({
        Bucket: 'cyclic-glamorous-battledress-tick-us-east-2',
        Key: 'Screen Shot 2022-05-10 at 3.41.07 PM.png'
    }).promise()
    // console.log(obj)
    res.set('content-type',obj.ContentType)
    res.send(obj.Body)
})

app.all('/file',(req,res)=>{
    
    
    res.sendFile(path.resolve(__dirname, "./image.png"));
})

app.get('/error', async (req,res)=>{
    throw 'error'
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
        message: 'main bdddranch1'
    })
})

app.get('/junk', async (req, res)=>{
       let last_req = await j.get('last_req')
       await j.set('last_req', req.headers)
       let props = last_req.props || {}
       return res.json({
           'user-agent': props['user-agent'],
           updated: props.updated
           
       })
})

app.get('/ifttt', (req, res)=>{
console.log('yyyy')
res.status(200).send('ok')
})
app.listen(3000)
