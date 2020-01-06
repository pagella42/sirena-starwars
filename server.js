
let express = require('express')
let app = express()
let bodyParser = require("body-parser")
const request = require('request')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



//allow foregin requests (ONLY FOR DEV MODE)
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

  next()
})



app.get('/peliculas', function(req, res){

  
  request('https://swapi.co/api/films', function(err, response){
    if(response.statusCode == 200){
      res.send(JSON.parse(response.body).results)
    }
    else{
      console.log('error')
    }
  })
})


app.get('/personajes', function(req, res){

  
  request('https://swapi.co/api/people', function(err, response){
    if(response.statusCode == 200){
      res.send(JSON.parse(response.body).results)
    }
    else{
      console.log('error')
    }
  })
})






app.listen(5000)