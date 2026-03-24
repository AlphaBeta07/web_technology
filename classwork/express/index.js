const express =  require('express')
const port = 3000
const app = express()

app.get('/', (req, res) => {
    res.send('Hello jii')
})

app.get('/app', (req, res) => {
    res.send('this is the main page')
})

app.get('/about', (req, res) => {
    res.send('you are in about page')
})

app.get('/contact', (req, res) => {
    res.send('you are in contact page')
})

app.get('/tech', (req, res) => {
    res.send('you are in technology page')
})

app.listen(port, ()=>{
    console.log(`Running on http://localhost:${port}`);  
})