require('dotenv').config() 
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter', (req, res) => {
  res.send('www.twitter.com')
})
app.get("/login",(req,res) => {res.send(' <a href="https://www.w3schools.com">W3Schools</a>   ');})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
