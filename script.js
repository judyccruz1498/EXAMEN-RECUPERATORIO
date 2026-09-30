const inputNombre = document.getElementById("nombre");
const inputTelefono = document.getElementById("telefono");
const btnAgregar = document.getElementById("btn-agregar");
const lista = document.getElementById("lista");
const inputBuscador = document.getElementById("buscador");
const spanContador = document.getElementById("contador");

let contactos = [];

function actualizarContador() {
  spanContador.textContent = contactos.length;
}

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

    btnEliminar.addEventListener("click", function () {
      contactos = contactos.filter(function (c) {
        return c.id !== contacto.id;
      });
      actualizarContador();
      buscar();
    });

    li.appendChild(info);
    li.appendChild(btnEliminar);
    lista.appendChild(li);
  });
}

function buscar() {
  const texto = inputBuscador.value.trim().toLowerCase();

  const filtrados = contactos.filter(function (c) {
    return c.nombre.toLowerCase().includes(texto);
  });

  mostrarContactos(filtrados);
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
  actualizarContador();
  buscar();
});

inputBuscador.addEventListener("input", buscar);

mostrarContactos(contactos);
actualizarContador();