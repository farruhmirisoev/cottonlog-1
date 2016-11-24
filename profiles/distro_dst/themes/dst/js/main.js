(function($) {
    $(document).ready(function() {
        $('#drop-down').click(function() {
            $(this).toggleClass('open');
            $('#block-system-main-menu').slideToggle('fast');
        });
        // $('#block-views-map-cottonlog-block .view-map-cottonlog .view-header .view-display-id-block_1 .view-header img').draggable();
        $('#block-views-main-slider-block .view-main-slider .view-content').slick({
            arrows: false,
            autoplay: true,
            dots: true,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
            useTransform: true,
            zIndex: 1
        });
        $('#block-user-login .item-list').appendTo($('#block-user-login .content form'));
        if ($('#block-user-login #edit-submit').val() == 'Log in') {
            $('#block-user-login #edit-submit').val('GO!');
        };
        $('body.front #main #block-block-1 .block-title').wrap($('<div class="about-title"></div>'));
        $('.outer-li').click(function() {

            if ($(this).children('.inner-ul').css('display') == 'block') {
                $(this).removeClass('active');
                $(this).children('.inner-ul').slideUp();
                return false;
            } {
                $('.inner-ul').slideUp();
                $(this).children('.inner-ul').slideToggle("slow");
                $('.outer-li').removeClass('active');
                $(this).addClass('active');
            };



        });

        $('#block-views-map-cottonlog-block .content .view.view-map-cottonlog.view-id-map_cottonlog.view-display-id-block').on('click', 'span', function() {
            var captionsNum = $(this).parent().parent().index();
            $('#block-views-map-cottonlog-block .content .view.view-map-cottonlog.view-id-map_cottonlog.view-display-id-block .view-header .view.view-map-cottonlog.view-id-map_cottonlog.view-display-id-block_1 .view-content .views-row').eq(captionsNum).fadeToggle();
        });
        $('#block-views-map-cottonlog-block .view-map-cottonlog .view-header .view-display-id-block_1 .view-header').append('<div class="zoom"><li class="plus button-zoom">+</li><li class="minus button-zoom">-</li></div>');
        var scaleNum = 1;
        var scaleNumFixed = scaleNum.toFixed(1);
        var scale = 'scale(' + scaleNumFixed + ')';
        $('.zoom .button-zoom.plus').click(function() {
            $('.zoom .button-zoom.minus').css({
                'cursor': 'pointer',
                'background': '#518c2e'
            });
            if (scaleNumFixed == 1.4) {
                $('.zoom .button-zoom.plus').css({
                    'cursor': 'default',
                    'background': '#3b6621'
                });
                return false;
            } {
                scaleNum = scaleNum + 0.1;
                scaleNumFixed = scaleNum.toFixed(1);
                scale = 'scale(' + scaleNumFixed + ')';
                $('#block-views-map-cottonlog-block .view-map-cottonlog .view-header .view-display-id-block_1 .view-header img').css('-webkit-transform', scale);
                $('#block-views-map-cottonlog-block .view-map-cottonlog .view-header .view-display-id-block_1 .view-content .views-field-field-map-layer-road img').css('-webkit-transform', scale);
                if (scaleNumFixed == 1.4) {
                    $('.zoom .button-zoom.plus').css({
                        'cursor': 'default',
                        'background': '#3b6621'
                    });
                    return false;
                };
            }

        });
        $('.zoom .button-zoom.minus').click(function() {
            $('.zoom .button-zoom.plus').css({
                'cursor': 'pointer',
                'background': '#518c2e'
            });
            if (scaleNumFixed == 1.0) {
                $('.zoom .button-zoom.minus').css({
                    'cursor': 'default',
                    'background': '#3b6621'
                });
                return false;
            } {
                scaleNum = scaleNum - 0.1;
                scaleNumFixed = scaleNum.toFixed(1);
                scale = 'scale(' + scaleNumFixed + ')';
                $('#block-views-map-cottonlog-block .view-map-cottonlog .view-header .view-display-id-block_1 .view-header img').css('-webkit-transform', scale);
                $('#block-views-map-cottonlog-block .view-map-cottonlog .view-header .view-display-id-block_1 .view-content .views-field-field-map-layer-road img').css('-webkit-transform', scale);
                if (scaleNumFixed == 1) {
                    $('.zoom .button-zoom.minus').css({
                        'cursor': 'default',
                        'background': '#3b6621'
                    });
                    return false;
                };
            }

        });
        //place


        //last row

    }); //doc ready end--------------------------------    

    $('#block-views-map-cottonlog-block .content .view.view-map-cottonlog.view-id-map_cottonlog.view-display-id-block .view-header .view.view-map-cottonlog.view-id-map_cottonlog.view-display-id-block_1 .view-header img').draggable();

    // set equal height of collums 
    function setEqualHeight(columns) {
        var tallestcolumn = 0;
        columns.each(function() {
            currentHeight = $(this).height();
            if (currentHeight > tallestcolumn) {
                tallestcolumn = currentHeight;
            }
        });
        columns.height(tallestcolumn);
    }

    // dropdown 
    function upDown(object, target) {
        $(target).hide();
        $(object).click(function() {
            if ($(target).is(':visible')) $(target).slideUp('fast');
            else $(target).slideDown('fast');
        }).css('cursor', 'pointer');
    }

    Drupal.behaviors.temizaciya_formy = {

        attach: function(context, settings) {

        }

    }

}(jQuery));
