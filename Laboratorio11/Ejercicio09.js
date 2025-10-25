let seguir = true;

while (seguir) {
    let limite = parseInt(prompt("Introduzca hasta qué número quiere ser sumado:"));
    let suma = 0;

    for (let i = 1; i <= limite; i++) {
        if (i % 5 !== 0) {
            suma += i;
        }
    }

    console.log("La suma es: " + suma);

    while (true) {
        let decision = prompt("¿Quiere seguir intentando? (Si/No):");

        if (decision && decision.toUpperCase() === "NO") {
            seguir = false;
            break;
        } else if (decision && decision.toUpperCase() === "SI") {
            seguir = true;
            break;
        } else {
            console.log("Por favor, escriba 'SI' o 'NO'");
        }
    }
}

console.log("Programa finalizado.");