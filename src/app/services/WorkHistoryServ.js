/**
 * Created by piyush on 27/3/17.
 */
'use strict';


angular.module('emsdashboard').service('WorkHistoryServ', ['$http', '$q', 'APP_CONSTANT', '$resource', function ( $http, $q, APP_CONSTANT, $resource) {
    var loginURL = APP_CONSTANT.loginURL;
   // var url = APP_CONSTANT.URL;

    return $resource(
        "",
        {},
        {
            add: {
                method: 'POST',
                url: loginURL + 'workHistory'
            },
            update: {
                method: 'PUT',
                url: loginURL + 'workHistory'
            },
            delete: {
                method: 'DELETE',
                url: loginURL + 'workHistory'
            },
            get: {
                method: 'GET',
                url: loginURL + 'workHistory'
            }

        }
    );
}]);
