while (true) {
    let monto = parseInt(prompt("Ingrese el monto a retirar (múltiplo de 10):"));

    if (isNaN(monto) || monto <= 0 || monto % 10 !== 0) {
        console.log("Ingrese un monto válido (debe ser múltiplo de 10).");
        continue;
    }

    let billetes100 = Math.floor(monto / 100);
    monto %= 100;

    let billetes50 = Math.floor(monto / 50);
    monto %= 50;

    let billetes20 = Math.floor(monto / 20);
    monto %= 20;

    let billetes10 = Math.floor(monto / 10);
    monto %= 10;

    console.log("Billetes de 100: " + billetes100);
    console.log("Billetes de 50: " + billetes50);
    console.log("Billetes de 20: " + billetes20);
    console.log("Billetes de 10: " + billetes10);

    let seguir = prompt("¿Desea realizar otra operación? (Si/No): ");

    if (seguir && seguir.toUpperCase() === "NO") {
        console.log("Operación finalizada");
        break;
    }
}
