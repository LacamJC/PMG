
if (document.getElementById('soma'))
{
    document.getElementById('soma').innerHTML = "+";
}

if (document.getElementById('subtracao'))
{
    document.getElementById('subtracao').innerHTML = "-";
}

if (document.getElementById('multiplicacao'))
{
    document.getElementById('multiplicacao').innerHTML = "X";
}

if (document.getElementById('divisao'))
{
    document.getElementById('divisao').innerHTML = "÷";
}


function soma()
{
    var txt_n1 = document.getElementById('txt_n1');
    var txt_n2 = document.getElementById('txt_n2');

    var n1 = Number(txt_n1.value);
    var n2 = Number(txt_n2.value);
    var resultado;
    resultado = n1 + n2;


    document.getElementById('resultado').innerHTML = resultado;

}

function subtracao()
{
    var txt_n1 = document.getElementById('txt_n1_1');
    var txt_n2 = document.getElementById('txt_n2_1');

    var n1 = Number(txt_n1.value);
    var n2 = Number(txt_n2.value);
    var resultado;
    resultado = n1 - n2 

    document.getElementById('resultado_1').innerHTML = resultado;
}

function multiplicacao()
{
    var txt_n1 = document.getElementById('txt_n1_2');
    var txt_n2 = document.getElementById('txt_n2_2');

    var n1 = Number(txt_n1.value);
    var n2 = Number(txt_n2.value);
    var resultado;
    resultado = n1 * n2 

    document.getElementById('resultado_2').innerHTML = resultado.toFixed(2);
}

function divisao()
{
    var txt_n1 = document.getElementById('txt_n1_3');
    var txt_n2 = document.getElementById('txt_n2_3');

    var n1 = Number(txt_n1.value);
    var n2 = Number(txt_n2.value);
    var resultado;

    resultado = n1 / n2;

    document.getElementById('resultado_3').innerHTML = resultado.toFixed(2)

}