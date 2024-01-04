function calcular()
{
    var txt_salario = document.getElementById('txt_salario');
    var txt_valor_casa = document.getElementById('txt_valor_casa');
    var txt_parcelas = document.getElementById('txt_parcelas');

    var parcelas = Number(txt_parcelas.value);
    var salario = Number(txt_salario.value);
    var valor_casa = Number(txt_valor_casa.value);

    var min_salario = (30 * salario) / 100; // 10% do salário
    var parcela_casa = valor_casa / parcelas; //
    
    if (min_salario >= parcela_casa)
    {
        document.getElementById('a').innerHTML = "<p class='alert alert-primary'>Você pode comprar esta casa <br>Cada parcela custará R$: "+parcela_casa.toFixed(2)+"<br>Por "+parcelas+" meses<p>"
    }

    else 
    {
        document.getElementById('a').innerHTML = "<p class='alert alert-danger'>Você não pode comprar esta casa.<br>Cada parcela ficara R$: "+parcela_casa+"<br>E representa mais de 30% de seu salário logo nao podera pagar.<p>"

    }


    
    
}