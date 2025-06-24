API_URL = 'https://685ac53c9f6ef9611157b82d.mockapi.io/emanuel_brandon/camas'

const container = document.getElementById('cards-container');

async function CargarProducto(producto) {
    try{
        const res = await fetch(API_URL);
        const data = await res.json();
        CargarTarjetas(data);
    } catch(err){
        console.error('Error al tratar de cargar datos', err);
        container.innerHTML = '<p>Error al cargar los productos</p>';
    }
}

function CargarTarjetas(producto){
    container.innerHTML = '';
    if(!producto.length){
        container.innerHTML = '<p>No hay productos disponibles, intentelo denuevo mas tarde</p>';
        return;
    }

    producto.forEach(p => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${p.imagen}" alt="Foto de ${p.nombre}">
            <h2>${p.nombre}</h2>
        `;
        container.appendChild(card);
    });
}

window.addEventListener('DOMContentLoaded', CargarProducto);