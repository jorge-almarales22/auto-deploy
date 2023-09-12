import express from "express"
const app = express()

app.get('/', function (req, res) {
  res.json({"message": `Branch ${process.env.BRANCH_NAME}`})
})

app.listen(3000)