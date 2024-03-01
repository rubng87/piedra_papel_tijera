// JUEGO PIEDRA PAPEL O TIJERAS
// version 0.1
// Hacer que el juego se repite en bucle hasta que el jugador diga que no y entonces rompe el bucle del juego y se para.
// do {
//     game()

//     let repeticion = confirm("Quieres jugar otra vez")
//     if (!repeticion) {
//     break;  
//     }


// } while (true);

let reinicio = true

do {
    game();
    reinicio = confirm("Quieres jugar otra vez")
} while (reinicio)


function game() {
let mensajeInicial = `
PIEDRA, PAPEL I TIJERAS
=======================

1 <-- ✊
2 <-- ✋
3 <-- ✌️

`

let eleccionUsuario = Number(prompt(mensajeInicial))
console.log("eleccion = ", eleccionUsuario);
console.log(typeof(eleccionUsuario));

// Elección del usuario
if (!isNaN(eleccionUsuario)) {
    if (eleccionUsuario == 1) {
    alert("Has elegido ✊");
    } else if (eleccionUsuario == 2) {
    alert("Has elegido ✋");
    } else if (eleccionUsuario == 3) {
    alert("Has elegido ✌️");
    } else {
     alert("¡¡ Hasta pronto !!");
     return

    }

    //Elección de la máquina
    let eleccionPC = getRandomInt(1, 4)
    if (eleccionPC == 1) {
        alert("El PC a elegido ✊");
    } else if (eleccionPC == 2) {
        alert("El PC a elegido ✋");
    } else if (eleccionPC == 3) {
        alert("El PC a elegido ✌️");
    }

    // Lógica del juego
    if (eleccionPC == eleccionUsuario) {
        alert("¡Empate!")
    } else if (
     (eleccionUsuario == 1 && eleccionPC == 3) ||
     (eleccionUsuario == 2 && eleccionPC == 1) ||
     (eleccionUsuario == 3 && eleccionPC == 2)) {
        alert("¡Has ganado!")
    } else {
        alert("¡Has perdido")
    }


    } else {
    alert("¡¡ Hasta pronto, aprende a elegir en los 3 números !!");
}

}



// if (eleccionUsuario == "1" || )

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
// Ejemplo: getRandomInt(1, 4) devolverá 1, 2 o 3 (todos incluidos).

// console.log(getRandomInt(1, 4));
