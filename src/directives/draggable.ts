import { IAttributes, IAugmentedJQuery, IScope } from "angular";

export class Draggable {

    public static Factory() {
        const directive = ($document: IAugmentedJQuery) => {
            return new Draggable($document);
        };

        directive.$inject = ["$document"];

        return directive;
    }

    private element: IAugmentedJQuery;
    private startX: number;
    private startY: number;
    private x: number;
    private y: number;

    /**
     * Initializes an object from the Draggable class.
     * @param $document The loaded HTML page
     */
    constructor(private $document: IAugmentedJQuery) {}

    /**
     * Directive link function to capture mouse events
     * @param scope the parent scope
     * @param element the element where the directive is attached
     * @param attr the attributes from the element where the directive is attached
     */
    public link(scope: IScope, element: IAugmentedJQuery, attr: IAttributes): void {
        this.element = element;
        this.y = parseInt(this.element.css("top").split("px")[0], 10);
        this.x = parseInt(this.element.css("left").split("px")[0], 10);
        this.element.on("mousedown",  (event: JQueryEventObject) => {
            // Prevent default dragging of selected content
            event.preventDefault();
            this.startX = event.pageX - this.x;
            this.startY = event.pageY - this.y;
            this.$document.on("mousemove", (mouseMoveEvent: JQueryEventObject) => { this.mousemove(mouseMoveEvent); });
            this.$document.on("mouseup", () => { this.mouseup(); });
            this.element.css("cursor", " -webkit-grabbing");
        });
    }

    /**
     * Captures the mouse movement and translates it to the attached element
     * @param event the mouse event parameters
     */
    private mousemove(event: JQueryEventObject) {
        this.y = event.pageY - this.startY;
        this.x = event.pageX - this.startX;
        this.element.css({
            left: this.x + "px",
            top: this.y + "px"
        });
    }

    /**
     * Ends drag at mouse up and detach from the mouse events
     */
    private mouseup() {
        this.$document.off("mousemove");
        this.$document.off("mouseup");
        this.element.css("cursor", " -webkit-grab");
    }
}
