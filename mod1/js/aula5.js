$(function(){
/*
    $('img').on("error", function(){
        $('img').attr("src", "img/error.jpg");
    });
*/
/*
    $('img').on("error", function(){
        var imagem = $(this).attr("src");
        alert('Imagem '+imagem+ ' Indisponivel!');
        $('img').attr("src", "img/error.jpg");
    });
*/
 
/*    $(window).resize(function(){
        $('img').width($(window).width()).height($(window).height());
    });
*/

/*
$(window).scroll(function(){
    $('img').fadeOut('1000');
});
*/
$('body').css("height", "5000px")
/*    $(window).scroll(function(){
        var topo = $(window).scrollTop();
        alert(topo)
    });
    */

    $(window).scroll(function(){
        var topo = $(window).scrollTop();
        if(topo > 250){
            $('img').fadeOut('1000');
        } else{
            $('img').fadeIn('1000')
        }
    });
    
});
