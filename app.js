var express = require('express')
var app = express()

app.use(express.static('views'))

app.get("/", (req, res) => {
  res.render('index.ejs')
})

app.get("/resume", (req, res) => {
  res.render('resume_form.ejs')
})

app.get("/resume/preview", (req, res) => {
  res.render('resume_template.ejs')
}) 

app.listen(8081)
console.log("Listening on port 8081")