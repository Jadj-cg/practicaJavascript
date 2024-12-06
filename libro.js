
function agregarLibro(libro) {
    librosLeidos.push(libro)
    return librosLeidos
}

let librosLeidos = ['Cumbres Borrascosas', 'Paper Towns'];
let resultado = agregarLibro("Harry Potter");
console.log(resultado);