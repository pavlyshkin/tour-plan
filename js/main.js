const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.slider-button--next',
    prevEl: '.slider-button--prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

});

ymaps.ready(init);
function init(){
  var myMap = new ymaps.Map('map',{
    center: [7.60275901, 79.79381638],
    zoom: 13
  });
}

