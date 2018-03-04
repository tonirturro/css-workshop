'use strict';

var dialogSection = {
    bindings: {
        statusText: '@',
        statusCode: '@'
    },
    transclude: true,
    template: require('./dialog-section.template.html'),
    controller: function() {
        var self = this;
        this.$onInit = function() {
            self.status = {
                title: self.statusText,
                style: "status--" + self.statusCode
            };
        };        
    }
};

module.exports = dialogSection;