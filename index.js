const path = require('path')
const express = require('express')
const app = express()
var AWS = require("aws-sdk");
const axios = require('axios')
// AWS.config.update({
//   region: process.env.AWS_REGION || "us-east-2",
// });
let s3 = new AWS.S3()
const router = express.Router()

process.env.CYCLIC_DB = 'glamorous-battledress-tickCyclicDB'
const BUCKET = 'cyclic-glamorous-battledress-tick-us-east-2'


const CyclicDb = require('cyclic-dynamodb')
let j = CyclicDb.collection('junk')


app.use('/',router)
router.post('/', (req, res)=>{
   
res.send('yo')
})

router.get('/', (req, res)=>{
    console.log('asdfasdfasf')
    console.log(Date.now())
    console.log(req.query)
    console.log(req.headers)
     process.exit()
    return res.json({yo:'yo'})
})


router.get('/123', (req, res)=>{
    console.log('error: 123')
    try{
        console.log(req.asdf.cdf)
    }catch(e){
        console.error(e)
    }
    return res.json({yo:'yo'})
})

router.get('/error/:error', (req, res)=>{
    console.error(req.params.error)
    try{
        res.statusCode = req.params.error;
        return res.json({error: req.params.error})
    }catch(e){
        res.statusCode = 400;
        return res.send('error')
    }

})

router.post('/slack', async (req, res)=>{
    let d = await axios.post(process.env.slack_url,{
        text: 'yo'
    })
    res.send(d.data)
})


router.get('/s3/:key',async(req, res)=>{
    let params = {
        Bucket: BUCKET,
        Key: `${req.params.key}`
    }
    let url = await s3.getSignedUrlPromise('getObject', params);
    res.send(url)

})

router.get('/stats/:uid/:hash',async(req, res)=>{
    console.log('image loaded')

    console.log(req.params.uid)

    let obj = await s3.getObject({
                Bucket: BUCKET,
                Key: `${req.params.uid}/${req.params.hash}`
            }).promise()
        // console.log(obj)
    res.set('content-type',obj.ContentType)
    res.send(obj.Body)

})


// function sleep(ms) {
//     return new Promise((resolve) => setTimeout(resolve, ms))
// }

// app.get('/sleep/:secs', async (req,res)=>{
//     console.log(`sleeping ${req.params.secs}`)
//     for(let i=0; i<=(+req.params.secs); i++){
//         console.log(i)
//         await sleep(1000)
//     }
    
    
//     return res.send(`slept ${req.params.secs}`)
// })
// app.get('/s3',async (req,res)=>{
//     let obj = await s3.getObject({
//         Bucket: 'cyclic-glamorous-battledress-tick-us-east-2',
//         Key: 'Screen Shot 2022-05-10 at 3.41.07 PM.png'
//     }).promise()
//     // console.log(obj)
//     res.set('content-type',obj.ContentType)
//     res.send(obj.Body)
// })

// app.all('/file',(req,res)=>{
    
    
//     res.sendFile(path.resolve(__dirname, "./image.png"));
// })

// app.get('/error', async (req,res)=>{
//     throw 'error'
// })

// app.all('/', async (req, res) => {
//     console.log(process.env)
// //    let last_req = await j.get('last_req')
// //    await j.set('last_req', req.query)

//     res.cookie(`c`,Buffer.from('yo').toString('base64'), { 
//     domain: 'cyclic-app.com',
//     maxAge: 900000, httpOnly: true });
    
//     console.log("Just got a request!")
// //     res.statusCode = 401
// //     res.setHeader('WWW-Authenticate','Basic')
//     return res.json({
//         message: 'main bdddranch1'
//     })
// })

// app.get('/junk', async (req, res)=>{
//        let last_req = await j.get('last_req')
//        await j.set('last_req', req.headers)
//        let props = last_req.props || {}
//        return res.json({
//            'user-agent': props['user-agent'],
//            updated: props.updated
           
//        })
// })

// app.get('/ifttt', (req, res)=>{
// console.log('yyyy')
// res.status(200).send('ok')
// })
app.listen(3000)
