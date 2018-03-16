import { IAttributes, IAugmentedJQuery, IScope } from "angular";

export class SetPosition {
    public static Factory() {
        return () => {
            return new SetPosition();
        };
    }

    public link(scope: IScope, element: IAugmentedJQuery, attrs: IAttributes): void {
        const parms = attrs.setPosition.split(" ");
        if (parms.length === 2) {
            element.css({
                left: parms[1] + "px",
                top: parms[0] + "px"
            });
        }
    }
}
