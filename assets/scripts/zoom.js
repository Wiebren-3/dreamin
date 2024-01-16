document.addEventListener('DOMContentLoaded', function () {
    const containerMap = document.querySelector('.draggable');
    let isDragging = false;
    let startX, startY, offsetX, offsetY;

    containerMap.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.clientX;
        startY = e.clientY;
        offsetX = containerMap.scrollLeft;
        offsetY = containerMap.scrollTop;
        containerMap.style.cursor = 'grabbing';
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
        containerMap.style.cursor = 'grab';
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        const deltaX = e.clientX - startX;
        const deltaY = e.clientY - startY;
        containerMap.scrollLeft = offsetX - deltaX;
        containerMap.scrollTop = offsetY - deltaY;
    });

    // Voorkom tekstselectie tijdens het slepen
    document.addEventListener('selectstart', function (e) {
        e.preventDefault();
    });

    // Voeg de volgende code toe om de zoomfuncties aan te roepen wanneer er op de knoppen wordt geklikt
    document.querySelector('.zoom-buttons button:nth-child(1)').addEventListener('click', zoomIn);
    document.querySelector('.zoom-buttons button:nth-child(2)').addEventListener('click', zoomOut);
});

// Voeg de volgende functies toe voor het in- en uitzoomen
function zoomIn() {
    const containerMap = document.querySelector('.container-map img');
    containerMap.style.transform = 'scale(1.2)'; /* Pas de schaalwaarde aan voor het inzoomen */
}

function zoomOut() {
    const containerMap = document.querySelector('.container-map img');
    containerMap.style.transform = 'scale(1)'; /* Terug naar de oorspronkelijke schaalwaarde */
}
