var funcionarios = new Array();
var salarios = new Array();
var aumento = new Array();
var salario_aumento = new Array();
var salario_final = new Array();

var escreva_funcionarios = '';
var escreva_salarios = '';

var escreva_aumento = '' ;
var escreva_salario_final = '';

var br = '<br>'

funcionarios = ['Maria', 'Marcio', 'Denis', 'Fernando']

salarios = [2800.00, 2000.00, 3200.00, 2500.00]

aumento = [12, 23, 15, 10]

salario_aumento = [0,0,0,0]

salario_final = [0, 0, 0, 0]



for (var i = 0; i <= 3; i++)
{
    salario_aumento[i] =  ((salarios[i] * aumento[i]) / 100)

    salario_final[i] = salarios[i] + salario_aumento[i]


    if (i == 0)
    {
        escreva_funcionarios += "Funcionario" + br
        escreva_salarios += "Salário" + br
        escreva_aumento += "Aumento" + br
        escreva_salario_final += "Total" + br
    }
    escreva_funcionarios += funcionarios[i] + br
    escreva_salarios +="R$: "+ salarios[i].toFixed(2) + br
    escreva_aumento += aumento[i] + " %" + br
    escreva_salario_final += 'R$:'+salario_final[i].toFixed(2) + br
}

document.getElementById('nome').innerHTML = escreva_funcionarios

document.getElementById('salario').innerHTML = escreva_salarios

document.getElementById('aumento').innerHTML = escreva_aumento

document.getElementById('salario_final').innerHTML = escreva_salario_final