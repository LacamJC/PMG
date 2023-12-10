// npm intall express
// npm install ejs 
// npm install mysql2 
// npm install sequelize
//So testando
var express = require('express')

var aplicacao = express()

const rotas = require('./routes/router')

const bodyParser = require('body-parser')

aplicacao.use(express.json())

aplicacao.use('/', rotas)
//So de sacas
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
    var facum = []
    var acumula =0;
    var frel = [];
    var frelAcum = [];
    console.log(fi)

    for(i=0; i < 6; i++)
    {
        acumula += parseInt(fi[i]);
        facum.push(acumula);

        fi[i] = parseInt(fi[i]);
        facum[i] = parseInt(facum[i]);
  
    }
    acumula=0;
    for(i=0; i< 6; i++)
    {
        frel[i] = ((fi[i]/facum[5]) * 100).toFixed(2);
        acumula += Number(frel[i])
        frelAcum.push(acumula.toFixed(2))
        
    }
    console.log(`FI: ${fi} \nFACUM: ${facum} \nFREL: ${frel} \nFREACUM: ${frelAcum}`)
    



    res.render("../views/math/frequencia.ejs", {x:x, fi:fi, facum:facum, frel:frel, frelAcum:frelAcum})
})