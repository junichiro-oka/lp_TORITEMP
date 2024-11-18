$(function(){
     $('.nav_list a').on('click', function (e) {
        e.preventDefault();

        const target = $(this).attr('href');
        const headerHeight = $('header').outerHeight();
        const targetPosition = $(target).offset().top - headerHeight;

        $('html, body').animate({
            scrollTop: targetPosition
        }, 500);
    });

    $('#menu_btn').on('change', function() {
        if ($(this).is(':checked')) {
            $('.navicon_text').addClass('fade-out');
            setTimeout(() => {
                $('.navicon_text').text('open').removeClass('fade-out').addClass('fade-in');
            }, 319);
        } else {
            $('.navicon_text').addClass('fade-out');
            setTimeout(() => {
                $('.navicon_text').text('menu').removeClass('fade-out').addClass('fade-in');
            }, 319);
        }
    });

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 42,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            900: {
                slidesPerView: 3,
            },
            700: {
                slidesPerView: 2,
            }
        }

    });

    $('.accordion-header').click(function() {
        $('.accordion-content').not($(this).next()).slideUp();
        $('.accordion-header').not($(this)).removeClass('active');
        
        $(this).next().slideToggle();
        $(this).toggleClass('active');
    });

    $('.nav_links a, .header_button a').on('click', function() {
        $('#menu_btn').prop('checked', false);
    });

    const fixElement = document.querySelector('.fix');
    const formElement = document.querySelector('#form');

    window.addEventListener('scroll', () => {
      const formPosition = formElement.getBoundingClientRect();
      const isFormVisible = formPosition.top < window.innerHeight && formPosition.bottom > 0;

      if (isFormVisible) {
        fixElement.classList.add('hidden');
      } else {
        fixElement.classList.remove('hidden');
      }
    });



  });