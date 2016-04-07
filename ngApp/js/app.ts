'use strict';
namespace app {
  angular.module('app', ['ui.router', 'ngResource', 'ui.bootstrap'])
    .config((
    $stateProvider: ng.ui.IStateProvider,
    $locationProvider: ng.ILocationProvider,
    $urlRouterProvider: ng.ui.IUrlRouterProvider,
    $httpProvider: ng.IHttpProvider
    ) => {

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
    }).state('checknotes', {
      url: '/checknotes',
      templateUrl: '/templates/checknotes.jade',
      controller: 'TaskNoteController',
      controllerAs: 'vm'
    }).state('userLogin', {
      url: '/login',
      templateUrl: '/templates/userLogin.jade',
      controller: 'UserLoginController',
      controllerAs: 'vm'
    }).state('userRegister', {
      url: '/register',
      templateUrl: '/templates/userRegister.jade',
      controller: 'UserRegisterController',
      controllerAs: 'vm'
    });

    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
    $httpProvider.interceptors.push('AuthInterceptor');
  });
}
