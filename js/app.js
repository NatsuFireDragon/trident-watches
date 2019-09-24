$(function(){
    // Menu Slide out
    var sideMenu = $('.side-menu');

    $('.menu-btn').on('click', ()=>{
        sideMenu.css('width', '230px');
    })

    $('.close-btn').on('click', () =>{
        sideMenu.css('width', '0');
    })

    // Fav like heart
    $('i.like-icon').on('click', function(){
        $(this).toggleClass('active');
    })

    // Clicking the Shopping cart adds number to cart
    var count = 0;
    $('i.cart-icon').on('click', function(){
        count ++;
        $('span.cart-num').text(count);
    })

// END OF JQUERY FUNCTION
});