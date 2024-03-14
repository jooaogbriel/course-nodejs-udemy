const http = require('http');
const express = require('express')
const routes = require('./routes')
const bodyParser = require('body-parser');

const app = express()
app.use(bodyParser.json());
app.use('/add-product', (req, res, next) => {
    res.send('<form action="/product"><input type="text" name="title"><button type="submit">Send</button></form>')
})
app.use('/product', (req, res, next)=> {
    console.log(req.body)
    res.redirect('/')
})

const server = http.createServer(routes.handler)
app.listen(3003)
