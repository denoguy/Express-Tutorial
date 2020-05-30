const path = require('path')
const express = require('express')


const publicPath = path.join(__dirname, '../public')
const app = express()


app.use(express.static(publicPath));



app.get('', (req, res) => {
    res.send('<h1>Hello Express</h1>')
})

app.get('/about', (req, res) => {
    res.send({
        name : 'Lokendra',
        age: 24
    })
})

app.get('/user', (req, res) => {
    res.send([
        {
            name : 'Kapendra',
            age: 34
        },
        {
            name : 'Lalit',
            age: 23
        }
    ])
})

app.get('/admin', (req, res) => {
    res.send('Admin page')
})

app.listen(3000, () => {
    console.log('Server is started')
})
