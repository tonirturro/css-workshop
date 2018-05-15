import { IComponentOptions } from "angular";

class DialogController {

    /**
     * From bindings
     */
    public close: () => void;

    /**
     * Close the dialog
     */
    public closeDialog() {
        this.close();
    }
}

export const dialogComponent: IComponentOptions = {
    bindings: {
        close: "&"
    },
    controller: DialogController,
    controllerAs: "dialogCtrl",
    templateUrl: "components/dialog.template.html"
};
