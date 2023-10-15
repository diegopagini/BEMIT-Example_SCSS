//  CUSTOM JS
(function($) {


    // --- GLOBAL VARS ---------------------------- 

        var last_scroll_top = 0;
        var top_display = 100;

    // END GLOBAL VARS -----------------------------




    // --- GLOBAL FUNCTIONS ---------------------------- 

    function my_toggle_menudropdown(){

        $('.js-toggle-menu-dropdown').off();
        $('.js-toggle-menu-dropdown').click(function(){
            $('.js-menu-dropdown').toggleClass('is-active');
            $('.js-header').toggleClass('is-active');
        });

    }

    function my_scroll(){

        last_scroll_top = 0;
        top_display = 100;

        $(window).off('scroll')
        $(window).on('scroll', function(e){

            var scroll_top = $(this).scrollTop();

            if ( (scroll_top > last_scroll_top) && (scroll_top > top_display) ){
                // downscroll code
                $('.js-header').addClass('has-transform');
            } else {
                // upscroll code
                $('.js-header').removeClass('has-transform');
            }
            
            last_scroll_top = scroll_top;

        });

    }

    function my_scrollmagic(){

        // init ScrollMagic Controller
        var controller = new ScrollMagic.Controller();

        var $target_item = $('.js-scroll-item');

        if(!!$target_item.length){

            $($target_item).each(function(i, item){

                var $item = $(item);

                // Scene Handler
                var scene = new ScrollMagic.Scene({
                    triggerElement: $item, // point of execution
                    triggerHook: '0.4', // top of the viewport
                    reverse: true // allows the effect to trigger when scrolled in the reverse direction
                })
                // .addIndicators() // DEBUG
                .setClassToggle($item, 'is-visible')
                .addTo(controller);

            });

        }

    }


    // END GLOBAL FUNCTIONS ---------------------------- 

    // --- ON LOAD --------------------------------------
    $(function () {

        my_scroll();
        my_scrollmagic();
        my_toggle_menudropdown();

    });
    // END ON LOAD --------------------------------------


})(jQuery);
