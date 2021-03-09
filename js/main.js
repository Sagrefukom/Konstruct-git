$ (function () {
    $slick_slider = $('.about__images');
  settings = {
  dots: true,
  arrows: false,
  nextArrow: '<div class="my-nextArrow"><img src="./img/icon-next-vector.svg" alt=""></div>',
  prevArrow: '<div class="my-prevArrow"><img src="./img/icon-prev-vector.svg" alt=""></div>',
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  mobileFirst: true,
  adaptiveHeight: true,
  autoplay: true,
  centerPadding: '25px',
}
$slick_slider.slick(settings);

$(window).on('resize', function() {
  if ($(window).width() < 300) {
    if ($slick_slider.hasClass('slick-initialized')) {
      $slick_slider.slick('unslick');
    }
    return
  }

  if (!$slick_slider.hasClass('slick-initialized')) {
    return $slick_slider.slick(settings);
  }
    });



    $('#burger-button').on('click', function() {
        $('.nav').toggleClass('nav--burger');
        $('.burger__button-item').toggleClass('active');
      });

      $(window).on('resize', function() {
        const currentWindowWidth = $(this).innerWidth();

        if (currentWindowWidth > 992 &&  $('.nav').hasClass('nav--burger')) {
          $('.nav').removeClass('nav--burger')
        }
      });

    $(window).on('scroll', function() {
        var top = $(document).scrollTop();
        if (top < 750) $(".header__container").removeClass('header-fixed');
        else $(".header__container").addClass('header-fixed');
    });

        
});