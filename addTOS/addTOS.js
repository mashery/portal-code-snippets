/**
 * Add custom TOS language to Mashery TOS section of the member registration page
 * Copyright (c) 2017. TIBCO Software Inc. All Rights Reserved.
 * @author  Chris Ferdinandi
 * @param {string} newTOS  The new Terms of Service language
 */
var addTOS = function (newTOS) {

    'use strict';

    // Feature test
    if ( !document.querySelector || !window.addEventListener ) return;

    // Only run on member registration page
    if ( !document.documentElement.classList.contains( 'dom-member-register' ) ) return;

    // Only run if new TOS is provided
    if ( !newTOS ) return;

    // Get TOS language
    var tos = document.querySelectorAll( '.dom-member-register .main .section-body p' );

    // Loop through all paragraphs
    for ( var i = 0; i < tos.length; i++ ) {

        // If not the TOS, skip to the next one
        if ( tos[i].innerHTML !== 'By clicking the "Register" button, I certify that I have read and agree to the Mashery <a href="http://www.mashery.com/terms/">Terms of Service</a> and <a href="http://www.mashery.com/privacy/">Privacy Policy</a>' ) continue;

        tos[i].innerHTML = 'By clicking the "Register" button, I certify that I have read and agree to ' + newTOS + ' and the Mashery <a href="http://www.mashery.com/terms/">Terms of Service</a> and <a href="http://www.mashery.com/privacy/">Privacy Policy</a>';
        return;
    }

};