'use strict';
namespace app {
  angular.module('app', ['ui.router', 'ngResource', 'ui.bootstrap'])
    .config((
    $stateProvider: ng.ui.IStateProvider,
    $locationProvider: ng.ILocationProvider,
    $urlRouterProvider: ng.ui.IUrlRouterProvider) => {

    $stateProvider.state('Home', {
      url: '/',
      templateUrl: '/templates/home.jade',
      controller: 'HomeController',
      controllerAs: 'vm'
    }).state('taskCreate', {
      url: '/create',
      templateUrl: '/templates/taskCreate.jade',
      controller: 'TaskCreateController',
      controllerAs: 'vm'
    }).state('taskUpdate', {
      url: '/update/:id',
      templateUrl: '/templates/taskUpdate.jade',
      controller: 'TaskUpdateController',
      controllerAs: 'vm'
    })
    ;

    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
  });
}
