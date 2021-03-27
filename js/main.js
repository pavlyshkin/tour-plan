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
  event.preventDefault()
  var modalOverlay = $(".modal__overlay");
  var modalDialog = $(".modal__dialog");
  modalDialog.removeClass('modal__dialog--visible');
  modalOverlay.removeClass('modal__overlay--visible');
  }
  $(document).keydown(function(event) { 
  if (event.keyCode == 27) { 
    $('.modal__overlay').hide();
    $('.modal__dialog').hide();
  }
  });
  // Обработка форм
  $('.form').each(function(){
    $(this).validate({
    errorClass: "invalid",
    messages: {
      name: {
        required: "Provide a name",
        minlength: "The name must not be shorter than 2 letters",
      },
      email: {
        required: "We need your email address to contact you",
        email: "Your email address must be in the format of name@domain.com"
      },
      phone: {
        required: "Phone is required",
      },
    },
  });
  })
  $('.phone').mask('+0(000)000-00-00', {placeholder: "Phone Number*"});
  AOS.init();
  let isValid = ($('#email').val().match(/.+?\@.+/g) || []).length === 1;
  
  $('.mail').each(function(){
    $(this).validate({
      errorClass: "onvalid",
      messages: {
        mail: {
          required: "Need email for contact",
          email: "Email form name@domain.com"
        },
      },
    })
  });

   $('.shape').each(function(){
    $(this).validate({
    errorClass: "fovalid",
    messages: {
      name: {
        required: "Provide a name",
        minlength: "The name must not be shorter than 2 letters",
      },
      email: {
        required: "We need your email address to contact you",
        email: "Your email address must be in the format of name@domain.com"
      },
      phone: {
        required: "Phone is required",
      },
    },
  });
 })
});