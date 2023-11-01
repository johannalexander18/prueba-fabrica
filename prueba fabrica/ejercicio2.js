let cadena = prompt("Ingrese su nombre");
    let arreglo = cadena.toLocaleLowerCase().split("");
    let cont = 0;
    for(let i=0; i<arreglo.length; i++){
        if(arreglo[i] == "a" || arreglo[i] == "e" || arreglo[i] == "i" || arreglo[i] == "o" || arreglo[i] == "u" || arreglo[i] == "A" || arreglo[i] == "E" || arreglo[i] == "I" || arreglo[i] == "O" || arreglo[i] == "U"){
            cont++;
        }
    }
    alert("Hay "+cont+" vocales en "+cadena);