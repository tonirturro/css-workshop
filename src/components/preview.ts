import { IComponentOptions } from "angular";

class PreviewComponentController {
    public previewStyle: any;
    private hAlignement: string;
    private vAlignement: string;

    /**
     * Initializes a new instance of the PreviewComponentController class.
     */
    constructor() {
        this.hAlignement = "center";
        this.vAlignement = "center";
        this.updatePreviewStyle();
    }

    /**
     * Modify the horizontal alignement for the flex box.
     * @param hAlignement the new value for justify-content
     */
    public setHAlignement(hAlignement: string) {
        this.hAlignement = hAlignement;
        this.updatePreviewStyle();
    }

    /**
     * Modify the vertical alignement for the flex box.
     * @param vAlignement the new value for align-items
     */
    public setVAlignement(vAlignement: string) {
        this.vAlignement = vAlignement;
        this.updatePreviewStyle();
    }

    private updatePreviewStyle() {
        this.previewStyle = {
            "align-items": this.vAlignement,
            "justify-content": this.hAlignement
        };
    }
}

export const previewComponent: IComponentOptions = {
    controller: PreviewComponentController,
    controllerAs: "previewCtrl",
    templateUrl: "components/preview.template.html"
};
