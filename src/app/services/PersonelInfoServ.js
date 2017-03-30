/**
 * Created by piyush on 27/3/17.
 */
'use strict';


angular.module('emsdashboard').service('PersonelInfoServ', ['$http', '$q', 'APP_CONSTANT', '$resource', function ( $http, $q, APP_CONSTANT, $resource) {
    var loginURL = APP_CONSTANT.loginURL;
   // var url = APP_CONSTANT.URL;

    return $resource(
        "",
        {},
        {
            add: {
                method: 'POST',
                url: loginURL + 'employee'
            },

            update: {
                method: 'PUT',
                url: loginURL + 'employee'
            },

            delete: {
                method: 'DELETE',
                url: loginURL + 'employee'
            },

            get: {
                method: 'GET',
                url: loginURL + 'employee/1'
            }

        }
    );
}]);
