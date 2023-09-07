const navegacion = document.querySelector('.navegacion');
const imagenes = document.querySelectorAll('img');
const btnTodos = document.querySelector('.todos');
const btnAlfajores = document.querySelector('.alfajores');
const btnTortas = document.querySelector('.tortas');
const btnMacarons = document.querySelector('.macarons');
const btnCatering = document.querySelector('.catering');
const contenedorPlatos = document.querySelector('.platos');



//Para realizar hoisting (modo de ejecucion JS) luego de cargar el html
document.addEventListener('DOMContentLoaded', () =>{
    eventos();
    platos()
})

const eventos = () =>{
    menu.addEventListener('click',abrirmenu);
}

//Para que cuando hagas click borre la clase ocultar y muestre la lista
const abrirmenu = () =>{ 
    navegacion.classList.remove('ocultar');
    botonCerrar();
}
const botonCerrar = () =>{
    const btnCerrar = document.createElement('p');
    const overlay = document.createElement('div');
    overlay.classList.add('pantalla-completa');
    const body = document.querySelector('body');
    if(document.querySelectorAll('.pantalla-completa').length > 0) return;
    body.appendChild(overlay);
    btnCerrar.textContent = 'x';
    btnCerrar.classList.add('btn-cerrar');
    navegacion.appendChild(btnCerrar);
    cerrarMenu(btnCerrar,overlay);
}

//fin de funcion ocultar menu

//funcion de agrupar por platos
const platos = () => {
    let platosArreglo = [];
    const platos = document.querySelectorAll('.plato');
    platos.forEach(plato=> platosArreglo = [...platosArreglo,plato]);
    const alfajores = platosArreglo.filter(alfajores=> alfajores.getAttribute('data-plato') === 'alfajores');
    const tortas = platosArreglo.filter(tortas=> tortas.getAttribute('data-plato') === 'tortas');
    const macarons = platosArreglo.filter(macarons=> macarons.getAttribute('data-plato') === 'macarons');
    const catering = platosArreglo.filter(catering=> catering.getAttribute('data-plato') === 'catering');

    mostrarplatos(alfajores, tortas, macarons, catering, platosArreglo);
}

const mostrarplatos = (alfajores, tortas , macaroons, catering, todos) =>{
    btnAlfajores.addEventListener('click', ()=>{
        limpiarHtml(contenedorPlatos);
        alfajores.forEach(alfajores=> contenedorPlatos.appendChild(alfajores));
    });

    btnTortas.addEventListener('click', ()=>{
        limpiarHtml(contenedorPlatos);
        tortas.forEach(tortas=> contenedorPlatos.appendChild(tortas));
    });

    btnMacarons.addEventListener('click', ()=>{
        limpiarHtml(contenedorPlatos);
        macaroons.forEach(macaroons=> contenedorPlatos.appendChild(macaroons));
    });

    btnCatering.addEventListener('click', ()=>{
        limpiarHtml(contenedorPlatos);
        catering.forEach(catering=> contenedorPlatos.appendChild(catering));
    });

    btnTodos.addEventListener('click', ()=>{
        limpiarHtml(contenedorPlatos);
        todos.forEach(todos=> contenedorPlatos.appendChild(todos));
    });
}

//Funcion para limpiar HTML al hacer click en algun grupo del menu
const limpiarHtml = (contenedor) => {
    while(contenedor.firstChild) {
        contenedor.removeChild(contenedor.firstChild);
    }
}

