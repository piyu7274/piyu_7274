/**
 * Created by piyush on 27/3/17.
 */
'use strict';


angular.module('emsdashboard').service('ParentServ', ['$http', '$q', 'APP_CONSTANT', '$resource', function ( $http, $q, APP_CONSTANT, $resource) {
    var loginURL = APP_CONSTANT.loginURL;
    //var url = APP_CONSTANT.URL;

    return $resource(
        "",
        {},
        {
            add: {
                method: 'POST',
                url: loginURL + 'parent'
            },

            update: {
                method: 'PUT',
                url: loginURL + 'parent'
            },

            delete: {
                method: 'DELETE',
                url: loginURL + 'parent'
            },

            get: {
                method: 'GET',
                url: loginURL + 'parent'
            }

        }
    );
}]);
