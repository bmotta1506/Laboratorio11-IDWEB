let total = 0;

while (true) {
    let precio = parseFloat(prompt("Ingrese el precio del producto (0 para terminar):"));

    if (isNaN(precio) || precio < 0) {
        console.log("Precio inválido. Intente nuevamente.");
        continue;
    }

    if (precio === 0) {
        break;
    }

    total += precio;
}

console.log("Total parcial: " + total.toFixed(2));

let descuento = 0;
let mensaje = "";

if (total > 100) {
    descuento = total * 0.10;
    mensaje = "Tiene un descuento del 10%";
} else if (total >= 50 && total <= 100) {
    descuento = total * 0.05;
    mensaje = "Gana un cupón de 5%";
} else {
    mensaje = "No aplica descuento";
}

let totalFinal = total - descuento;

console.log(mensaje);
console.log("Total final a pagar: " + totalFinal.toFixed(2));
