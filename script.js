const inputNombre = document.getElementById("nombre");
const inputTelefono = document.getElementById("telefono");
const btnAgregar = document.getElementById("btn-agregar");
const lista = document.getElementById("lista");

let contactos = [];

function mostrarContactos(arreglo) {
  lista.innerHTML = "";

  if (arreglo.length === 0) {
    const vacio = document.createElement("li");
    vacio.className = "vacio";
    vacio.textContent = "Todavía no agregaste contactos.";
    lista.appendChild(vacio);
    return;
  }

  arreglo.forEach(function (contacto) {
    const li = document.createElement("li");

    const info = document.createElement("div");
    info.className = "info";

    const spanNombre = document.createElement("span");
    spanNombre.className = "nombre";
    spanNombre.textContent = contacto.nombre;

    const spanTelefono = document.createElement("span");
    spanTelefono.className = "telefono";
    spanTelefono.textContent = contacto.telefono;

    info.appendChild(spanNombre);
    info.appendChild(spanTelefono);

    const btnEliminar = document.createElement("button");
    btnEliminar.className = "btn-eliminar";
    btnEliminar.textContent = "Eliminar";

    li.appendChild(info);
    li.appendChild(btnEliminar);
    lista.appendChild(li);
  });
}

btnAgregar.addEventListener("click", function () {
  const nombre = inputNombre.value.trim();
  const telefono = inputTelefono.value.trim();

  if (nombre === "" || telefono === "") {
    return;
  }

  contactos.push({ id: Date.now(), nombre: nombre, telefono: telefono });

  inputNombre.value = "";
  inputTelefono.value = "";
  mostrarContactos(contactos);
});

mostrarContactos(contactos);

btnEliminar.addEventListener("click", function () {
    contactos = contactos.filter(function (c) {
    return c.id !== contacto.id;
    });
    mostrarContactos(contactos);
});