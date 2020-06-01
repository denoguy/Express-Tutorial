const path = require('path')
const express = require('express')


const publicPath = path.join(__dirname, '../public')
const viewPath = path.join(__dirname, '../templates')
const app = express()

app.set('view engine', 'hbs')
app.set('views', viewPath)
app.use(express.static(publicPath));

app.get('', (req, res) => {
    res.render('index', {
        name: 'Lokendra Dangi',
        title: 'I am Home Page'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Page',
        course: 'express Course'
    })
})
app.listen(3000, () => {
    console.log('Server is started')
})
