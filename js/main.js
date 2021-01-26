const hoverEl = function() {
    let slider = document.getElementById('app-slider-id');

    window.onmousemove = function(e) {
        let x = e.clientX;

        slider.style.left = x + 'px';
    };
};

window.addEventListener('load', function() {
    const text = document.querySelector('.app-slider__hover');
    const loader = document.querySelector('.app-loader');
    
    loader.classList.add('app-loader_no-active'); 

    setTimeout (function() {
        text.className += ' app-slider__hover_hidden';
    }, 2000);

    hoverEl();
});