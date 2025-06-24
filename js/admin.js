API_URL = 'https://685ac53c9f6ef9611157b82d.mockapi.io/emanuel_brandon/camas'

const form = document.getElementById('persona-form');
const nombreEl = document.getElementById('nombre');
const telefonoEl = document.getElementById('telefono');
const imagenFileEl = document.getElementById('imagen-file');
const imagenUrlEl = document.getElementById('imagen-url');
const idEl = document.getElementById('persona-id');
const cancelBtn = document.getElementById('btn-cancel');
const submitBtn = document.getElementById('btn-submit');
const tbody = document.getElementById('personas-tbody');


window,addEventListener('DOMContentLoaded', CargarProducto);

async function CargarProducto() {
    const res = await fetch(API_URL);
    const data = await res.json();
    CargarTabla(data);
}

function CargarTabla(producto){
    tbody.innerHTML = '';
    producto.forEach(productos => {
        tbody.innerHTML +=`
        <tr>
             <td><img src="${producto.imagen}" alt="Foto de ${producto.nombre}" /></td>
             <td>${producto.nombre}</td>
             <td>
                <button onclick="CargarParaEditar('${producto.id}')>"Editar"</button>
                <button onclick="BorrarPersona('${producto.id}')">Eliminar</button>
             </td>
        </tr>
        `;
    });
}

async function BorrarPersona(id) {
    if(!confirm('¿Eliminar este producto de el registro?'))return;
    await fetch(`${API_URL}/${id}`, {method: 'DELETE' });
    CargarProducto();
    alert("El producto fue eliminado");
}

async function CargarParaEditar(id) {
    const res = await fetch(`${API_URL}/$${id}`);
    const p = await res.json();


}