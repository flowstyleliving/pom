namespace app.Controllers {
  export class UserRegisterController {
    public user: app.i.IUser = {
      name: undefined,
      email: undefined,
      password: undefined,
      age: undefined,
      gender: undefined,
      imageUrl: undefined,
      location: undefined,
      bio: undefined,
      _id: undefined
    };

    public register() {
      this.UserService.register(this.user).then(() => {
        this.$state.go('Home');
      })
    }

    constructor(private UserService: app.Services.UserService, private $state: ng.ui.IStateService) {
    }
  }
  angular.module('app').controller('UserRegisterController', UserRegisterController);
}
