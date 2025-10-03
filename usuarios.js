
// Array de usuarios pa` las pruebas.
const usuarios = [
  { nombre: "HUNTER", 
    email: "HUNTER.WOLF@email.com" 
  },

  { nombre: "KNIGHT", 
    email: "KNIGHT.SWORD@email.com" 
  }
];
 

//Función pa` añadir un usuario nuevo al array.
export function registrarUsuario(nombre, email) {
  if (!nombre || !email) {
    console.log("Faltó el nombre o el correo.");
    return;
  }
  const nuevoUsuario = {
    nombre: nombre,
    email: email
  };
  usuarios.push(nuevoUsuario);
  console.log(`Usuario registrado: ${nombre}`);
}

//Función pa` imprir en consola la lista de los usuarios.
export function listarUsuarios() {
    console.log("\n LISTA DE USUARIOS REGISTRADOS");
    usuarios.forEach((u, index) => {
        console.log(`Usuario N° ${index + 1}:\nNombre: ${u.nombre}\nEmail: ${u.email}`);
    });
}

 