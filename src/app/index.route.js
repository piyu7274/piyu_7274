(function() {
  'use strict';

  angular
    .module('emsdashboard')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('login', {
        url: '/',
        templateUrl: 'app/login/login.html',
        controller: 'LoginController'
      })

      .state('department', {
        url: '/department',
        templateUrl: 'app/department/department.html',
        controller: 'DepartmentController'
      })

      .state('parent', {
        url: '/parent',
        templateUrl: 'app/parent/parent.html',
        controller: 'ParentController'
      })

      .state('leave', {
        url: '/leave',
        templateUrl: 'app/leave/leave.html',
        controller: 'LeaveController'
      })

      .state('monthlyWork', {
        url: '/monthlyWork',
        templateUrl: 'app/monthlywork/monthlyWork.html',
        controller: 'monthlyWorkController'
      })

      .state('personel_info', {
        url: '/personel_info',
        templateUrl: 'app/personel_Info/personel_Info.html',
        controller: 'personel_InfoController'
      })

      .state('qualification', {
        url: '/qualification',
        templateUrl: 'app/qualification/qualification.html',
        controller: 'qualificationController'
      })

      .state('workHistory', {
        url: '/workHistory',
        templateUrl: 'app/workHistory/workHistory.html',
        controller: 'workHistoryController'
      })

    $urlRouterProvider.otherwise('/');
  }

})();
