const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  const date = new Date();
  res.json({
    message : "Hello jii",
    time : date
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
