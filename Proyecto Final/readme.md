

PAGINA PRINCIPAL

1. Estructura básica del HTML
<!DOCTYPE html>: Declara que el documento utiliza HTML5.
<html lang="es">: Indica que el idioma principal del contenido es español.
<head>: Contiene metadatos y configuraciones generales del documento.


2. Meta etiquetas en el <head>
<meta charset="UTF-8">: Establece la codificación de caracteres para admitir caracteres especiales (como tildes y ñ).
<meta name="viewport" content="width=device-width, initial-scale=1.0">: Hace que el sitio sea responsive al ajustarse al ancho del dispositivo.


3. Importación de fuentes y estilos
Fuentes de Google: Se utiliza la fuente "Kanit" importada desde Google Fonts.
Bootstrap CSS: Se incluye Bootstrap para diseño responsive.
<link rel="stylesheet" href="./css/style.css">: Vincula el archivo de estilos personalizado.


4. Configuración del <body>
El contenido principal de la página está dividido en varias secciones:

a. Header (Encabezado)
Menú de navegación:
Incluye el logo, el nombre de la tienda, enlaces internos y un acceso directo a "Quiénes somos".
Contiene iconos de carrito y perfil de usuario utilizando la librería Boxicons.

b. Carrusel de imágenes
Se implementa el carrusel utilizando componentes de Bootstrap.
Contiene indicadores (botones) y controles de navegación (flechas de anterior y siguiente).
Cada imagen incluye texto alternativo (alt) para accesibilidad.

c. Main (Contenido principal)
Subtítulos y secciones de productos:
Cada subtítulo agrupa productos en diferentes categorías: "Taladros", "Moladoras", "Hidros", etc.
Tarjetas de productos:
Se crean usando las clases de Bootstrap.
Contienen una imagen, nombre del producto, descripción y precio.

d. Formulario para consultas.

e. Footer (Pie de página)
Información de contacto:
Enlace a la sección "Quiénes somos".
Iconos de redes sociales.


5. Scripts al final del <body>
Para optimizar el rendimiento, los scripts se cargan al final del documento:

Bootstrap JS: Necesario para los componentes interactivos.
Boxicons JS: Habilita el uso de iconos

QUIENES SOMOS

Página de Quiénes Somos
1. Estructura HTML
El diseño del sitio se organiza utilizando etiquetas semánticas HTML5 como <header>, <main>, y <footer>. A continuación, se describe la estructura de la página y las secciones más relevantes:

2. Encabezado
El encabezado incluye una barra de navegación con:

a. Logo: Una imagen representando a la empresa Herramientas Shop.
Nombre de la Empresa: Título que refleja la identidad de la marca.
Iconos: Acceso rápido al carrito de compras y al perfil de usuario.

3. Contenido Principal
Sección Quiénes Somos
Incluye información destacada sobre la empresa:

a. Breve historia.
Misión: Distribuir herramientas de construcción modernas y clásicas en Argentina.
Valores: Enfoque en atención al cliente y accesibilidad.
html
Copiar código

b. video publicitario de los productos.

c. Formulario de Contacto
Permite a los usuarios enviar consultas con los siguientes campos:
Nombre
Correo Electrónico
Mensaje

4. Pie de Página
El footer incluye:

a. Enlaces a redes sociales como Facebook, Instagram, Twitter, TikTok y YouTube, representados mediante iconos.

CSS
1. Estilos Generales
Configuran la tipografía, márgenes, y paddings de la página.

*body
*a

2. Encabezado y Navegación
Estiliza el encabezado, la barra de navegación y los enlaces.
*header 
*nav
*.nav_enlaces a
*.nav_enlaces a:hover

3. Carrusel
Define estilos específicos para el carrusel.
*.carousel
*.carousel-item

4. Tarjetas de Productos
Controla la disposición de tarjetas con productos en diferentes secciones.
*.main_cards_1, .main_cards_3
*.card

5. Pie de Página
Estiliza el pie de página y los formularios de contacto.
*footer
*.ontacto
*.contacto input, .contacto textarea

6. Media Queries
Ajusta el diseño para diferentes tamaños de pantalla.

Pantallas Grandes (Min 1500px)
@media (min-width: 1500px) {
    .Logo
    .main_cards
    .card
}

Tablets (480px - 768px)
@media (min-width: 480px) and (max-width: 768px) {
    .Logo
    .nav_inicio
    .card
}

Celulares (320px - 480px)
@media (min-width: 320px) and (max-width: 480px) {
    .Logo
    .nav_inicio
    .card
}

CARRITO

1. se crea HTML carrito el cual interactua con el index principal mediante el index.js y carrito.js

2.se genera vinculo hacia la pagina principal desde el logo y titulo, al igual que un boton de volver.

3. se implementas el CSS style.css 

4. se visualizaran los productos sumados al carrito, junto con la descripcion, imagen, y un apartado con el total d la suma de los mismos.

INDEX.JS

1. se genera la funcion agregarAlCarrito. el cual obtiene la funcion del html de los productos obtenidos para luego llevarlos a carrito.html

2. se agrega el boton "agregar" a las cards para la interaccion.

3. se adiciona un contador de los productos agregados en el icono carrito del nav.

CARRITO.js

1. la funcion mostrarCarrito, muestra la imagen del producto, el nombre y el precio. y un boton "eliminar"para quitarlo de la lista.

2. funcion finalizar compra es para compreltar y pagar los productos, al finalizar redirecciona a la pagina princial.