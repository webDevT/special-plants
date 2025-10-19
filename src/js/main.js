
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

   
    $(document).on('click', function (e) {
        if (!$(e.target).closest('.search-wrapper').length) {
            $('.search-wrapper').removeClass('active');
        }
    });


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
        
     
        flickityInstance = $('.carousel').data('flickity');
    }

   
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

/*-----------------*/
/*--- C U S T O M   S E L E C T ---*/
/*-----------------*/


function initCustomSelect() {
    $('.custom-select').each(function() {
        var $customSelect = $(this);
        var $selected = $customSelect.find('.select-selected');
        var $options = $customSelect.find('.select-option');
        
     
        $selected.on('click', function(e) {
            e.stopPropagation();
            closeAllSelects();
            $customSelect.toggleClass('select-arrow-active');
            $customSelect.find('.select-items').toggleClass('select-hide');
        });
        
       
        $options.on('click', function() {
            var $this = $(this);
            var value = $this.data('value');
            var text = $this.text();
            
        
            $selected.html('<span class="show-label">Show:</span> ' + text);
            
            
            $options.removeClass('select-same-as-selected');
            
          
            $this.addClass('select-same-as-selected');
            
          
            $customSelect.removeClass('select-arrow-active');
            $customSelect.find('.select-items').addClass('select-hide');
        });
    });
    
    
    $(document).on('click', function() {
        closeAllSelects();
    });
}


function closeAllSelects() {
    $('.custom-select').removeClass('select-arrow-active');
    $('.select-items').addClass('select-hide');
}


$(document).ready(function() {
    initCustomSelect();
    initFilterTracking();
    initMobileFilters();
});

/*-----------------*/
/*--- F I L T E R   T R A C K I N G ---*/
/*-----------------*/


function initFilterTracking() {
    const $filterContent = $('.filter-content');
    const $clearButton = $('.clear-filter-btn');
    

    function checkActiveFilters() {
        let hasActiveFilters = false;
        
       
        const searchValue = $('.filter-input').val().trim();
        if (searchValue) {
            hasActiveFilters = true;
        }
        
     
        const customSelectText = $('.custom-select .select-selected').text();
        if (!customSelectText.includes('All Seeds')) {
            hasActiveFilters = true;
        }
        
       
        if (!$('#in-stock-only').is(':checked')) {
            hasActiveFilters = true;
        }
        
        
        $('.filter-select:not(.custom-select)').each(function() {
            const selectedValue = $(this).val();
            if (selectedValue && selectedValue !== '') {
                hasActiveFilters = true;
            }
        });
        
        
        if (hasActiveFilters) {
            $filterContent.addClass('has-active-filters');
        } else {
            $filterContent.removeClass('has-active-filters');
        }
    }
    
   
    $('.filter-input').on('input', function() {
        checkActiveFilters();
    });
    
  
    $('#in-stock-only').on('change', function() {
        checkActiveFilters();
    });
    
   
    $('.filter-select:not(.custom-select)').on('change', function() {
        checkActiveFilters();
    });
    
  
    $(document).on('click', '.select-option', function() {
        setTimeout(checkActiveFilters, 10); 
    });
    

    $clearButton.on('click', function(e) {
        e.preventDefault();
        
      
        $('.filter-input').val('');
        
    
        $('.custom-select .select-selected').html('<span class="show-label">Show:</span> All Seeds');
        $('.custom-select .select-option').removeClass('select-same-as-selected');
        $('.custom-select .select-option:first').addClass('select-same-as-selected');
        
       
        $('#in-stock-only').prop('checked', true);
        
        
        $('.filter-select:not(.custom-select)').each(function() {
            $(this).find('option:first').prop('selected', true);
        });
        
        
        checkActiveFilters();
    });
    
    
    checkActiveFilters();
}

/*-----------------*/
/*--- M O B I L E   F I L T E R S ---*/
/*-----------------*/


function initMobileFilters() {
    const $filterButton = $('.filter-button');
    const $filterSection = $('.filter-section');
    const $closeFilterButton = $('.close-filter-button');
    
   
    $filterButton.on('click', function(e) {
        e.preventDefault();
        $filterSection.addClass('active');
        $('body').addClass('filter-open'); 
    });
    

    $closeFilterButton.on('click', function(e) {
        e.preventDefault();
        closeMobileFilters();
    });
    
   
    $filterSection.on('click', function(e) {
        if (e.target === this) {
            closeMobileFilters();
        }
    });
    
    
    $(document).on('keydown', function(e) {
        if (e.key === 'Escape' && $filterSection.hasClass('active')) {
            closeMobileFilters();
        }
    });
    
   
    function closeMobileFilters() {
        $filterSection.removeClass('active');
        $('body').removeClass('filter-open');
    }
}
