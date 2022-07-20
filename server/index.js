const express = require('express')
const path = require('path')

const app = express()

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontEnd/index.html'))
})

app.get('/css', (req, res) =>{
    res.sendFile(path.join(__dirname, '../frontEnd/styles.css'))
})

app.get('/js', (req, res) =>{
    res.sendFile(path.join(__dirname, '../frontEnd/main.js'))
})

const port = process.env.PORT || 4005

app.listen(port, () => {
    console.log(`Server is runing on port ${port}`)
})