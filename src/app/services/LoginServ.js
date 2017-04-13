'use strict';


angular.module('emsdashboard').service('LoginServ', ['$http', '$q', 'APP_CONSTANT', '$resource', function ( $http, $q, APP_CONSTANT, $resource) {
  //var loginURL = APP_CONSTANT.loginURL;
  var URL = APP_CONSTANT.URL;

  return $resource(
    "",
    {},
    {
      login: {
        method: 'POST',
        url: URL + 'login'
      },
      logout: {
        method: 'POST',
        url: URL + 'logout'
      }

    }
  );
}]);
