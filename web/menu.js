$(function () {
    //loginbox---------------------------------------------------------------------||

    //box---------------------------------------------------------------------||
    $('.overlaymn').click(function () {
        $('.contentmn').fadeIn('slow');
        if ($('.contentmn').fadeIn('slow')) {
            $('.overlay1mn,.overlay2mn,.overlay3mn,.overlay4mn,.overlay5mn,.overlay6mn,.overlay7mn,.overlay8mn').hide();
        }

    });
    $('.imgspmn').click(function () {
        $('.contentmn').fadeIn('slow');
        if ($('.contentmn').fadeOut()) {
            $('.overlay1mn,.overlay2mn,.overlay3mn,.overlay4mn,.overlay5mn,.overlay6mn,.overlay7mn,.overlay8mn').show();
        }
    });

    $('.overlaymn1').click(function () {
        $('.contentmn1').fadeIn('slow');
        if ($('.contentmn1').fadeIn('slow')) {
            $('.overlay1mn1,.overlay2mn1,.overlay3mn1,.overlay4mn1,.overlay5mn1,.overlay6mn1,.overlay7mn1,.overlay8mn1').hide();
        }

    });

    //box1---------------------------------------------------------------------||
    $('.overlay1mn').click(function () {
        $('.content1mn').fadeIn('slow');
        if ($('.content1mn').fadeIn('slow')) {
            $('.overlaymn,.overlay2mn,.overlay3mn,.overlay4mn,.overlay5mn,.overlay6mn,.overlay7mn,.overlay8mn').hide();
        }
    });
    $('.imgsp1mn').click(function () {
        $('.content1mn').fadeOut('slow');
        if ($('.content1mn').fadeOut()) {
            $('.overlaymn,.overlay2mn,.overlay3mn,.overlay4mn,.overlay5mn,.overlay6mn,.overlay7mn,.overlay8mn').show();
        }
    });
    //box2---------------------------------------------------------------------||
    $('.overlay2mn').click(function () {
        $('.content2mn').fadeIn('slow');
        if ($('.content2mn').fadeIn('slow')) {
            $('.overlaymn,.overlay1mn,.overlay3mn,.overlay4mn,.overlay5mn,.overlay6mn,.overlay7mn,.overlay8mn').hide();
        }
    });
    $('.imgsp2mn').click(function () {
        $('.content2mn').fadeOut('slow');
        if ($('.content2mn').fadeOut()) {
            $('.overlaymn,.overlay1mn,.overlay3mn,.overlay4mn,.overlay5mn,.overlay6mn,.overlay7mn,.overlay8mn').show();
        }
    });
    //box3---------------------------------------------------------------------||
    $('.overlay3mn').click(function () {
        $('.content3mn').fadeIn('slow');
        if ($('.content3mn').fadeIn('slow')) {
            $('.overlaymn,.overlay1mn,.overlay2mn,.overlay4mn,.overlay5mn,.overlay6mn,.overlay7mn,.overlay8mn').hide();
        }
    });
    $('.imgsp3mn').click(function () {
        $('.content3mn').fadeOut('slow');
        if ($('.content3mn').fadeOut()) {
            $('.overlaymn,.overlay1mn,.overlay2mn,.overlay4mn,.overlay5mn,.overlay6mn,.overlay7mn,.overlay8mn').show();
        }
    });
    //box4---------------------------------------------------------------------||
    $('.overlay4mn').click(function () {
        $('.content4mn').fadeIn('slow');
        if ($('.content4mn').fadeIn('slow')) {
            $('.overlaymn,.overlay1mn,.overlay2mn,.overlay3mn,.overlay5mn,.overlay6mn,.overlay7mn,.overlay8mn').hide();
        }
    });
    $('.imgsp4mn').click(function () {
        $('.content4mn').fadeOut('slow');
        if ($('.content4mn').fadeOut()) {
            $('.overlaymn,.overlay1mn,.overlay2mn,.overlay3mn,.overlay5mn,.overlay6mn,.overlay7mn,.overlay8mn').show();
        }
    });
    //box5---------------------------------------------------------------------||
    $('.overlay5mn').click(function () {
        $('.content5mn').fadeIn('slow');
        if ($('.content5mn').fadeIn('slow')) {
            $('.overlaymn,.overlay1mn,.overlay2mn,.overlay3mn,.overlay4mn,.overlay6mn,.overlay7mn,.overlay8mn').hide();
        }
    });
    $('.imgsp5mn').click(function () {
        $('.content5mn').fadeOut('slow');
        if ($('.content5mn').fadeOut()) {
            $('.overlaymn,.overlay1mn,.overlay2mn,.overlay3mn,.overlay4mn,.overlay6mn,.overlay7mn,.overlay8mn').show();
        }
    });
    //box6---------------------------------------------------------------------||
    $('.overlay6mn').click(function () {
        $('.content6mn').fadeIn('slow');
        if ($('.content6mn').fadeIn('slow')) {
            $('.overlaymn,.overlay1mn,.overlay2mn,.overlay3mn,.overlay4mn,.overlay5mn,.overlay7mn,.overlay8mn').hide();
        }
    });
    $('.imgsp6mn').click(function () {
        $('.content6mn').fadeOut('slow');
        if ($('.content6mn').fadeOut()) {
            $('.overlaymn,.overlay1mn,.overlay2mn,.overlay3mn,.overlay4mn,.overlay5mn,.overlay7mn,.overlay8mn').show();
        }
    });
    //box7---------------------------------------------------------------------||
    $('.overlay7mn').click(function () {
        $('.content7mn').fadeIn('slow');
        if ($('.content7mn').fadeIn('slow')) {
            $('.overlaymn,.overlay1mn,.overlay2mn,.overlay3mn,.overlay4mn,.overlay5mn,.overlay6mn,.overlay8mn').hide();
        }
    });
    $('.imgsp7mn').click(function () {
        $('.content7mn').fadeOut('slow');
        if ($('.content7mn').fadeOut()) {
            $('.overlaymn,.overlay1mn,.overlay2mn,.overlay3mn,.overlay4mn,.overlay5mn,.overlay6mn,.overlay8mn').show();
        }
    });
    //box8---------------------------------------------------------------------||
    $('.overlay8mn').click(function () {
        $('.content8mn').fadeIn('slow');
        if ($('.content8mn').fadeIn('slow')) {
            $('.overlaymn,.overlay1mn,.overlay2mn,.overlay3mn,.overlay4mn,.overlay5mn,.overlay6mn,.overlay7mn').hide();
        }
    });
    $('.imgsp8mn').click(function () {
        $('.content8mn').fadeOut('slow');
        if ($('.content8mn').fadeOut()) {
            $('.overlaymn,.overlay1mn,.overlay2mn,.overlay3mn,.overlay4mn,.overlay5mn,.overlay6mn,.overlay7mn').show();
        }
    });



});
