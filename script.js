const btn = document.querySelector("#IMC-button")

btn.addEventListener('click', function(e){
    
    e.preventDefault();

    const peso = document.querySelector("#peso");
    const weight = peso.value;

    const altura = document.querySelector("#altura");
    const altitude = altura.value;

    const idade = document.querySelector("#idade");
    const age = idade.value; 
    
    var IMC = weight / (altitude * altitude) 

    console.log (IMC)
})
