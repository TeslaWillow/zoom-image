// Inicializar ElevateZoom
$("#zoom-image").ezPlus({
    tint: true,
    tintColour: '#F90',
    tintOpacity: 0.5
});

// Inicializar Hammer.js
const imageElement = document.getElementById('zoom-image');
const hammer = new Hammer(imageElement);

// Configurar eventos de pinch
hammer.get('pinch').set({ enable: true });

let currentScale = 1;
const ez = $('#zoom-image').data('elevateZoom');

hammer.on('pinchstart', function() {
    currentScale = ez.currentZoomLevel;
});

hammer.on('pinch', function(ev) {
    const scale = currentScale * ev.scale;
    ez.changeState('enable');
    ez.zoomLevel = scale;
    ez.zoom();
});

hammer.on('pinchend', function() {
    ez.changeState('disable');
});
