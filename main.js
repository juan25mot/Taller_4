 // Importación de funciones específicas desde cada módulo.
import { registrarUsuario, listarUsuarios } from './usuarios.js';
import { 
    registrarLibro, 
    listarTodosLosLibros, 
    listarLibrosDisponibles, 
    listarLibrosPorAutor, 
    buscarLibroPorId 
} from './libros.js';
import { prestarLibro, devolverLibro } from './prestamos.js';
console.log(" BIBLIOTECA EL PROGRESO ");

 
// Registro y lista de usuarios
console.log("\nREGISTRAR Y VER USUARIOS ");
listarUsuarios();
 
// Registro de libros
console.log("\nREGISTRAR LIBROS NUEVOS");
registrarLibro("El túnel", "Ernesto Sábato");
registrarLibro("Ficciones", "Jorge Luis Borges");
 
// Lista general
console.log("\nLISTADO COMPLETO INICIAL");
listarTodosLosLibros();
 
// Préstamo de libros
console.log("\nPRÉSTAMOS ");

prestarLibro(1, buscarLibroPorId); 
prestarLibro(2, buscarLibroPorId);
 
// Lista de libros disponibles
console.log("\nVER SOLO DISPONIBLES ");
listarLibrosDisponibles();
 
// Filtro por autor
console.log("\nFILTRO POR AUTOR");
listarLibrosPorAutor("García Márquez");
 
// Devolución de libros
console.log("\nDEVOLUCIÓN ");

devolverLibro(2, buscarLibroPorId); 
devolverLibro(4, buscarLibroPorId);
 
console.log("\nVERIFICACIÓN FINAL DEL ESTADO ");
listarTodosLosLibros();