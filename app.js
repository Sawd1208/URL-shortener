const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')


const urlId = require('./generate')
const routes = require('./routes')
require('./config/mongoose')

const app = express()

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(routes)

app.listen(3000, () => {
  console.log('The App is running on http://locaolhost/3000')
})