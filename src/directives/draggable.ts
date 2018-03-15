import { IAugmentedJQuery, IAttributes, IScope} from "angular";

export class Draggable {
    public link: (scope: IScope, element: IAugmentedJQuery, attr: IAttributes) => void;
    private element: IAugmentedJQuery;
    private startX: number;
    private startY: number;
    private x: number;
    private y: number;

    constructor(private $document: IAugmentedJQuery) {
        Draggable.prototype.link = (scope: IScope, element: IAugmentedJQuery, attr: IAttributes) => {
            this.element = element;
            this.y = parseInt(element.css('top').split('px')[0]);
            this.x = parseInt(element.css('left').split('px')[0]);
    
            this.element.on('mousedown',  (event: JQueryEventObject) => {
                // Prevent default dragging of selected content
                event.preventDefault();
                this.startX = event.pageX - this.x;
                this.startY = event.pageY - this.y;
                $document.on('mousemove', this.mousemove);
                $document.on('mouseup', this.mouseup);
                element.css('cursor', ' -webkit-grabbing');
            });    
        }
    }

    public static Factory() {
        const directive = ($document: IAugmentedJQuery) => {
            return new Draggable($document);
        }

        directive['$inject'] = ['$document'];

        return directive;
    }

    private mousemove(event) {
        this.y = event.pageY - this.startY;
        this.x = event.pageX - this.startX;
        this.element.css({
            top: this.y + 'px',
            left: this.x + 'px'
        });
    }

    private mouseup() {
        this.$document.off('mousemove', this.mousemove);
        this.$document.off('mouseup', this.mouseup);
        this.element.css('cursor', ' -webkit-grab');
    }
}