import express from "express"
import 'dotenv/config'
const app = express()

app.get('/', function (req, res) {
  res.json({"message": `ahora estamos subiendo todooos los cambios`})
})

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`)
})