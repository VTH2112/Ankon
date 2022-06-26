$(function () {
    $('#menu-infor').click(function () {
        $('#show-menu-bar').toggle('slow');
    });
    $('#loginclick').click(function () {
        $('.loginbox').toggle('slow');
    });
    $('#cartclick').click(function () {
        $('.cartbodyborder').fadeIn(1200);
        $('.homebodyborder').hide();
        $('.aboutbodyborder').hide();
        $('.menubodyborder').hide();
        $('.eventbodyborder').hide();
        $('.contactbodyborder').hide();
        $('.cocktailmenu').hide();
        $('.milkteamenu').show();
        $('.teamenu').hide();
        $('.cakemenu').hide();

    });


    $('#showloginform').click(function () {
        $('.bodyform').show('slow');
        $('.login').show()
        $('.containermain').hide();
    });

    $('#signinform').click(function () {
        $('.bodyform').show('slow');
        $('.signup').show()
        $('.login').hide()
        $('.containermain').hide();
    });
    $('#signuptab').click(function () {
        $('.login').hide();
        $('.signup').show('slow');
    });
    $('#logintab').click(function () {
        $('.login').show('slow');
        $('.signup').hide('slow');
    });
    $('#clearlogin').click(function () {
        $('#msg1').empty();
    });
    $('#checkout').click(function () {
        alert('Bạn đã đặt hàng thành công');
    });


    $('#homeclick,#homeclick1').click(function () {
        $('.homebodyborder').fadeIn();
        $('.aboutbodyborder,.contentmn,.content1mn,.content2mn,.content3mn,.content4mn,.content5mn,.content6mn,.content7mn,.content8mn').hide();
        $('.menubodyborder').hide();
        $('.eventbodyborder').hide();
        $('.contactbodyborder').hide();
        $('.cartbodyborder').hide();
        $('#homeclick').css({ 'font-weight': 'bold', 'font-size': '40px', 'transition': 'ease 0.5s' });
        $('#aboutclick').css({ 'font-weight': 'normal', 'font-size': '30px', 'transition': 'ease 0.5s' });
        $('#menuclick').css({ 'font-weight': 'normal', 'font-size': '30px', 'transition': 'ease 0.5s' });
        $('#eventclick').css({ 'font-weight': 'normal', 'font-size': '30px', 'transition': 'ease 0.5s' });
        $('#contactclick').css({ 'font-weight': 'normal', 'font-size': '30px', 'transition': 'ease 0.5s' });

    });
    $('#aboutclick').click(function () {
        $('.aboutbodyborder').fadeIn();
        $('.homebodyborder,.contentmn,.content1mn,.content2mn,.content3mn,.content4mn,.content5mn,.content6mn,.content7mn,.content8mn').hide();
        $('.menubodyborder').hide();
        $('.eventbodyborder').hide();
        $('.contactbodyborder').hide();
        $('.cartbodyborder').hide();
        $('#homeclick').css({ 'font-weight': 'normal', 'font-size': '30px', 'transition': 'ease 0.5s' });
        $('#aboutclick').css({ 'font-weight': 'bold', 'font-size': '40px', 'transition': 'ease 0.5s' });
        $('#menuclick').css({ 'font-weight': 'normal', 'font-size': '30px', 'transition': 'ease 0.5s' });
        $('#eventclick').css({ 'font-weight': 'normal', 'font-size': '30px', 'transition': 'ease 0.5s' });
        $('#contactclick').css({ 'font-weight': 'normal', 'font-size': '30px', 'transition': 'ease 0.5s' });
    });
    $('#menuclick,#menuclick1').click(function () {
        $('.menubodyborder').fadeIn();
        $('.homebodyborder,.contentmn,.content1mn,.content2mn,.content3mn,.content4mn,.content5mn,.content6mn,.content7mn,.content8mn').hide();
        $('.aboutbodyborder').hide();
        $('.eventbodyborder').hide();
        $('.contactbodyborder').hide();
        $('.cartbodyborder').hide();
        $('.cocktailmenu').hide();
        $('.cakemenu').hide();
        $('.milkteamenu').show();
        $('.teamenu').hide();
        $('.milktea').css({ 'font-weight': 'bold', 'font-size': '30px' });
        $('.cocktail').css({ 'font-weight': 'normal', 'font-size': '20px', 'transition': 'ease 0.5s' });
        $('.cake').css({ 'font-weight': 'normal', 'font-size': '20px', 'transition': 'ease 0.5s' });
        $('.tea').css({ 'font-weight': 'normal', 'font-size': '20px', 'transition': 'ease 0.5s' });
        $('#homeclick').css({ 'font-weight': 'normal', 'font-size': '30px', 'transition': 'ease 0.5s' });
        $('#aboutclick').css({ 'font-weight': 'normal', 'font-size': '30px', 'transition': 'ease 0.5s' });
        $('#menuclick').css({ 'font-weight': 'bold', 'font-size': '40px', 'transition': 'ease 0.5s' });
        $('#eventclick').css({ 'font-weight': 'normal', 'font-size': '30px', 'transition': 'ease 0.5s' });
        $('#contactclick').css({ 'font-weight': 'normal', 'font-size': '30px', 'transition': 'ease 0.5s' });
    });
    $('.buttonbestseller').click(function () {
        $('.menubodyborder').fadeIn();
        $('.cakemenu').fadeIn();
        $('.milkteamenu,.overlaymn,.overlay1mn,.overlay2mn,.overlay3mn,.overlay4mn,.overlay5mn,.overlay6mn,.overlay7mn,.overlay8mn').hide();
        $('.teamenu').hide();
        $('.cocktailmenu').hide();
        $('#bestseller1box').fadeIn();
        $('.homebodyborder').hide();
        $('.aboutbodyborder').hide();
        $('.eventbodyborder').hide();
        $('.contactbodyborder').hide();
        $('.cartbodyborder').hide();
        $('.milktea').css({ 'font-weight': 'normal', 'font-size': '20px' });
        $('.cocktail').css({ 'font-weight': 'normal', 'font-size': '20px', 'transition': 'ease 0.5s' });
        $('.cake').css({ 'font-weight': 'bold', 'font-size': '30px', 'transition': 'ease 0.5s' });
        $('.tea').css({ 'font-weight': 'normal', 'font-size': '20px', 'transition': 'ease 0.5s' });
        $('#homeclick').css({ 'font-weight': 'normal', 'font-size': '30px', 'transition': 'ease 0.5s' });
        $('#aboutclick').css({ 'font-weight': 'normal', 'font-size': '30px', 'transition': 'ease 0.5s' });
        $('#menuclick').css({ 'font-weight': 'bold', 'font-size': '40px', 'transition': 'ease 0.5s' });
        $('#eventclick').css({ 'font-weight': 'normal', 'font-size': '30px', 'transition': 'ease 0.5s' });
        $('#contactclick').css({ 'font-weight': 'normal', 'font-size': '30px', 'transition': 'ease 0.5s' });
    });
    $('.buttonbestseller1').click(function () {
        $('.menubodyborder').fadeIn();
        $('.cocktailmenu').fadeIn();
        $('.milkteamenu,.overlaymn,.overlay1mn,.overlay2mn,.overlay3mn,.overlay4mn,.overlay5mn,.overlay6mn,.overlay7mn,.overlay8mn').hide();
        $('.teamenu').hide();
        $('.cakemenu').hide();
        $('#bestseller1').fadeIn();
        $('.homebodyborder').hide();
        $('.aboutbodyborder').hide();
        $('.eventbodyborder').hide();
        $('.contactbodyborder').hide();
        $('.cartbodyborder').hide();
        $('.milktea').css({ 'font-weight': 'normal', 'font-size': '20px' });
        $('.cocktail').css({ 'font-weight': 'bold', 'font-size': '30px', 'transition': 'ease 0.5s' });
        $('.cake').css({ 'font-weight': 'normal', 'font-size': '20px', 'transition': 'ease 0.5s' });
        $('.tea').css({ 'font-weight': 'normal', 'font-size': '20px', 'transition': 'ease 0.5s' });
        $('#homeclick').css({ 'font-weight': 'normal', 'font-size': '30px', 'transition': 'ease 0.5s' });
        $('#aboutclick').css({ 'font-weight': 'normal', 'font-size': '30px', 'transition': 'ease 0.5s' });
        $('#menuclick').css({ 'font-weight': 'bold', 'font-size': '40px', 'transition': 'ease 0.5s' });
        $('#eventclick').css({ 'font-weight': 'normal', 'font-size': '30px', 'transition': 'ease 0.5s' });
        $('#contactclick').css({ 'font-weight': 'normal', 'font-size': '30px', 'transition': 'ease 0.5s' });
    });
    $('#eventclick,.btn-content1').click(function () {
        $('.eventbodyborder').fadeIn();
        $('.homebodyborder').hide();
        $('.aboutbodyborder').hide();
        $('.menubodyborder').hide();
        $('.contactbodyborder').hide();
        $('.cartbodyborder').hide();
        $('#homeclick').css({ 'font-weight': 'normal', 'font-size': '30px', 'transition': 'ease 0.5s' });
        $('#aboutclick').css({ 'font-weight': 'normal', 'font-size': '30px', 'transition': 'ease 0.5s' });
        $('#menuclick').css({ 'font-weight': 'normal', 'font-size': '30px', 'transition': 'ease 0.5s' });
        $('#eventclick').css({ 'font-weight': 'bold', 'font-size': '40px', 'transition': 'ease 0.5s' });
        $('#contactclick').css({ 'font-weight': 'normal', 'font-size': '30px', 'transition': 'ease 0.5s' });
    });
    $('#contactclick').click(function () {
        $('.contactbodyborder').fadeIn();
        $('.homebodyborder').hide();
        $('.aboutbodyborder').hide();
        $('.menubodyborder').hide();
        $('.eventbodyborder').hide();
        $('.cartbodyborder').hide();
        $('#homeclick').css({ 'font-weight': 'normal', 'font-size': '30px', 'transition': 'ease 0.5s' });
        $('#aboutclick').css({ 'font-weight': 'normal', 'font-size': '30px', 'transition': 'ease 0.5s' });
        $('#menuclick').css({ 'font-weight': 'normal', 'font-size': '30px', 'transition': 'ease 0.5s' });
        $('#eventclick').css({ 'font-weight': 'normal', 'font-size': '30px', 'transition': 'ease 0.5s' });
        $('#contactclick').css({ 'font-weight': 'bold', 'font-size': '40px', 'transition': 'ease 0.5s' });
    });

    $('.milktea').click(function () {
        $('.milkteamenu,.overlaymn,.overlay1mn,.overlay2mn,.overlay3mn,.overlay4mn,.overlay5mn,.overlay6mn,.overlay7mn,.overlay8mn').show(1200);
        $('.cocktailmenu').hide();
        $('.cakemenu').hide();
        $('.teamenu,.contentmn,.content1mn,.content2mn,.content3mn,.content4mn,.content5mn,.content6mn,.content7mn,.content8mn').hide();
        $('.milktea').css({ 'font-weight': 'bold', 'font-size': '30px','transition':'ease 0.5s'});
        $('.cocktail').css({ 'font-weight': 'normal', 'font-size': '20px', 'transition': 'ease 0.5s' });
        $('.cake').css({ 'font-weight': 'normal', 'font-size': '20px', 'transition': 'ease 0.5s' });
        $('.tea').css({ 'font-weight': 'normal', 'font-size': '20px', 'transition': 'ease 0.5s' });

    });
    $('.cocktail').click(function () {
        $('.cocktailmenu,.overlaymn,.overlay1mn,.overlay2mn,.overlay3mn,.overlay4mn,.overlay5mn,.overlay6mn,.overlay7mn,.overlay8mn').show(1200);
        $('.milkteamenu').hide();
        $('.cakemenu').hide();
        $('.teamenu,.contentmn,.content1mn,.content2mn,.content3mn,.content4mn,.content5mn,.content6mn,.content7mn,.content8mn').hide();
        $('.milktea').css({ 'font-weight': 'normal', 'font-size': '20px', 'transition': 'ease 0.5s' });
        $('.cocktail').css({ 'font-weight': 'bold', 'font-size': '30px', 'transition': 'ease 0.5s' });
        $('.cake').css({ 'font-weight': 'normal', 'font-size': '20px', 'transition': 'ease 0.5s' });
        $('.tea').css({ 'font-weight': 'normal', 'font-size': '20px', 'transition': 'ease 0.5s' });
    });
    $('.cake').click(function () {
        $('.cakemenu,.overlaymn,.overlay1mn,.overlay2mn,.overlay3mn,.overlay4mn,.overlay5mn,.overlay6mn,.overlay7mn,.overlay8mn').show(1200);
        $('.milkteamenu').hide();
        $('.cocktailmenu').hide();
        $('.teamenu,.contentmn,.content1mn,.content2mn,.content3mn,.content4mn,.content5mn,.content6mn,.content7mn,.content8mn').hide();
        $('.milktea').css({ 'font-weight': 'normal', 'font-size': '20px', 'transition': 'ease 0.5s' });
        $('.cocktail').css({ 'font-weight': 'normal', 'font-size': '20px', 'transition': 'ease 0.5s' });
        $('.cake').css({ 'font-weight': 'bold', 'font-size': '30px', 'transition': 'ease 0.5s' });
        $('.tea').css({ 'font-weight': 'normal', 'font-size': '20px', 'transition': 'ease 0.5s' });
    });
    $('.tea').click(function () {
        $('.teamenu,.overlaymn,.overlay1mn,.overlay2mn,.overlay3mn,.overlay4mn,.overlay5mn,.overlay6mn,.overlay7mn,.overlay8mn').show(1200);
        $('.milkteamenu').hide();
        $('.cocktailmenu').hide();
        $('.cakemenu,.contentmn,.content1mn,.content2mn,.content3mn,.content4mn,.content5mn,.content6mn,.content7mn,.content8mn').hide();
        $('.milktea').css({ 'font-weight': 'normal', 'font-size': '20px', 'transition': 'ease 0.5s' });
        $('.cocktail').css({ 'font-weight': 'normal', 'font-size': '20px', 'transition': 'ease 0.5s' });
        $('.cake').css({ 'font-weight': 'normal', 'font-size': '20px', 'transition': 'ease 0.5s' });
        $('.tea').css({ 'font-weight': 'bold', 'font-size': '30px', 'transition': 'ease 0.5s' });
    });
    var mode = "auto";

    setInterval(function () {
        if (mode === "auto") {
            showNextImage();
        }
    }, 3000);

    function showNextImage() {
        var $actEl = $('.active');
        var $nextEl = $actEl.next('.slide');
        if ($nextEl.length) {
            $actEl.removeClass('active');
            $nextEl.addClass('active');
        } else {
            $actEl.removeClass('active');
            $('.slide:first-child').addClass('active');
        }
    }
});
