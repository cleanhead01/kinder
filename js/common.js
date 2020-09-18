(function($){

    $(window).load(function(){
        $('.introAni').delay(500).fadeOut(500)
    })

    $('#containerBox').load('main.html')
    
    $('.depth1 > li').hover(
        function(){
            $(this).find('.depth2')
            .stop().slideDown(700)
        },
        function(){
            $(this).find('.depth2')
            .stop().slideUp(500)
        }
    )

    $('.login a, h1 a').on('click', function(e){
        e.preventDefault();
        var url = $(this).attr('href');
        $('#container').remove()
        $('#containerBox').load(url)
    })




})(jQuery)