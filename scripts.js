import PhotoSwipeLightbox from 'https://unpkg.com/photoswipe/dist/photoswipe-lightbox.esm.js';

// Verificar si el dispositivo es de escritorio
function isDesktop() {
    return window.innerWidth >= 992; // Puedes ajustar el ancho según tus necesidades
}

// Inicializar ElevateZoom solo en dispositivos de escritorio
if (isDesktop()) {
    $(".zoomable-image").ezPlus({
        tint: true,
        tintColour: '#F90',
        tintOpacity: 0.5
    });
}

const lightbox = new PhotoSwipeLightbox({
  gallery: '#zoom-galery',
  children: 'a',
  pswpModule: () => import('https://unpkg.com/photoswipe'),
});

lightbox.init();