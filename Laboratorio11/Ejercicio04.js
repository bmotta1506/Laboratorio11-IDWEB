let edad = parseInt(prompt("Ingrese su edad: "));
if(edad>=0 && edad <=150){
    if(edad<12){
    alert("Usted es un niño.")
    console.log("Usted es un niño.");
    document.write("Usted es un niño.<br>");
    }
    else if(edad>=12 && edad <17){
        alert("Usted es un adolescente.")
        console.log("Usted es un adolescente.");
        document.write("Usted es un adolescente.<br>");
    }
    else if(edad>=17 && edad <=59){
        alert("Usted es un adulto.")
        console.log("Usted es un adulto.");
        document.write("Usted es un adulto.<br>");
    }
    else{
        alert("Usted es un adulto mayor.")
        console.log("Usted es un adulto mayor.");
        document.write("Usted es un adulto mayor.<br>");
    }

}
else{
    alert("Edad no valida")
    console.log("Edad no valida");
    document.write("Edad no valida<br>");
}