// npm intall express
// npm install ejs 
// npm install mysql2 
// npm install sequelize

var express = require('express')

var aplicacao = express()

const rotas = require('./routes/router')

const bodyParser = require('body-parser')

aplicacao.use(express.json())

aplicacao.use('/', rotas)

aplicacao.use(bodyParser.urlencoded({extendend:false}))

aplicacao.use(express.static(__dirname + '/public'))

aplicacao.set('view engine', 'ejs')

aplicacao.listen(3000, function(req,res) {
    console.log("Servidor aberto")
})