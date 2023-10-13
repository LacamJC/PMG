var lista = []
var atual;
var ant;
var res;
var soma;
var texto = document.getElementById("texto")


function calc(num)
{
    texto.innerHTML += num
    lista.push(num.toString())
    console.log(lista)

    if (num == '+')
    {
            soma = lista.reduce(function(acumulador, valorAtual) {
                
                return acumulador + valorAtual

            }, 0);
            
            console.log("Lista de soma: "+soma)
            console.log("Soma atual: "+res)
    } 

    

}

