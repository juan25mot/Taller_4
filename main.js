// main.js
// Usamos 'import' para traer las funciones de los demás módulos.
 
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
 
console.log("==========================================");
console.log(" BIBLIOTECA EL PROGRESO - MÓDULOS ES6 ");
console.log("==========================================");
 
// --- 1. PRUEBA DE REGISTRO Y LISTADO DE USUARIOS ---
console.log("\n=== PASO 1: REGISTRAR Y VER USUARIOS ===");
registrarUsuario("Marta López", "marta.lopez@email.com");
registrarUsuario("Carlos Ruiz", "carlos.ruiz@email.com");
listarUsuarios();
 
// --- 2. PRUEBA DE REGISTRO DE LIBROS ---
console.log("\n=== PASO 2: REGISTRAR LIBROS NUEVOS ===");
registrarLibro("El túnel", "Ernesto Sábato");
registrarLibro("Ficciones", "Jorge Luis Borges");
 
// --- 3. PRUEBA DE LISTADO GENERAL ---
console.log("\n=== PASO 3: LISTADO COMPLETO INICIAL ===");
listarTodosLosLibros();
 
// --- 4. PRUEBA DE PRÉSTAMO DE LIBROS ---
console.log("\n=== PASO 4: PRÉSTAMOS ===");
// Ahora llamamos a la función directamente:
prestarLibro(1, buscarLibroPorId); 
prestarLibro(2, buscarLibroPorId);
 
// --- 5. PRUEBA DE LISTADO DE DISPONIBLES ---
console.log("\n=== PASO 5: VER SOLO DISPONIBLES ===");
listarLibrosDisponibles();
 
// --- 6. PRUEBA DE FILTRADO POR AUTOR (USANDO .FILTER) ---
console.log("\n=== PASO 6: FILTRAR POR AUTOR (GARCÍA MÁRQUEZ) ===");
listarLibrosPorAutor("García Márquez");
 
// --- 7. PRUEBA DE DEVOLUCIÓN DE LIBROS ---
console.log("\n=== PASO 7: DEVOLUCIÓN ===");
// Ahora llamamos a la función directamente:
devolverLibro(2, buscarLibroPorId); 
devolverLibro(4, buscarLibroPorId);
 
// --- 8. VERIFICACIÓN FINAL ---
console.log("\n=== PASO 8: VERIFICACIÓN FINAL DEL ESTADO ===");
listarTodosLosLibros();