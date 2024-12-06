
function contarFrutas(arr) {
    // Creamos un objeto para almacenar la cantidad de frutas iguales
    let contador = {};

    // Recorremos el arreglo usando un ciclo for
    for (let i = 0; i < arr.length; i++) {
        // Obtenemos la fruta actual
        let fruta = arr[i];

        // Si la fruta ya está en el objeto, incrementamos su cantidad
        if (contador[fruta]) {
            contador[fruta]++;
        } else {
            // Si la fruta no está en el objeto, la agregamos con una cantidad inicial de 1
            contador[fruta] = 1;
        }
    }

    // Retornamos el objeto con la cantidad de cada fruta
    return contador;
}

// Ejemplo de uso:
let frutas = ['manzana', 'banana', 'manzana', 'naranja', 'banana', 'manzana'];
let resultado = contarFrutas(frutas);
console.log(resultado);
