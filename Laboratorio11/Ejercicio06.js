while(true){
    let numero = parseInt(prompt("Ingrese su numero a multiplicar: "));
    for( let i=1; i<13; i++){
        console.log(numero+" * "+i + " = " + i*numero);
    }
    let eleccion = prompt("Desea continuar (si/no)");
    if(eleccion === "no"){
        break;
    }
}
alert("Gracias por participar.");
console.log("Gracias por participar.");
document.write("Gracias por participar.<br>");
