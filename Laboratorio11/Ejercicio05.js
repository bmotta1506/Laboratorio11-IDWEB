let contPares=0;
let contImpares=0;

for( let i=0; i<10; i++){
    let numero = parseInt(prompt("Ingrese su numero de la posicion "+(i+1)));
    if(numero%2==0){
        contPares++;
    }
    else{
        contImpares++;
    }
}
alert("La cantidad de pares es "+contPares);
alert("La cantidad de impares es "+contImpares);
console.log("La cantidad de pares es "+contPares);
console.log("La cantidad de impares es "+contImpares);
document.write("La cantidad de pares es "+contPares+"<br>");
document.write("La cantidad de impares es "+contImpares+"<br>");