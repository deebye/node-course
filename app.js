const express = require('express')
const app = express()

app.use('/add/:id', (req, res) => {
    console.log('First middleware', req.params)
    res.send('<h1>Add!</h1>')
})

app.use('/', (req, res) => {
    console.log('Second middleware')
    res.send('<h1>Hello from Express!</h1>')
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})