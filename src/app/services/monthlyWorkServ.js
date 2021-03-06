/**
 * Created by piyush on 27/3/17.
 */
'use strict';


angular.module('emsdashboard').service('monthlyWorkServ', ['$http', '$q', 'APP_CONSTANT', '$resource', function ( $http, $q, APP_CONSTANT, $resource) {
    var loginURL = APP_CONSTANT.loginURL;
    //var url = APP_CONSTANT.URL;

    return $resource(
        "",
        {},
        {
            add: {
                method: 'POST',
                url: loginURL + 'monthlyWork'
            },

            update: {
                method: 'PUT',
                url: loginURL + 'monthlyWork'
            },

            delete: {
                method: 'DELETE',
                url: loginURL + 'monthlyWork'
            },

            get: {
                method: 'GET',
                url: loginURL + 'monthlyWork/monthlyWorkId/:eId'
            }

        }
    );
}]);
