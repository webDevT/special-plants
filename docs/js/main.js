

/*-----------------*/
/*--- S E A R C H ---*/
/*-----------------*/


$(document).ready(function() {
  
    /*-----------------*/
    /*--- S E A R C H ---*/
    /*-----------------*/

    $('.search-button').on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    
    if ($('.search-wrapper').hasClass('active')) {
       
        performSearch();
    } else {
       
        $('.search-wrapper').addClass('active');
        $('.search-input').focus();
    }
});


$(document).on('click', function (e) {
    if (!$(e.target).closest('.search-wrapper').length) {
        $('.search-wrapper').removeClass('active');
    }
});


$('.search-wrapper').on('click', function (e) {
    e.stopPropagation();
});


function performSearch() {
    const searchTerm = $('.search-input').val().trim();
    console.log('Performing search for:', searchTerm);
    
    if (searchTerm) {
        
        console.log('Redirecting to home page');
        window.location.href = '/';
    } else {
 
        console.log('No search term, closing search');
        $('.search-wrapper').removeClass('active');
    }
}


    $('.search-input').on('keypress', function (e) {
        if (e.which === 13) { // Enter key
            e.preventDefault();
            performSearch();
        }
    });

    /*-----------------*/
    /*--- M O B I L E   M E N U ---*/
    /*-----------------*/

    $('.menu-btn').on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    
   
    $(this).toggleClass('active');
    

    $('.header-menu').toggleClass('active');
});


$(document).on('click', function (e) {
    if (!$(e.target).closest('.header-menu').length && !$(e.target).closest('.menu-btn').length) {
        $('.menu-btn').removeClass('active');
        $('.header-menu').removeClass('active');
    }
});


    $('.header-menu').on('click', function (e) {
        e.stopPropagation();
    });

    /*-----------------------*/
    /*--- F L I C K I T Y ---*/
    /*-----------------------*/

    if ($('.carousel').length > 0) {
        $('.carousel').flickity({
            fade: true,
            contain: true,
            wrapAround: true,
            draggable: true,
            prevNextButtons: false,
            pageDots: true,
            autoPlay: 8000,
            pauseAutoPlayOnHover: false,
            dragThreshold: 10,
            freeScroll: false,
            selectedAttraction: 0.025,
            friction: 0.28,
            cellAlign: 'center',
            initialIndex: 0
        });
    }

});




