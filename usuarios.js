
// Array de usuarios pa` las pruebas.
const usuarios = [
  { nombre: "HUNTER", email: "HUNTER.WOLF@email.com" },
  { nombre: "KNIGHT", email: "KNIGHT.SWORD@email.com" }
];
 

//Función pa` añadir un usuario nuevo al array.
export function registrarUsuario(nombre, email) {
  if (!nombre || !email) {
    console.log("¡Error de dato! Faltó el nombre o el correo. Tocó corregir.");
    return;
  }
  const nuevoUsuario = {
    nombre: nombre,
    email: email
  };
  usuarios.push(nuevoUsuario);
  console.log(`[OK] Usuario registrado: ${nombre}`);
}

//Función pa` imprir en consola la lista de los usuarios.
export function listarUsuarios() {
    console.log("\n--- LISTA DE USUARIOS REGISTRADOS ---");
    usuarios.forEach((u, index) => {
        console.log(`Usuario N° ${index + 1}: Nombre: ${u.nombre} | Email: ${u.email}`);
    });
    console.log("-------------------------------------");
}
// NOTA: No necesitamos 'module.exports' al usar 'export' directamente en la función.
 