import express from "express"
const app = express()

app.get('/', function (req, res) {
  res.json({"message": "Hello World"})
})

app.listen(4000)