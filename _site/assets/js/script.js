$(function () {
    // focus on search input with '/' key.
    $("body").on("keyup", function (e) {
        e.stopPropagation();
        var slashKeys = [47, 111, 191];
        if (slashKeys.some(function (value) { return e.keyCode == value })) {
            $("#search").focus();
        }
    });

    // add `target="_blank"` into all outer links.
    var host = document.location.host;
    $("a[href]").each(function() {
        var re = new RegExp(host, "g");
        if ($(this).attr("href").match(/\/\//) && !$(this).attr("href").match(re)) {
            $(this).attr("target", "_blank");
        }
    });

    // center and linkable all images.
    var $images = $("article img:not(.emoji, .eye-catch)");
    $images.closest("p").css("text-align", "center");
    $images.each(function () {
        var imgUrl = $(this).attr("src");
        var $a = $("<a>").attr("href", imgUrl).attr("target", "_blank");
        $(this).wrap($a);
    });

    // stick aside.
    var topSpacing = $(".site-aside").css("padding-top").replace(/px/, "");
    $(".site-aside .sticky").sticky({
        topSpacing: parseInt(topSpacing)
    });
    $('img').maphilight();

    $('.rctlink0').mouseover(function(e) {
        $('#rct0').mouseover();
    }).mouseout(function(e) {
        $('#rct0').mouseout();
    }).click(function(e) { e.preventDefault(); });

    $('.rctlink1').mouseover(function(e) {
        $('#rct1').mouseover();
    }).mouseout(function(e) {
        $('#rct1').mouseout();
    }).click(function(e) { e.preventDefault(); });

    $('.rctlink2').mouseover(function(e) {
        $('#rct2').mouseover();
    }).mouseout(function(e) {
        $('#rct2').mouseout();
    }).click(function(e) { e.preventDefault(); });

    $('.rctlink3').mouseover(function(e) {
        $('#rct3').mouseover();
    }).mouseout(function(e) {
        $('#rct3').mouseout();
    }).click(function(e) { e.preventDefault(); });

    $('.rctlink4').mouseover(function(e) {
        $('#rct4').mouseover();
    }).mouseout(function(e) {
        $('#rct4').mouseout();
    }).click(function(e) { e.preventDefault(); });

    $('.rctlink5').mouseover(function(e) {
        $('#rct5').mouseover();
    }).mouseout(function(e) {
        $('#rct5').mouseout();
    }).click(function(e) { e.preventDefault(); });

    $('.rctlink6').mouseover(function(e) {
        $('#rct6').mouseover();
    }).mouseout(function(e) {
        $('#rct6').mouseout();
    }).click(function(e) { e.preventDefault(); });   

    $('.rctlink7').mouseover(function(e) {
        $('#rct7').mouseover();
    }).mouseout(function(e) {
        $('#rct7').mouseout();
    }).click(function(e) { e.preventDefault(); });   

        $('.rctlink8').mouseover(function(e) {
        $('#rct8').mouseover();
    }).mouseout(function(e) {
        $('#rct8').mouseout();
    }).click(function(e) { e.preventDefault(); });   

        $('.rctlink9').mouseover(function(e) {
        $('#rct9').mouseover();
    }).mouseout(function(e) {
        $('#rct9').mouseout();
    }).click(function(e) { e.preventDefault(); });   


    

});
