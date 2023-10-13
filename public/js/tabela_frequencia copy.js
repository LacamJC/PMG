var xi = new Array();
var fi = new Array();
var facum = new Array();
var frel = new Array();
var frel_acum = new Array();
var escreva = "";
var escreva_fi = "";
var escreva_facum = "";
var escreva_frel = "";
var escreva_frel_acum = "";
var caso = "";
var acumula = 0;
var acumula_frel = 0;
var a = "";


window.alert("Esta tabela foi projetado baseado em um dado de 6 lados, logo ele so pode estar correto se seus dados forem baseados do XI de 1 a 6.")


for(i=0; i<=10; i++)
{
    caso = window.prompt('Valor inválido, digite novamente (s/n): ')
    if (caso == 's')
    {
        break;
    }

    if (caso == 'n')
    {
        break;
    }
    i--;
}

if (caso == "s")
{

    fi[0] = parseInt(window.prompt("Quantas vezes caiu o valor 1"))
    fi[1] = parseInt(window.prompt("Quantas vezes caiu o valor 2"))
    fi[2] = parseInt(window.prompt("Quantas vezes caiu o valor 3"))
    fi[3] = parseInt(window.prompt("Quantas vezes caiu o valor 4"))
    fi[4] = parseInt(window.prompt("Quantas vezes caiu o valor 5"))
    fi[5] = parseInt(window.prompt("Quantas vezes caiu o valor 6"))
}

else if (caso == 'n')
{
    fi = [2,5,2,2,5,4]
}



xi = [1,2,3,4,5,6]

facum = [0,0,0,0,0,0]

frel = [0,0,0,0,0,0]

frel_acum = [0,0,0,0,0,0]

for (var i=0; i<6; i++)
{
    acumula += fi[i]
    facum[i] = acumula
}

for (var i=0; i<6; i++)
{
    frel[i] = (fi[i] / facum[5]) * 100
    acumula_frel += frel[i]
    frel_acum[i] = acumula_frel
}



for (var i=0; i<6; i++)
{
    if(i==0)
    {
        escreva += "xi<br>"
        escreva_fi += "fi<br>"
        escreva_facum += "facum<br>"
        escreva_frel += "frel<br>"
        escreva_frel_acum += "frelacum<br>"
        
    }

    escreva += parseInt(xi[i])+'<br>';
    escreva_fi += parseInt(fi[i])+'<br>';
    escreva_facum += parseInt(facum[i]) + '<br>';
    escreva_frel += parseInt(frel[i])+'<br>';
    escreva_frel_acum += parseInt(frel_acum[i]) + '<br>';
}
document.getElementById('xi').innerHTML = escreva;
document.getElementById('fi').innerHTML = escreva_fi;
document.getElementById('facum').innerHTML = escreva_facum;
document.getElementById('frel').innerHTML = escreva_frel;
document.getElementById('frel_acum').innerHTML = escreva_frel_acum;


document.getElementById('valores').innerHTML = a;