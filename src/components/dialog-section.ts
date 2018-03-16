import { IComponentOptions } from "angular";

declare function require(params: string): any;

interface IStatus {
    title: string;
    style: string;
}

class DialogSectionController {
    public statusText: string;
    public statusCode: string;
    public status: IStatus;

    public $onInit() {
        this.status = {
            style: `status--${this.statusCode}`,
            title: this.statusText,
        };
    }
}

export const dialogSection: IComponentOptions = {
    bindings: {
        statusCode: "@",
        statusText: "@"
    },
    controller: DialogSectionController,
    template: require("./dialog-section.template.html"),
    transclude: true
};
