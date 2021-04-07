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
        // $('.surroundings').on('click', function() {
        //     resetEvents();
        //     $('.surroundings__map').addClass('surroundings__map--selected');
        //     $('.navBar').removeClass('navBar--hidden');
        //     $('.building').fadeOut('slow');
        // })

        //Click building level fn
        $('.level').on('click', function() {
            resetEvents();
            $(this).addClass('level--selected');
            $('.building').addClass('building--selected');
            $('.navBar').removeClass('navBar--hidden');
            $('.surroundings').fadeOut('slow');
        })

        //Back to outside fn
        $('.nav__btn--all-maps').on('click', function() {
            resetEvents();
            $('.navBar').addClass('navBar--hidden');
            $('.surroundings').fadeIn('slow');
            $('.building').fadeIn('slow');
        })

    }

    //Reset fn
    function resetEvents() {
        $('.surroundings__map').removeClass('surroundings__map--selected');
        $('.surroundings').removeClass('surroundings--hidden');
        $('.level').removeClass('level--selected');
        $('.building').removeClass('building--hidden');
        $('.building').removeClass('building--selected');
    }


    //Init fn all the begain
    init();
})