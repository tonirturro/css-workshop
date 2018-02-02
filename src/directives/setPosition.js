'use strict';

var setPosition = function($parse) {
    return function(scope, element, attrs) {
        var parms = attrs['setPosition'].split(' ');
        if (parms.length === 2) {
            element.css({
                top: parms[0] + 'px',
                left: parms[1] + 'px'
            });
        }
    };
}

module.exports = setPosition;