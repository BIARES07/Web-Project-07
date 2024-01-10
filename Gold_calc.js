// Obtener referencia a los elementos por su id
var campo1 = document.getElementById('campo1');
var campo2 = document.getElementById('campo2');
var entradaPredeterminada = "100M";

// Función para multiplicar el número introducido en campo1 por 0.16
function multiplicar() {
  var valorCampo1 = campo1.value.trim(); // Obtener el valor del campo1 y eliminar espacios en blanco

  // Eliminar cualquier letra no numérica del valor de campo1
  valorCampo1 = valorCampo1.replace(/[^\d]/g, '');

  if (/^\d+$/.test(valorCampo1)) { // Validar que el valor sea un número entero
    var resultado = parseInt(valorCampo1) * 0.16; // Multiplicar por 0.16
    campo2.value = '$' + resultado.toFixed(2); // Agregar el prefijo "$" y mostrar el resultado en campo2 con 2 decimales
  } else {
    campo2.value = ''; // Borrar el contenido de campo2 si el valor de campo1 no es un número entero
  }
}

// Configurar el evento 'input' en campo1 para llamar a la función multiplicar y verificar si campo1 está vacío
campo1.addEventListener('input', function() {
  multiplicar(); // Calcular campo2
  if (campo1.value.trim() === '') {
    campo2.value = '$0.00'; // Establecer campo2 en "$0.00" si campo1 está vacío
  }
});

// Configurar el evento 'keydown' en campo1 para bloquear cualquier entrada que no sea numérica
campo1.addEventListener('keydown', function(e) {
  if (!/^\d$/.test(e.key) && e.key !== 'Backspace' && e.key !== 'Delete' && e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') {
    e.preventDefault(); // Cancelar la acción por defecto del teclado
  }
});

// Configurar el evento 'focus' en campo1 para borrar la entrada predeterminada y el resultado en campo2
campo1.addEventListener('focus', function() {
  if (campo1.value.trim() === entradaPredeterminada) {
    campo1.value = ''; // Borrar la entrada predeterminada
    campo2.value = ''; // Borrar el resultado en campo2
  }
});

// Configurar el evento 'blur' en campo1 para agregar "M" después del número cuando no esté vacío
campo1.addEventListener('blur', function() {
  var valorCampo1 = campo1.value.trim(); // Obtener el valor del campo1 y eliminar espacios en blanco

  if (valorCampo1 !== '') {
    var numero = parseInt(valorCampo1);
    campo1.value = numero + 'M'; // Agregar "M" después del número
  }

  if (campo1.value.trim() === '') {
    campo2.value = '$0.00'; // Establecer campo2 en "$0.00" si campo1 está vacío
  }
});

// Configurar el evento 'click' en campo1 para eliminar la "M" automáticamente si ya está presente
campo1.addEventListener('click', function() {
  var valorCampo1 = campo1.value.trim(); // Obtener el valor del campo1 y eliminar espacios en blanco

  if (valorCampo1.endsWith('M')) {
    campo1.value = valorCampo1.slice(0, -1); // Eliminar la "M" del final del valor
  }
});

// Establecer la entrada predeterminada en campo1 al cargar la página
document.addEventListener('DOMContentLoaded', function() {
  campo1.value = entradaPredeterminada;
  multiplicar(); // Calcular el campo2 con la entrada predeterminada
});

// Deshabilitar campo2 para bloquear la entrada de usuario y hacer clic
campo2.disabled = true;
campo2.style.textAlign = 'left'; // Alinear el texto a la izquierda