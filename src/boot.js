'use strict';
import "./styles/styles.scss";
import angular from "angular";
import "angular-route";

angular.module('app', ['ngRoute'])
    .config(function($routeProvider) {
        $routeProvider
        .when('/', {
            template: require('./views/defaults.html')
        })
        .when('/defaults', {
            template: require('./views/defaults.html')
        })
        .when('/scenario2', {
            template: require('./views/scenario2.html')
        });   
    });