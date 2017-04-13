(function() {
  'use strict';

  angular
    .module('emsdashboard')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('login', {
        url: '/login',
        templateUrl: 'app/login/login.html',
        controller: 'LoginController'
      })

      .state('department', {
        url: '/department',
        templateUrl: 'app/department/department.html',
        controller: 'DepartmentController'
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

      .state('registration', {
        url: '/registration',
        templateUrl: 'app/registration/registration.html',
        controller: 'registrationController'
      })
      .state('employee', {
        url: '/employee',
        templateUrl: 'app/personel_Info/employeeList.html',
        controller: 'employeeController'
      })

      .state('home', {
        url: '/home',
        templateUrl: 'app/home/home.html'
      })
    $urlRouterProvider.otherwise('/home');
  }

})();
