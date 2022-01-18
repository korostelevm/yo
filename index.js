const express = require('express')
const app = express()
app.get('/.well-known/acme-challenge/fSCRWNtik5GSdmFLciA0dknDE_a0B0epnXgR_ryb0yA', function(req, res, next) {
    res.send('fSCRWNtik5GSdmFLciA0dknDE_a0B0epnXgR_ryb0yA.MTQOQK0Xn3fJb5gyz1fkA-ubDenzde3eXrt1mXDP7q8');
});

app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.json(req.headers)
})
app.listen(process.env.PORT || 3000)
