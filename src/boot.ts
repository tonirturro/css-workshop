'use strict';
import "./styles/styles.scss";
import * as angular from "angular";
import "angular-route"
import { mainComponent } from "./components/main";
import { dialogSection } from "./components/dialog-section";
import { Draggable } from "./directives/draggable";

declare function require(params:string): any;

const module = angular.module('app', [ 'ngRoute' ])
    .component('main',  mainComponent)
    .component('dialogSection', dialogSection)
    .directive('setPosition', require('./directives/setPosition'))
    .directive('draggable', Draggable.Factory())
    .config(($routeProvider: ng.route.IRouteProvider) => {
        $routeProvider
        .when('/', {
            template: require('./views/defaults.html')
        })
        .when('/defaults', {
            template: require('./views/defaults.html')
        })
        .when('/boxes', {
            template: require('./views/boxes.html')
        })
        .when('/dialog', {
            template: require('./views/dialog.html')
        })        
        .when('/dashboard', {
            template: require('./views/dashboard.html')
        });     
    });
