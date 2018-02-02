'use strict';

var draggable = function ($document) {
    return function (scope, element, attr) {
        var startX, startY;
        var y = parseInt(element.css('top').split('px')[0]);
        var x = parseInt(element.css('left').split('px')[0]);

        element.on('mousedown', function (event) {
            // Prevent default dragging of selected content
            event.preventDefault();
            startX = event.pageX - x;
            startY = event.pageY - y;
            $document.on('mousemove', mousemove);
            $document.on('mouseup', mouseup);
            element.css('cursor', ' -webkit-grabbing');
        });

        function mousemove(event) {
            y = event.pageY - startY;
            x = event.pageX - startX;
            element.css({
                top: y + 'px',
                left: x + 'px'
            });
        }

        function mouseup() {
            $document.off('mousemove', mousemove);
            $document.off('mouseup', mouseup);
            element.css('cursor', ' -webkit-grab');
        }
    };
}

module.exports = draggable;