namespace app.Controllers {
  export class TaskNoteController {
    public checknotes: Array<app.i.IChecknote>;
    public task: app.i.ITask;
    public checknote: app.i.IChecknote = {_id: undefined, title: undefined, dueDate: undefined, note: undefined, completeOrnah: false};

    public create() {
      this.checknote.task = this.task._id;
      this.ChecknoteService.create(this.checknote).then((res) => {
        this.task.checknotes.push(res);

        this.checknote.title = "";
        this.checknote.user = "";
      });
    }

    public remove(c) {
      this.ChecknoteService.remove(c._id).then((res) => {
        this.task.checknotes.splice(this.task.checknotes.indexOf(c), 1);
      })
    }

    public update(c) {
      this.ChecknoteService.update(c).then((res) => {
      });
    }

    constructor(
      private $stateParams: ng.ui.IStateParamsService,
      private $state: ng.ui.IStateService,
      private $location: ng.ILocationService,
      private TaskService: app.Services.TaskService,
      private ChecknoteService: app.Services.ChecknoteService,
      private UserService: app.Services.UserService
    ) {
      this.checknotes = ChecknoteService.getAll()
      // get query string
      if($location.search().code) {
        UserService.setToken($location.search().code);
        UserService.setUser();
        // clear query string
        $location.search('');
        if ($location.hash()) $location.hash('');
      }

    };
  }
  angular.module('app').controller('TaskNoteController', TaskNoteController);
}
