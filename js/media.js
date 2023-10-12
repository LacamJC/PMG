quantidadeConjunto = prompt("Quantos valores terá no conjunto");
quantidadeConjunto = Number(quantidadeConjunto)

valoresConjunto = []

menorValor = maiorValor = media = amplitude = 0;


console.log(typeof(quantidadeConjunto))

for (x=0; x < quantidadeConjunto; x++)
{

    let y = Number(prompt("Valor "+x))
    valoresConjunto.push(y)
    media += y

    if(x==1)
    {
        menorValor = maiorValor = y;
        console.log(menorValor, maiorValor)
    }

    if(menorValor > y)
    {
        menorValor = y;
    }

    if(maiorValor < y)
    {
        maiorValor = y;
    }
}

media = media / quantidadeConjunto;
amplitude = maiorValor - menorValor;

console.log(`A media dos valores ${valoresConjunto} é ${media} \nO maior valor foi ${maiorValor} e o menor ${menorValor}`)

document.getElementById("valorMedia").innerHTML = media;
document.getElementById("valorConjunto").innerText =valoresConjunto;
document.getElementById("valorAmplitude").innerHTML = amplitude;