let opcion;

while (true) {
    console.log("Menú de opciones:");
    console.log("1. Calcular estadísticas de N notas");
    console.log("2. Promedio");
    console.log("3. Valor máximo");
    console.log("4. Valor mínimo");
    console.log("5. Cantidad de pares e impares");
    console.log("6. Cuántos están por encima del promedio");
    console.log("7. Contar números pares e impares en un rango");
    console.log("8. Generar una tabla de multiplicar");
    console.log("9. Salir");

    opcion = parseInt(prompt("Seleccione una opción (1-9):"));

    if (opcion === 9) {
        console.log("Programa finalizado.");
        break;
    }

    switch (opcion) {
        case 1:
            let n = parseInt(prompt("Ingrese la cantidad de notas:"));
            let notas = [];
            for (let i = 0; i < n; i++) {
                notas.push(parseFloat(prompt("Ingrese la nota " + (i + 1) + ":")));
            }
            console.log("Notas registradas: " + notas.join(", "));
            break;

        case 2:
            if (typeof notas === "undefined" || notas.length === 0) {
                console.log("Debe ingresar las notas primero (opción 1).");
                break;
            }
            let suma = 0;
            for (let nota of notas) suma += nota;
            console.log("Promedio: " + (suma / notas.length).toFixed(2));
            break;

        case 3:
            if (typeof notas === "undefined" || notas.length === 0) {
                console.log("Debe ingresar las notas primero (opción 1).");
                break;
            }
            console.log("Valor máximo: " + Math.max(...notas));
            break;

        case 4:
            if (typeof notas === "undefined" || notas.length === 0) {
                console.log("Debe ingresar las notas primero (opción 1).");
                break;
            }
            console.log("Valor mínimo: " + Math.min(...notas));
            break;

        case 5:
            if (typeof notas === "undefined" || notas.length === 0) {
                console.log("Debe ingresar las notas primero (opción 1).");
                break;
            }
            let pares = 0, impares = 0;
            for (let nota of notas) {
                if (Math.floor(nota) % 2 === 0) pares++;
                else impares++;
            }
            console.log("Pares: " + pares + ", Impares: " + impares);
            break;

        case 6:
            if (typeof notas === "undefined" || notas.length === 0) {
                console.log("Debe ingresar las notas primero (opción 1).");
                break;
            }
            let promedio = notas.reduce((a, b) => a + b, 0) / notas.length;
            let mayores = notas.filter(nota => nota > promedio).length;
            console.log("Notas por encima del promedio: " + mayores);
            break;

        case 7:
            let inicio = parseInt(prompt("Ingrese el inicio del rango:"));
            let fin = parseInt(prompt("Ingrese el fin del rango:"));
            let paresR = 0, imparesR = 0;
            for (let i = inicio; i <= fin; i++) {
                if (i % 2 === 0) paresR++;
                else imparesR++;
            }
            console.log("En el rango " + inicio + " - " + fin + ": Pares = " + paresR + ", Impares = " + imparesR);
            break;

        case 8:
            let num = parseInt(prompt("Ingrese un número para generar su tabla de multiplicar:"));
            for (let i = 1; i <= 10; i++) {
                console.log(num + " x " + i + " = " + (num * i));
            }
            break;

        default:
            console.log("Opción no válida. Intente nuevamente.");
    }
}
