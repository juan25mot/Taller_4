// Módulo para gestionar los libros y el inventario.
 
// Array de objetos de libros con datos iniciales (para probar).

const libros = [

  { id: 1, 
    titulo: "Cien años de soledad", 
    autor: "Gabriel García Márquez", 
    estado: "disponible" },

  { id: 2, 
    titulo: "El amor en los tiempos del cólera", 
    autor: "Gabriel García Márquez", 
    estado: "prestado" },

  { id: 3, 
    titulo: "La ciudad y los perros", 
    autor: "Mario Vargas Llosa", 
    estado: "disponible" },

  { id: 4, 
    titulo: "Rayuela", 
    autor: "Julio Cortázar", 
    estado: "disponible" }

];
 
let nextId = libros.length > 0 ? libros[libros.length - 1].id + 1 : 1;

//Función para añadir un libro nuevo al array.

export function registrarLibro(titulo, autor) {
  if (!titulo || !autor) {
    console.log("Faltó el título o el autor");
    return;
  } 
  const nuevoLibro = {
    id: nextId++,
    titulo: titulo,
    autor: autor,
    estado: "disponible"
  }; 
  libros.push(nuevoLibro);
  console.log(`Libro registrado: ${titulo} (ID: ${nuevoLibro.id})`);
}
 
//Muestra la lista completa de libros con su estado.

export function listarTodosLosLibros() {
  console.log("\nLISTADO COMPLETO DE LIBROS");
  libros.forEach(libro => {
    console.log(`ID: ${libro.id}\nTítulo: ${libro.titulo}\nAutor: ${libro.autor}\nEstado: ${libro.estado.toUpperCase()}`);
  });
}
 
//Muestra libros filtrados por el autor, usando .filter.

export function listarLibrosPorAutor(autor) {
  console.log(`\nFILTRO: LIBROS DE ${autor.toUpperCase()}`);
  const criterio = autor.toLowerCase();
  const resultados = [];

  for (let i = 0; i < libros.length; i++) {
    const l = libros[i];
    const autorLibro = l.autor.toLowerCase();
    if (autorLibro.indexOf(criterio) !== -1) {
      resultados.push(l);
    }
  }

  if (resultados.length === 0) {
    console.log(`No se encuentran libros de: "${autor}".`);
    return [];
  }

  resultados.forEach(l => console.log(`ID: ${l.id}\nTítulo: ${l.titulo}\nEstado: ${l.estado.toUpperCase()}`));

  return resultados; // útil para UI/tests
}

//Función auxiliar, fundamental para el módulo de préstamos (usa .find).

export function buscarLibroPorId(id) {
  return libros.find(libro => libro.id === parseInt(id));
}
 