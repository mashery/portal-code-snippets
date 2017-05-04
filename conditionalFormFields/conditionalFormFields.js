/**
 * Conditionally load fields in the contact form based on a visitors response to a radio button question
 * Copyright (c) 2017. TIBCO Software Inc. All Rights Reserved.
 * @author Chris Ferdinandi
 * @param {string}   question  Selector for question (uses querySelector)
 * @param {object}   answers   The answers, and the fields to show when they're selected
 * @param {function} callback  A callback to run after fields are shown and hidden
 */
var conditionalFormFields = function (question, answers, callback) {

    'use strict';


    // Sanity check
    if ( !question || !answers || Object.prototype.toString.call(answers) !== '[object Object]' ) return;

    // Feature test
    if ( !document.querySelector || !window.addEventListener ) return;


    //
    // Methods
    //

    /**
     * A simple forEach() implementation for Arrays, Objects and NodeLists.
     * @private
     * @author Todd Motto
     * @link   https://github.com/toddmotto/foreach
     * @param {Array|Object|NodeList} collection Collection of items to iterate
     * @param {Function}              callback   Callback function for each iteration
     * @param {Array|Object|NodeList} scope      Object/NodeList/Array that forEach is iterating over (aka `this`)
     */
    var forEach = function ( collection, callback, scope ) {
        if ( Object.prototype.toString.call( collection ) === '[object Object]' ) {
            for ( var prop in collection ) {
                if ( Object.prototype.hasOwnProperty.call( collection, prop ) ) {
                    callback.call( scope, collection[prop], prop, collection );
                }
            }
        } else {
            for ( var i = 0 ; i < collection.length; i++ ) {
                callback.call( scope, collection[i], i, collection );
            }
        }
    };

    /**
     * Get the closest parent element that matches a selector.
     * @param  {Element} elem     Starting element
     * @param  {String}  selector Selector to match against
     * @return {Boolean|Element}  Returns null if not match found
     */
    var getClosest = function ( elem, selector ) {

        // Element.matches() polyfill
        if (!Element.prototype.matches) {
            Element.prototype.matches =
                Element.prototype.matchesSelector ||
                Element.prototype.mozMatchesSelector ||
                Element.prototype.msMatchesSelector ||
                Element.prototype.oMatchesSelector ||
                Element.prototype.webkitMatchesSelector ||
                function(s) {
                    var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                        i = matches.length;
                    while (--i >= 0 && matches.item(i) !== this) {}
                    return i > -1;
                };
        }

        // Get closest match
        for ( ; elem && elem !== document; elem = elem.parentNode ) {
            if ( elem.matches( selector ) ) return elem;
        }

        return null;

    };

    var hideField = function ( field ) {
        if ( !field ) return;
        field.style.display = 'none';
        field.style.visibility = 'hidden';
        if ( !field.value || field.value === ''  ) {
            field.value = 'null';
        }
    };

    var showField = function ( field ) {
        if ( !field ) return;
        field.style.display = 'block';
        field.style.visibility = 'visible';
        if ( field.value === 'null' ) {
            field.value = '';
        }
    };

    var hideFields = function ( chosen ) {
        forEach(answers, function (fields, answer) {

            // Don't hide the select answer fields
            if ( chosen.toString() === answer.toString() ) return;

            // Sanity check
            if ( Object.prototype.toString.call(fields) !== '[object Array]' ) return;

            // Hide the fields
            forEach(fields, function (selector) {
                hideField( document.querySelector( '[for="' + selector + '"]' ) );
                hideField( document.querySelector( '#' + selector ) );
            });

        });
    };

    var showFields = function ( chosen ) {

        // Get the fields
        var fields = answers[chosen];

        // Sanity check
        if ( !fields ) return;
        if ( Object.prototype.toString.call(fields) !== '[object Array]' ) return;

        // Hide the fields
        forEach(fields, function (selector) {
            showField( document.querySelector( '[for="' + selector + '"]' ) );
            showField( document.querySelector( '#' + selector ) );
        });

    };

    /**
     * Handle toggle click events
     * @private
     */
    var eventHandler = function (event) {
        var toggle = getClosest( event.target, question );
        if ( !toggle ) return;
        hideFields( toggle.value );
        showFields( toggle.value );
        if ( callback && typeof( callback ) === 'function') {
            callback( toggle );
        }
    };



    //
    // Event Listeners and inits
    //

    // Get the question selector
    var selector = document.querySelector( question );
    if ( !selector ) return;

    // Show/hide fields on load
    hideFields( selector.value );

    // Listen for click events
    document.addEventListener('click', eventHandler, false);

};