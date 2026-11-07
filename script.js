function showLayer(layerId) {
    document.querySelectorAll('.layer').forEach(layer => layer.classList.remove('active'));
    document.getElementById(layerId).classList.add('active');
}

function openLightbox(src) {
    const lightbox = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');
    img.src = src;
    lightbox.style.display = 'flex';
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}
