/*---------------------------------------*/
/*--- H E L P E R   F U N C T I O N S ---*/
/*---------------------------------------*/

/*--- hide elements initially ---*/
$(function () {
    $('.hidden-onload').hide().removeClass('hidden-onload');
});

$('.button.-toggle').on('click', function () {
    $(this).toggleClass('-on');
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

/*--- highlight errors on forms ---*/
$(function () {
    $('form.highlight-errors').each(function () {
        isFormValid($(this));
    });
});

/*--- mark input as "touched" after blur ---*/
$('.form input').on('blur', function () {
    $(this).addClass('touched');
});

/*--- remove error highlight once input has focus ---*/
$('.form input').on('focus', function () {
    $(this).removeClass('error');
});

/*--- On form submit, mark all fields as touched and trigger validation ---*/
function isFormValid(frm) {
    let valid = true;

    $(frm).find('input, textarea').each(function () {
        $(this).addClass('touched');

        if (!$(this)[0].checkValidity()) valid = false;
    });

    $(frm)
        .removeClass('valid, invalid')
        .addClass(valid ? 'valid' : 'invalid')
        .find(':invalid').first().focus();

    return valid;
}