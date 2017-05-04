/**
 * Overrides and removes `MasheryApiSelection.js`, which causes the last plan on the registration to be collapsed until checked when using combined registration.
 * Copyright (c) 2017. TIBCO Software Inc. All Rights Reserved.
 * @author Chris Ferdinandi
 */
;(function (window, document, undefined) {

    'use strict';

    // Variables
    var scripts = document.getElementsByTagName('script'); // Get all scripots
    var defs = document.getElementsByTagName('dd'); // Get all <dd> elements
    var i;

    // Remove MasheryApiSelection.js from DOM
    for (i = 0; i < scripts.length; i++) {
        if ( /MasheryApiSelection.js/.test( scripts[i].src ) ) {
            scripts[i].parentNode.removeChild(scripts[i]);
        }
    }

    // Reset display of <dd> to block and remove click event that hides it
    for (i = 0; i < defs.length; i++) {

        // Cache variables
        var pos = i;
        var def = defs[i];

        // Get the <dd> that MasheryApiSelection hid
        if ( def.style.display === 'none' ) {

            // Grab the checkbox that's toggling it and clone it
            var toggle = defs[i-1];
            var toggleNew = toggle.cloneNode(true);
            var parent = toggle.parentNode;

            // Reset visibility on the <dd> and replace the toggle with the clone
            // (Clones do not carry over click events)
            def.style.display = '';
            parent.insertBefore(toggleNew, toggle);
            parent.removeChild(toggle);

        }
    }

})(window, document);