import express from "express"
const app = express()

app.get('/', function (req, res) {
  res.json({"message": "HOLA MUNDOOOOO!!!!!"})
})

app.listen(3000)