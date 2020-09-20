$(document).ready(function(){

    $(".carousel").slick({

        infinite: true,
        speed: 200,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        arrows: true,
        prevArrow: $("#seta-prev"),
        nextArrow: $("#seta-next"),
        autoplay: true,
        
    });

    $(".carousel").on("afterChange", function(){
        $("#nomeProduto").text($(".slick-center").data("name"));
        $("#precoProduto").text($(".slick-center").data("price"));
    });

    $(".carousel").on('init', function(){
        $("#nomeProduto").text($(".slick-center").data("name"));
        $("#precoProduto").text($(".slick-center").data("price"));
    });

    $(".carousel").on('reInit', function(){
        $("#nomeProduto").text($(".slick-center").data("name"));
        $("#precoProduto").text($(".slick-center").data("price"));
    });

});