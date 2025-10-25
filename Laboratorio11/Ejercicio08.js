let seguir = true;

while(true){
    let contPrimos = 0;
    let numero = parseInt(prompt("Ingrese el rango hasta se desea contabilizar los numero primos"))
    for(let i = 1; i <= numero; i++){
        let divisores=0;
        for(let j = 1; j <= i; j++){
            if(i % j === 0){
                divisores++;
            }
        }
        if(divisores === 2){
            contPrimos++;
        }
    }
    console.log("La cantidad de numeros primos hasta " + numero + " es: " + contPrimos);
    while (true) {
        let decision = prompt("¿Quiere seguir intentando? (Si/No):");
        if (decision && decision.toUpperCase() === "NO") {
            seguir = false;
            break;
        }
        else if (decision && decision.toUpperCase() === "SI") {
            seguir = true;
            break;
        }
        else {
            console.log("Por favor, escriba 'SI' o 'NO'");
        }
    }
    if(seguir === false){
        break;
    }
}
console.log("Programa finalizado.");