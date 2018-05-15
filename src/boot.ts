import "./styles/styles.scss";

import * as angular from "angular";
import { ITemplateCacheService } from "angular";
import "angular-route";
import "angular-ui-bootstrap";

import { dialogComponent } from "./components/dialog";
import { dialogSection } from "./components/dialog-section";
import { mainComponent } from "./components/main";
import { previewComponent } from "./components/preview";
import { Draggable } from "./directives/draggable";
import { SetPosition } from "./directives/setPosition";
import { DashboardController } from "./views/dashboard.controller";

declare function require(params: string): any;

const module = angular.module("app", [ "ngRoute", "ui.bootstrap" ])
    .component("main", mainComponent)
    .component("dialogComponent", dialogComponent)
    .component("dialogSection", dialogSection)
    .component("preview", previewComponent)
    .directive("setPosition", SetPosition.Factory())
    .directive("draggable", Draggable.Factory())
    .config(($routeProvider: angular.route.IRouteProvider) => {
        $routeProvider
        .when("/", {
            templateUrl: "views/defaults.html"
        })
        .when("/defaults", {
            templateUrl: "views/defaults.html"
        })
        .when("/boxes", {
            templateUrl: "views/boxes.html"
        })
        .when("/dashboard", {
            controller: DashboardController,
            controllerAs: "dashboardCtrl",
            templateUrl: "views/dashboard.html"
        })
        .when("/uilib", {
            templateUrl: "views/uilib.html"
        });
    });

module.run(["$templateCache", ($templateCache: ITemplateCacheService) => {
    $templateCache.put("components/dialog.template.html", require("./components/dialog.template.html"));
    $templateCache.put("components/preview.template.html", require("./components/preview.template.html"));
    $templateCache.put("components/dialog-section.template.html", require("./components/dialog-section.template.html"));
    $templateCache.put("components/main.template.html", require("./components/main.template.html"));
    $templateCache.put("templates/tabset.html", require("./templates/tabset.html"));
    $templateCache.put("views/defaults.html", require("./views/defaults.html"));
    $templateCache.put("views/boxes.html", require("./views/boxes.html"));
    $templateCache.put("views/dashboard.html", require("./views/dashboard.html"));
    $templateCache.put("views/uilib.html", require("./views/uilib.html"));
}]);
