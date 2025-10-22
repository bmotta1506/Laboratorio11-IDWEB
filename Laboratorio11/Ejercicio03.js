let suma=0;
for( let i=0; i<5; i++){
    let nota;
    while(true){
        nota = parseInt(prompt("Ingrese la nota "+(i+1) + " entre 0 y 20"));
        if(nota<=20 && nota >= 0){
            break;
        }
        else{
            alert("Nota no valida, ingrese su nota entre 0 y 20");
            console.log("Nota no valida, ingrese su nota entre 0 y 20");
            document.write("Nota no valida, ingrese su nota entre 0 y 20<br>");
        }
    }
    suma+=nota;
}
let promedio = suma/5.0;
alert("El promedio de las 5 notas es: "+promedio.toFixed(2));
console.log("El promedio de las 5 notas es: "+promedio.toFixed(2));
document.write("El promedio de las 5 notas es: "+promedio.toFixed(2)+"<br>");