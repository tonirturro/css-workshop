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
                style: "section__status--" + self.statusCode
            };
        };        
    }
};

function dialogSectionController() {
    var self = this;
    this.$onInit(function() {
        self.status = {
            title: "text",
            style: "section__status--ok"
        };
    });
}

module.exports = dialogSection;