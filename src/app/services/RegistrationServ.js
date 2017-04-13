/**
 * Created by piyush on 31/3/17.
 */
'use strict';


angular.module('emsdashboard').service('RegistrationServ', ['$http', '$q', 'APP_CONSTANT', '$resource', function ( $http, $q, APP_CONSTANT, $resource) {
  //var loginURL = APP_CONSTANT.loginURL;
    var URL = APP_CONSTANT.URL;

  return $resource(
    "",
    {},
    {
      add: {
        method: 'POST',
        url: URL + 'registration'
      }


    }
  );
}]);
