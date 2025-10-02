// Módulo para gestionar las acciones de préstamo y devolución.


//Presta un libro, si está disponible.

export function prestarLibro(libroId, buscarLibroPorId) {
  const libro = buscarLibroPorId(libroId);

  if (!libro) {
    console.log(`\n[ERROR] No se puede prestar. Libro con ID ${libroId} no existe.`);
    return false;
  }

  // Comprobamos solo si está disponible.
  if (libro.estado === "disponible") {
    // Cambiamos el estado
    libro.estado = "prestado";
    console.log(`\n[ÉXITO] PRESTADO: El libro "${libro.titulo}" (ID: ${libroId}) fue entregado.`);
    return true;
  } else {
    console.log(`\n[ADVERTENCIA] No se puede prestar. El libro "${libro.titulo}" ya está ${libro.estado}.`);
    return false;
  }
}


// Recibe un libro, cambiándolo a estado 'disponible'.

export function devolverLibro(libroId, buscarLibroPorId) {
  const libro = buscarLibroPorId(libroId);

  if (!libro) {
    console.log(`\n[ERROR] No se puede devolver. Libro con ID ${libroId} no existe.`);
    return false;
  }

  // Solo podemos devolver si el estado actual es prestado.
  if (libro.estado === "prestado") {
    // Cambiamos el estado de vuelta
    libro.estado = "disponible";
    console.log(`\n[ÉXITO] DEVUELTO: El libro "${libro.titulo}" (ID: ${libroId}) está DISPONIBLE de nuevo.`);
    return true;
  } else {
    console.log(`\n[ADVERTENCIA] No se puede devolver. El libro "${libro.titulo}" no estaba prestado.`);
    return false;
  }
}