import { IModalService } from "angular-ui-bootstrap";

interface IAccordionGroup {
  title: string;
  content: string;
}

export class DashboardController {

  /**
   * Dependencies
   */
  public static $inject = ["$uibModal"];

  /**
   * Public properties
   */
  public accordionGroups: IAccordionGroup[];
  public animateShowDialog: boolean;
  public closeOtherAccordions: boolean;

  /**
   * Initializes a new instance from the DashboardController class
   * @param $uibModal modal service provided by ui bootstrap
   */
  constructor(private $uibModal: IModalService) {
    this.accordionGroups = [
      {
        content: "Body - 1",
        title: "Header - 1"
      },
      {
        content: "Body - 2",
        title: "Header - 2"
      },
      {
        content: "Body - 3",
        title: "Header - 3"
      }
    ];
    this.animateShowDialog = false;
    this.closeOtherAccordions = false;
  }

  // tslint:disable-next-line:no-empty
  public showDialog() {
    this.$uibModal.open({
      animation: this.animateShowDialog,
      component: "dialogComponent"
    });
  }
}
