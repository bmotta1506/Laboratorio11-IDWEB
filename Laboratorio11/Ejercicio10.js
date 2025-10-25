let opcion=true;

while(true){
    let opcion = prompt("\nIngrese una opcion(1: Area Circulo, 2: Area Rectangulo, 3: Salir):");
        switch(opcion){
            case "1":
                let radio = parseFloat(prompt("Ingrese el radio del circulo:"));
                let areaCirculo = Math.PI * Math.pow(radio, 2);
                console.log("El area del circulo es: " + areaCirculo.toFixed(2));
                break;
            case "2":
                let base = parseFloat(prompt("Ingrese la base del rectangulo:"));
                let altura = parseFloat(prompt("Ingrese la altura del rectangulo:"));
                let areaRectangulo = base * altura;
                console.log("El area del rectangulo es: " + areaRectangulo.toFixed(2));
                break;
            case "3":
                opcion = false;
                console.log("Saliendo del programa.");
                exit();
            default:
                console.log("Opcion no valida. Por favor intente de nuevo.");
        }
    if(opcion === false){
        break;
    }
}
console.log("Programa finalizado.");
