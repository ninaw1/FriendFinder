// call our package express and have it listen to our server 
const express = require('express')
const { join } = require('path')
const app = express()

// identify the middleware we are relying on
app.use(express.static(join(__dirname, '/public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const routes = require('./routes/index.js')

routes(app)

app.listen(process.env.PORT || 3000)