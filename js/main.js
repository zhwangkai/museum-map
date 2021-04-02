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
        $('.surroundings').on('click', function() {
            resetEvents();
            $(this).addClass('surroundings--selected');
            $('.navBar').removeClass('.navBar--hidden');
        })

        $('.level').on('click', function() {
            resetEvents();
            $(this).addClass('level--selected');
            $('.navBar').removeClass('.navBar--hidden');
        })

        $('.nav__btn--all-levels').on('click', function() {
            resetEvents();
            $('.navBar').addClass('.navBar--hidden');
        })


    }

    function resetEvents() {
        $('.surroundings').removeClass('surroundings--selected');
        $('.level').removeClass('.level--selected');
    }

    init();
})