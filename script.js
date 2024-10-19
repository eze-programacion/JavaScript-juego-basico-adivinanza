// Con .floor redondeamos el número hacia abajo, o sea, de 0 a 99 y le sumamos + 1 para ir de 1 a 100
let numeroAzar = Math.floor(Math.random()*100) + 1

// Guardamos el input (El valor ingresado) en numeroEntrada
let numeroEntrada = document.getElementById('numeroEntrada')

// Enviamos el mensaje de acuerdo a lo sucedido
let mensaje = document.getElementById('mensaje')

let intento = document.getElementById('intento')

let intentos = 0

// Esta acción va a ser ejecutada al clickear el boton
function checkearResultado() {
    // Los input siempre devuelven String, entonces hay que convertirlo a entero.
    // nueroEntrada.value obtenemos el valor de la entrada
    let numeroIngresado = parseInt(numeroEntrada.value)

    // isNaN devuelve false si NO ES UN NUMERO
    if (numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)) {
        // .textContent es un atributo del parrafo <p>
        mensaje.textContent = "Por favor, introducir un número entre 1 y 100"
        // Borro el numero para que quede limpia la pantalla
        numeroEntrada.value = ''
        return // De esta manera hacemos que nos saque de la funcion para no seguir leyendo código.
    }

    intentos ++
    intento.textContent = intentos

    if (numeroIngresado === numeroAzar) {
        mensaje.textContent = '¡Felicitaciones! ¡Has adivinado el número!';
        // Entramos al estilo(style) del objeto mensaje, luego a su atributo color y le asignamos el color que deseamos.
        mensaje.style.color = 'green';
        // Deshabilitamos para que no puedan escribir mas números
        numeroEntrada.disabled = true;
    } else if (numeroIngresado < numeroAzar) {
        mensaje.textContent = 'El número es mayor al que ingresaste';
        mensaje.style.color = 'red';
    } else {
        mensaje.textContent = 'El número es menor al que ingresaste';
        mensaje.style.color = 'red';
    }
    
    // Borro el numero para que quede limpia la pantalla
    numeroEntrada.value = ''
}