// 'use strict';

// var dialogSection = {
//     bindings: {
//         statusText: '@',
//         statusCode: '@'
//     },
//     transclude: true,
//     template: require('./dialog-section.template.html'),
//     controller: function() {
//         var self = this;
//         this.$onInit = function() {
//             self.status = {
//                 title: self.statusText,
//                 style: "status--" + self.statusCode
//             };
//         };        
//     }
// };

// module.exports = dialogSection;

import { IComponentOptions } from "angular";
declare function require(params:string): any;

interface IStatus {
    title: string;
    style: string;
}

export class dialogSectionController {
    public statusText: string;
    public statusCode: string;
    public status: IStatus;

    public $onInit() {
        this.status = {
            title: this.statusText,
            style: `status--${this.statusCode}`
        }
    }
}

export const dialogSection: IComponentOptions = {
    bindings: {
        statusText: '@',
        statusCode: '@'
    },
    transclude: true,
    template: require('./dialog-section.template.html'),
    controller: dialogSectionController
}

