

/*-----------------*/
/*--- S E A R C H ---*/
/*-----------------*/

// Check if jQuery is loaded
$(document).ready(function() {
    // jQuery is ready
});

/*--- toggle search on button click ---*/
$('.search-button').on('click', function (e) {
    console.log('Search button clicked');
    e.preventDefault();
    e.stopPropagation();
    
    if ($('.search-wrapper').hasClass('active')) {
        console.log('Search is active, performing search');
        // If search is already open, perform search
        performSearch();
    } else {
        console.log('Search is not active, opening search');
        // If search is closed, open it
        $('.search-wrapper').addClass('active');
        $('.search-input').focus();
    }
});

/*--- close search when clicking outside ---*/
$(document).on('click', function (e) {
    if (!$(e.target).closest('.search-wrapper').length) {
        $('.search-wrapper').removeClass('active');
    }
});

/*--- prevent search wrapper click from closing search ---*/
$('.search-wrapper').on('click', function (e) {
    e.stopPropagation();
});

/*--- perform search function ---*/
function performSearch() {
    const searchTerm = $('.search-input').val().trim();
    console.log('Performing search for:', searchTerm);
    
    if (searchTerm) {
        // Redirect to search page with query parameter
        console.log('Redirecting to home page');
        window.location.href = '/';
    } else {
        // If no search term, just close the search
        console.log('No search term, closing search');
        $('.search-wrapper').removeClass('active');
    }
}

/*--- handle Enter key in search input ---*/
$('.search-input').on('keypress', function (e) {
    if (e.which === 13) { // Enter key
        e.preventDefault();
        performSearch();
    }
});

/*-----------------*/
/*--- M O B I L E   M E N U ---*/
/*-----------------*/

/*--- toggle mobile menu on button click ---*/
$('.menu-btn').on('click', function (e) {
    console.log('Menu button clicked');
    e.preventDefault();
    e.stopPropagation();
    
    // Toggle active class on menu button
    $(this).toggleClass('active');
    
    // Toggle header menu visibility
    $('.header-menu').toggleClass('active');
});

/*--- close mobile menu when clicking outside ---*/
$(document).on('click', function (e) {
    if (!$(e.target).closest('.header-menu').length && !$(e.target).closest('.menu-btn').length) {
        $('.menu-btn').removeClass('active');
        $('.header-menu').removeClass('active');
    }
});

/*--- prevent header menu click from closing menu ---*/
$('.header-menu').on('click', function (e) {
    e.stopPropagation();
});


/*-----------------------*/
/*--- F L I C K I T Y ---*/
/*-----------------------*/

$(function () {
    $('.carousel').flickity({
        fade: true,
        contain: true,
        wrapAround: true,
        draggable: false,
        prevNextButtons: false,
        pageDots: false,
        autoPlay: 3000
    });
});


/*-----------------*/
/*--- F O R M S ---*/
/*-----------------*/

