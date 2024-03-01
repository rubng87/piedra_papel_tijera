// JUEGO PIEDRA PAPEL O TIJERAS
// version 0.1

let mensajeInicial = `
PIEDRA, PAPEL I TIJERAS
=======================

1 <-- Piedra
2 <-- Papel
3 <-- Tijeras

`

let eleccionUsuario = Number(prompt(mensajeInicial))
console.log("eleccion = ", eleccionUsuario);
console.log(typeof(eleccionUsuario));

if (!isNaN(eleccionUsuario)) {
    if (eleccionUsuario == 1) {
    alert("Has elegido ✊");
    } else if (eleccionUsuario == 2) {
    alert("Has elegido ✋");
    } else if (eleccionUsuario == 3) {
    alert("Has elegido ✌️");
    } else {
        alert("¡¡ Hasta pronto !!");
    }
} else {
    alert("¡¡ Hasta pronto, aprende a elegir en los 3 números !!");
}

// if (eleccionUsuario == "1" || )