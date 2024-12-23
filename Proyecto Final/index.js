
// variable global para almacenar los productos seleccionados
let carrito = [];

const agregarAlcarrito = (boton) => {
    // Obtener el elemento de la tarjeta contenedora
    const card = boton.closest('.card');

    // Obtener el título, precio e imagen de la tarjeta
    const nombre = card.querySelector('.card-title').textContent;
    const precio = parseFloat(card.querySelector('.precio').textContent.replace('$', ''));
    const imagen = card.querySelector('.card-img-top').src;

    // Agregar el producto como un objeto al carrito
    carrito.push({ nombre, precio, imagen });

    // Actualizar el contador visual del carrito
    actualizarContador();

    // Muestra un alerta de confirmación
    alert(`Agregaste: ${nombre} al carrito`);
};

// Función para actualizar el contador visual del carrito
const actualizarContador = () => {
    // Aquí puedes implementar la lógica para actualizar un contador en la interfaz
    document.getElementById("contador-carrito").textContent = carrito.length
};






// Guarda el contenido del carrito en el almacenamiento local antes de cerrar la pagina

window.addEventListener("beforeunload",()=>{
localStorage.setItem("carrito",JSON.stringify(carrito))
});

