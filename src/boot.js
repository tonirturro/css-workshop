'use strict';
import "./styles/styles.scss";
import angular from "angular";
import "angular-route";

angular.module('app', ['ngRoute'])
    .component('main', require('./components/main'))
    .config(function($routeProvider) {
        $routeProvider
        .when('/', {
            template: require('./views/defaults.html')
        })
        .when('/defaults', {
            template: require('./views/defaults.html')
        })
        .when('/boxes', {
            template: require('./views/boxes.html')
        });   
    });