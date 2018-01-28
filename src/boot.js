'use strict';
import "./styles/main.css";
import angular from "angular";
import "angular-route";

angular.module('app', ['ngRoute'])
    .config(function($routeProvider) {
        $routeProvider
        .when('/', {
            template: require('./views/scenario1.html')
        })
        .when('/scenario1', {
            template: require('./views/scenario1.html')
        })
        .when('/scenario2', {
            template: require('./views/scenario2.html')
        });   
    });