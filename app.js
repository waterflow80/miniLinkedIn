var express = require('express')
import {resumeToUserMap} from './controllers/resume_controller'

var app = express()
app.use(express.json())
app.use(express.urlencoded())

// set the view engine to ejs
app.set('view engine', 'ejs');

// !Important for any file that will be sent in the result
app.use(express.static('views'))

// TODO: request logger middleware

app.get("/", (req, res) => {
  res.render('index.ejs')
})

app.get("/resume", (req, res) => {
  res.render('resume_form.ejs')
})

app.post("/resume/preview", (req, res) => {
  console.log(req.body)
  console.log(typeof req.body)
  let resume = req.body;
  let user1 = resumeToUserMap(resume)
  
  console.log("location: ", user1.getLocation())
  console.log("locationres: ", resume["location"])
  res.render('resume_template.ejs', {user: user1})
})

app.get("/resume/preview", (req, res) => {
  res.render('resume_template.ejs')
}) 

app.listen(8081)
console.log("Listening on port 8081")