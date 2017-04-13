/**
 * Created by piyush on 27/3/17.
 */
'use strict';


angular.module('emsdashboard').service('EmployeeServ', ['$http', '$q', 'APP_CONSTANT', '$resource', function ( $http, $q, APP_CONSTANT, $resource) {
  var loginURL = APP_CONSTANT.loginURL;
  //var url = APP_CONSTANT.URL;

  return $resource(
    "",
    {},
    {
      employeeList: {
        method: 'GET',
        url: loginURL + 'employee',
        isArray: true
      },
      getEmployee: {
        method: 'GET',
        url: loginURL + 'employee/empId/:eId'
      },
       delete: {
                method: 'DELETE',
                url: loginURL + 'employee/:eId'
            }
    }
  );
}]);
