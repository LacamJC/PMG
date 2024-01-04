function frequencia()
{
    var x=6;
    var fi = [document.getElementById("valor1").value,document.getElementById("valor2").value,document.getElementById("valor3").value,document.getElementById("valor4").value,document.getElementById("valor5").value,document.getElementById("valor6").value]
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
    
    document.getElementById('TableBody').innerHTML = ""
    for(i=0; i < 6; i++)
    {
        console.log(i)
        if(i==0)
        {
            document.getElementById("TableBody").innerHTML += "<tr>"
        }

        document.getElementById("TableBody").innerHTML += `<td>${i+1}</td><td>${fi[i]}</td><td>${facum[i]}</td><td>%${frel[i]}</td><td>%${frelAcum[i]}</td>`
        
        if(i==6)
        {
            document.getElementById('TableBody').innerHTML += "</tr>"
        }
    }
}