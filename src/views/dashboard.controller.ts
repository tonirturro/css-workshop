import { IModalService } from "angular-ui-bootstrap";

export class DashboardController {

  /**
   * Dependencies
   */
  public static $inject = ["$uibModal"];

  /**
   * Initializes a new instance from the DashboardController class
   * @param $uibModal modal service provided by ui bootstrap
   */
  constructor(private $uibModal: IModalService) {
  }

  // tslint:disable-next-line:no-empty
  public showDialog() {
    this.$uibModal.open({
      animation: false,
      component: "dialogComponent"
    });
  }
}
