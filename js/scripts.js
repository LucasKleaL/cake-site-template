$(document).ready(function(){

    $(".carousel").slick({

        infinite: true,
        speed: 200,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        prevArrow: $("#seta-prev"),
        nextArrow: $("#seta-next"),
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
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