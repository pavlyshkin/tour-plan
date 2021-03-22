$(document).ready(function () {
    const hotelSlider = new Swiper('.hotel-slider', {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.hotel-slider__button--next',
      prevEl: '.hotel-slider__button--prev',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    effect: "coverflow"
  });

  const reviewsSlider = new Swiper('.reviews-slider', {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.reviews-slider__button--next',
      prevEl: '.reviews-slider__button--prev',
    },

  });


  var menuButton = $(".menu-button")
  menuButton.on('click', function (){
    $(".navbar-bottom").toggleClass('navbar-bottom--visible')
  });

  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on('click',openModal);
  closeModalButton.on('click', closeModal)

  function openModal() {
    var targetModal = $(this).attr('data-href');
    $(targetModal).find('.modal__overlay').addClass("modal__overlay--visible");
    $(targetModal).find('.modal__dialog').addClass("modal__dialog--visible");
  }
  function closeModal (event) {
  event.preventDefold()
  var modalOverlay = $(".modal__overlay");
  var modalDialog = $(".modal__dialog");
  modalDialog.closeClass('modal__dialog--visible');
  modalOverlay.closeClass('modal__overlay--visible');
  }
  $(document).keydown(function(event) { 
  if (event.keyCode == 27) { 
    $('.modal__overlay').hide();
    $('.modal__dialog').hide();
  }
});
});