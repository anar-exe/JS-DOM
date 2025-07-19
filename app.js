"use strict";
$(document).ready(function () {

    $('.btn').click(function () {
        let val = $('input').val();

        if ($.isNumeric(val)) {
            let num = parseInt(val);
            for (let i = 0; i < num; i++) {
                $('.output').append(`<div class="minibox d-flex justify-content-center"><h1>${num}</h1></div>`);
            }
        } else {
            $('.output').append(`<div class="minibox d-flex justify-content-center"><h1>${val}</h1></div>`);
        }

        $('input').val('');
    });
});