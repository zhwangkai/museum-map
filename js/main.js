/**
 *
 * main.js
 * This is the main function js to implement the museum 
 * 
 **/

$(document).ready(function() {

    'use strict';

    //init 
    function init() {
        //init events
        initEvents();
    }

    /**
     * Initialize events fn
     **/

    function initEvents() {

        // Click surrounding fn
        $('.surroundings__map').on('click', function() {
            $('.building').css('opacity', '0');
        })


    }

    init();
})
