var esc = window.prompt("[ 1 ] Somar \n[ 2 ] Subtrair\n[ 3 ]Dividir \n[ 4 ] Multiplicar");

var escreva = ''
var soma;
if (esc > 5)
{
     while(esc > 5)
     {
          esc = window.prompt("Digite novamente")
     }
}
n1 = parseInt(window.prompt("Primeiro valor"))
n2 = parseInt(window.prompt("Segundo valor"))


switch(esc)
{
    case '1':
        escreva += n1+" + "+n2+" = "+(n1+n2);
        break;
    
    case '2':
        escreva += n1+" - "+n2+" = "+(n1-n2);
        break;

    case '3':
        escreva += n1+" / "+n2+" = "+((n1/n2).toFixed(2));
        break;

    case '4':
        escreva += n1+" X "+n2+" = "+(n1*n2);
        break;

    default:
        escreva += 'erro';
        

}
document.getElementById('caixa').innerHTML = escreva;