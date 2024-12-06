let libro = {
    titulo: 'El Principito',
    autor: 'Antoine de Saint-Exupéry',
    anio: 1943,
    estado: 'Disponible',
    
    // Método para describir el libro
    describirLibro: function() {
        console.log(`Título: ${this.titulo}`);
        console.log(`Autor: ${this.autor}`);
        console.log(`Año: ${this.anio}`);
        console.log(`Estado: ${this.estado}`);
    }
}

// Llamar al método para describir el libro
libro.describirLibro();
