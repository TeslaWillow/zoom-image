import PhotoSwipeLightbox from 'https://unpkg.com/photoswipe/dist/photoswipe-lightbox.esm.js';

// Verificar si el dispositivo es de escritorio
function isDesktop() {
    return window.innerWidth >= 992; // Puedes ajustar el ancho según tus necesidades
}

const initElevateZoom = () => {
    $(".zoomable-image").ezPlus();
};

const updateRefToNewImage = () => {
    const mainImage = document.querySelector("#zoom-image");
    let src = mainImage.getAttribute('src');

    // Generar un número aleatorio entre 0 y 9
    const randomDigit = Math.floor(Math.random() * 10);

    // Modificar el último carácter para que sea el número aleatorio
    if (src.length > 0) { src = src.slice(0, -1) + randomDigit; }

    // Actualizar el atributo src con el nuevo valor
    console.log("new src: " + src);
    mainImage.setAttribute('src', src);

    // UPDATE ELEVATE ZOOM
    const zoomWindow = document.querySelector(".zoomWindow");
    if(!zoomWindow) { return; }

    // Actualizar la propiedad background-image del elemento zoomWindow
    zoomWindow.style.backgroundImage = `url(${src})`;

    // UPDATE PHOTO SWIPE
    const pswpContainer = document.querySelector("#pswp-container");
    if (!pswpContainer) { return; }

    pswpContainer.setAttribute('data-pswp-src', src);
    console.log("Updated data-pswp-src: " + src);
};

// Inicializar ElevateZoom solo en dispositivos de escritorio
if (isDesktop()) {
    initElevateZoom();
}

window.addEventListener( 'resize', updateRefToNewImage );


const lightbox = new PhotoSwipeLightbox({
  gallery: '#zoom-galery',
  children: 'a',
  pswpModule: () => import('https://unpkg.com/photoswipe'),
});

lightbox.init();