namespace app.Controllers {
  export class HomeController {
    public tasks: Array<app.i.ITask>;

    public remove(t) {
      this.TaskService.remove(t._id).then((res) => {
        this.tasks.splice(this.tasks.indexOf(t), 1);
      });
    }

    public update(t) {
      this.TaskService.update(t._id).then((res) => {
        this.$state.go('Home', { id: t._id });
      });
    }

    constructor(
      private TaskService: app.Services.TaskService,
      private $state: ng.ui.IStateService,
      private $stateParams: ng.ui.IStateParamsService
    ) {
        this.tasks = TaskService.getAll();
    }
  }

  angular.module('app').controller('HomeController', HomeController);
}
