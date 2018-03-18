import "./styles/styles.scss";

import * as angular from "angular";
import "angular-route";
import "angular-ui-bootstrap";

import { dialogSection } from "./components/dialog-section";
import { mainComponent } from "./components/main";
import { Draggable } from "./directives/draggable";
import { SetPosition } from "./directives/setPosition";

declare function require(params: string): any;

const module = angular.module("app", [ "ngRoute", "ui.bootstrap" ])
    .component("main",  mainComponent)
    .component("dialogSection", dialogSection)
    .directive("setPosition", SetPosition.Factory())
    .directive("draggable", Draggable.Factory())
    .config(($routeProvider: angular.route.IRouteProvider) => {
        $routeProvider
        .when("/", {
            template: require("./views/defaults.html")
        })
        .when("/defaults", {
            template: require("./views/defaults.html")
        })
        .when("/boxes", {
            template: require("./views/boxes.html")
        })
        .when("/dialog", {
            template: require("./views/dialog.html")
        })
        .when("/dashboard", {
            template: require("./views/dashboard.html")
        })
        .when("/uilib", {
            template: require("./views/uilib.html")
        });
    });
