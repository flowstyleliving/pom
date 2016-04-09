namespace app.Services {

  interface ITaskResource extends ng.resource.IResource<ITaskResource>, app.i.ITask {}
  interface ITaskClass extends ng.resource.IResourceClass<ITaskResource> {
    update(params: Object, body: Object)
  }

  export class TaskService {
      private TaskResource: ITaskClass;

      public getAll() {
        return this.TaskResource.query();
      }

      public getOne(id: string) {
        return this.TaskResource.query({id: id});
      }

      public createTask(task: app.i.ITask) {
        return this.TaskResource.save(task).$promise;
      }

      public update(task: app.i.ITask) {
        return this.TaskResource.update({id: task._id}, {title: task.title, dueDate: task.dueDate, pomStatus: task.pomStatus, color: task.color}).$promise;
      }

      public remove(cat: string) {
        return this.TaskResource.delete({id: cat}).$promise;
      }

      constructor(private $resource: ng.resource.IResourceService) {
        this.TaskResource = <ITaskClass>$resource('/api/v1/tasks/:id', null, {
          'update': {method: 'PUT'}
        });
      }
  }
  angular.module('app').service('TaskService', TaskService);
}
