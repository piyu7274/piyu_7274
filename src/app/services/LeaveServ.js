/**
 * Created by piyush on 27/3/17.
 */
'use strict';


angular.module('emsdashboard').service('LeaveServ', ['$http', '$q', 'APP_CONSTANT', '$resource', function ( $http, $q, APP_CONSTANT, $resource) {
    var loginURL = APP_CONSTANT.loginURL;
   // var url = APP_CONSTANT.URL;

    return $resource(
        "",
        {},
        {
            add: {
                method: 'POST',
                url: loginURL + 'leave'
            },

            update: {
                method: 'PUT',
                url: loginURL + 'leave'
            },

            delete: {
                method: 'DELETE',
                url: loginURL + 'leave'
            },

            get: {
                method: 'GET',
                url: loginURL + 'leave/leaveId/:eId'
            }

        }
    );
}]);
