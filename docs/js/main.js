
/*-----------------*/
/*--- S E A R C H ---*/
/*-----------------*/

$(document).ready(function() {
    
    // Search functionality
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

    // Close search on outside click
    $(document).on('click', function (e) {
        if (!$(e.target).closest('.search-wrapper').length) {
            $('.search-wrapper').removeClass('active');
        }
    });

    // Prevent search wrapper click from closing
    $('.search-wrapper').on('click', function (e) {
        e.stopPropagation();
    });

    // Search on Enter key
    $('.search-input').on('keypress', function (e) {
        if (e.which === 13) { // Enter key
            e.preventDefault();
            performSearch();
        }
    });

    /*-----------------*/
    /*--- M O B I L E   M E N U ---*/
    /*-----------------*/

    // Mobile menu toggle
    $('.menu-btn').on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        
        $(this).toggleClass('active');
        $('.header-menu').toggleClass('active');
    });

    // Close mobile menu on outside click
    $(document).on('click', function (e) {
        if (!$(e.target).closest('.header-menu').length && !$(e.target).closest('.menu-btn').length) {
            $('.menu-btn').removeClass('active');
            $('.header-menu').removeClass('active');
        }
    });

    // Prevent menu click from closing
    $('.header-menu').on('click', function (e) {
        e.stopPropagation();
    });

    /*-----------------------*/
    /*--- F L I C K I T Y ---*/
    /*-----------------------*/

    // Initialize carousel if present
    let flickityInstance = null;
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
        
        // Get flickity instance
        flickityInstance = $('.carousel').data('flickity');
    }

    // Handle window resize for carousel - more aggressive approach
    let resizeTimeout;
    $(window).on('resize orientationchange', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function() {
            if (flickityInstance) {
              
                const currentIndex = flickityInstance.selectedIndex;
                const isPlaying = flickityInstance.isPlaying;
                
                
                $('.carousel').flickity('destroy');
                
              
                flickityInstance = $('.carousel').flickity({
                    fade: true,
                    contain: true,
                    wrapAround: true,
                    draggable: true,
                    prevNextButtons: false,
                    pageDots: true,
                    autoPlay: isPlaying ? 8000 : false,
                    pauseAutoPlayOnHover: false,
                    dragThreshold: 10,
                    freeScroll: false,
                    selectedAttraction: 0.025,
                    friction: 0.28,
                    cellAlign: 'center',
                    initialIndex: currentIndex
                }).data('flickity');
            }
        }, 500); 
    });

    
    $('.carousel-cell img').on('load', function() {
        if (flickityInstance) {
            flickityInstance.resize();
        }
    });
});

// Search function
function performSearch() {
    const searchTerm = $('.search-input').val().trim();
    
    if (searchTerm) {
        // TODO: Implement actual search functionality
        console.log('Searching for:', searchTerm);
        window.location.href = '/';
    } else {
        $('.search-wrapper').removeClass('active');
    }
}
