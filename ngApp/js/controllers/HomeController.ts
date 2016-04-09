namespace app.Controllers {
  export class HomeController {
    // public task: app.i.ITask;
    public tasks: Array<app.i.ITask>;
    public checknotes: Array<app.i.IChecknote>;

    // public create() {
    //   this.TaskService.createTask(this.task).then((res) => {
    //     this.$state.go('Home');
    //   })
    // }

    public remove(t) {
      this.TaskService.remove(t._id).then((res) => {
        this.tasks.splice(this.tasks.indexOf(t), 1);
      });
    }

    public update(t) {
      this.TaskService.update(t).then((res) => {
      });
    }

    constructor(
      private TaskService: app.Services.TaskService,
      private ChecknoteService: app.Services.ChecknoteService,
      private $state: ng.ui.IStateService,
      private $stateParams: ng.ui.IStateParamsService
    ) {
        this.tasks = TaskService.getAll();
        this.checknotes = ChecknoteService.getAll();
    }
  }

  angular.module('app').controller('HomeController', HomeController);
}
