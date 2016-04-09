namespace app.Controllers {
  export class TaskNoteController {
    public checknotes: Array<app.i.IChecknote>;
    public checknote: app.i.IChecknote = {_id: undefined, title: undefined, dueDate: undefined, note: undefined, completeOrnah: false};

    public create() {
      this.checknote.task = this.$stateParams["id"];
      this.ChecknoteService.create(this.checknote).then((res) => {
        this.checknotes.push(res);
        this.checknote.title = "";
        this.checknote.user = "";

        this.$state.go('Home');
      });
    }

    public remove(c) {
      this.ChecknoteService.remove(c._id).then((res) => {
        this.checknotes.splice(this.checknotes.indexOf(c), 1);
      })
    }

    public update(c) {
      this.ChecknoteService.update(c).then((res) => {
        this.$state.go('Home');
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

    }
  }
  angular.module('app').controller('TaskNoteController', TaskNoteController);
}
