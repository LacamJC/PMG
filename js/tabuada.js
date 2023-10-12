
function tabuada()
{
    document.getElementById('tabuada').innerHTML = '';
    let txtn1 = document.getElementById('n1').value;
    let n1 = parseInt(txtn1);
    

    let t = new Array();
    let escreva = new Array();
    escreva = ''

    t = [0,0,0,0,0,0,0,0,0,0];

    for (c=0; c<=10; c++)
    {
        t[c] = n1 * c
    }

    
    for (i=0; i<=10; i++)
    {
        document.getElementById('tabuada').innerHTML += '<li id="numero">'+n1+'x'+i+'='+(t[i])+'</li>'
    }
    
}