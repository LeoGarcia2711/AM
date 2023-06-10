var cantidad = parseInt(prompt("Ingresa la cantidad de números con la que se trabajará: "));
var numeros = [];

for (var i = 1; i <= cantidad; i++) {
  var numero = parseFloat(prompt("Ingresa el número #" + i + ":"));
  numeros.push(numero);
}

var operacion = prompt("¿Qué operación deseas realizar? (a)Sumar (b)Restar (c)Multiplicar (d)Dividir");

switch (operacion) {
    case 'a':
      resultado = numeros + numeros;
      break;
    case 'b':
      resultado = numeros - numeros;
      break;
    case 'c':
      resultado = numeros * numeros;
      break;
    case 'd':
      resultado = numeros / numeros;
      break;
    default:
      console.log("Operación inválida. Por favor, elige una opción válida.");
      break;
  }


var ResultadoImpreso = document.getElementById("Resultado");
ResultadoImpreso.innerHTML = "El resultado de la operación seleccionada es: " + numeros;


var ResultadoImpresoReal = document.getElementById("ResultadoReal");
ResultadoImpresoReal.innerHTML = "El resultado de la operación seleccionada es: " + resultado;
