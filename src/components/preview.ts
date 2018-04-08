import { IComponentOptions } from "angular";

class PreviewComponentController {
    public previewStyle: any;
    private hAlignement: string;
    private vAlignement: string;

    constructor() {
        this.hAlignement = "center";
        this.vAlignement = "center";
        this.previewStyle = {
            "align-items": this.hAlignement,
            "justify-content": this.vAlignement
        };
    }
}

export const previewComponent: IComponentOptions = {
    controller: PreviewComponentController,
    controllerAs: "previewCtrl",
    templateUrl: "components/preview.template.html"
};
