namespace app.Controllers {
  export class TaskCreateController {
    public task: app.i.ITask;

    public create() {
      this.TaskService.createTask(this.task).then((res) => {
        this.$state.go('Home');
      })
    }

    constructor(
      private TaskService: app.Services.TaskService,
      private ChecknoteService: app.Services.ChecknoteService,
      private $state: ng.ui.IStateService
    ) {}

  }
  angular.module('app').controller('TaskCreateController', TaskCreateController);
}
