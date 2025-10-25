let decision = true;
while(true){
    let numero = parseInt(prompt("Ingrese un numero para calcular si es Armstrong :"));
    let suma = 0;
    let digitos = numero.toString().length;
    for(let i = 0; i < digitos; i++){
        let digito = parseInt(numero.toString().charAt(i));
        suma += digito ** digitos;
    }
    if(suma === numero){
        console.log("El numero " + numero + " es un numero Armstrong.");
        alert("El numero " + numero + " es un numero Armstrong.");
    }
    else{
        console.log("El numero " + numero + " no es un numero Armstrong.");
        alert("El numero " + numero + " no es un numero Armstrong.");
    }
    while (true) {
        let resp = prompt("¿Quiere seguir intentando? (Si/No):");
            if (resp && resp.toUpperCase() === "NO") {
                decision = false;
                break;
            }
            else if (resp && resp.toUpperCase() === "SI") {
                decision = true;
                break;
            }
            else {
                console.log("Por favor, escriba 'SI' o 'NO'");
            }
    }
    if(decision === false){
        break;
    }
}
console.log("Programa finalizado.");