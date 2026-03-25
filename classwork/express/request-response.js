const express =  require('express')
const port = 3000
const app = express()

app.get('/user', (req, res) => {
    console.log(req.query.name);
    
    // res.send('Hello jii')
})

app.listen(port, ()=>{
    console.log(`Running on http://localhost:${port}`);  
})