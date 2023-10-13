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


aplicacao.post("/freTabela", function(req,res) {
    // console.log("AOIDHIUOASHDOIUSOPADHAPIDH");
    var x=6;
    var fi = [req.body.valor1,req.body.valor2,req.body.valor3,req.body.valor4,req.body.valor5,req.body.valor6]
    console.log(fi)
    



    res.render("../views/math/frequencia.ejs", {x:x, fi:fi})
})