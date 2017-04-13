/**
 * Created by piyush on 27/3/17.
 */
'use strict';


angular.module('emsdashboard').service('QualificationServ', ['$http', '$q', 'APP_CONSTANT', '$resource', function ( $http, $q, APP_CONSTANT, $resource) {
    var loginURL = APP_CONSTANT.loginURL;
   // var url = APP_CONSTANT.URL;

    return $resource(
        "",
        {},
        {
            add: {
                method: 'POST',
                url: loginURL + 'qualification'
            },

            update: {
                method: 'PUT',
                url: loginURL + 'qualification'
            },

            delete: {
                method: 'DELETE',
                url: loginURL + 'qualification'
            },

            get: {
                method: 'GET',
                url: loginURL + 'qualification/qualificationId/:eId'
            }

        }
    );
}]);
