namespace app.Services {
  interface IChecknoteResource extends ng.resource.IResource<IChecknoteResource>, app.i.IChecknote {}
  interface IChecknoteClass extends ng.resource.IResourceClass<IChecknoteResource> {
    update(params: Object, body: Object)
  }

  export class ChecknoteService {
    private ChecknoteResource: IChecknoteClass;

    public getAll() {
      return this.ChecknoteResource.query();
    }

    public create(checknote: app.i.IChecknote) {
      return this.ChecknoteResource.save(checknote).$promise;
    }

    public remove(id: string) {
      return this.ChecknoteResource.remove({ id: id }).$promise;
    };

    public update(checknote: app.i.IChecknote) {
      return this.ChecknoteResource.update({id: checknote._id}, {title: checknote.title, dueDate: checknote.dueDate, note: checknote.note, completeOrnah: checknote.completeOrnah}).$promise;
    }


    constructor(
      private $resource: ng.resource.IResourceService,
      private $http: ng.IHttpService,
      private $q: ng.IQService
    ) {
      this.ChecknoteResource = <IChecknoteClass>$resource('/api/v1/checknotes/:id', null, {
        'update': {method: 'PUT'}
      });
    }
  }
  angular.module('app').service('ChecknoteService', ChecknoteService);
}
