let nombre = prompt("ingresa tu nombre: ");
let vect = nombre.split("");


console.log(vect.reverse(function(a,b){return(a-b)}));