$(function(){
    $('#menu_btn').on('change', function() {
        if ($(this).is(':checked')) {
            $('.navicon_text').addClass('fade-out');
            setTimeout(() => {
                $('.navicon_text').text('open').removeClass('fade-out').addClass('fade-in');
            }, 319); // 319ms後にテキスト変更
        } else {
            $('.navicon_text').addClass('fade-out');
            setTimeout(() => {
                $('.navicon_text').text('menu').removeClass('fade-out').addClass('fade-in');
            }, 319); // 319ms後にテキスト変更
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
  });