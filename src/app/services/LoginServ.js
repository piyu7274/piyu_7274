'use strict';


angular.module('emsdashboard').service('LoginServ', ['$http', '$q', 'APP_CONSTANT', '$resource', function ( $http, $q, APP_CONSTANT, $resource) {
  var loginURL = APP_CONSTANT.loginURL;
  var url = APP_CONSTANT.URL;

  return $resource(
    "",
    {},
    {
      login: {
        method: 'POST',
        url: loginURL + 'login'
      },
      logout: {
        method: 'POST',
        url: url + 'logout'
      }

    }
  );
}]);
