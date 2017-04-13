/**
 * Created by piyush on 27/3/17.
 */
'use strict';


angular.module('emsdashboard').service('DepartmentServ', ['$http', '$q', 'APP_CONSTANT', '$resource', function ( $http, $q, APP_CONSTANT, $resource) {
    var loginURL = APP_CONSTANT.loginURL;
   // var url = APP_CONSTANT.URL;

    return $resource(
        "",
        {},
        {
            add: {
                method: 'POST',
                url: loginURL + 'department'
            },

            update: {
                method: 'PUT',
                url: loginURL + 'department'
            },

            delete: {
                method: 'DELETE',
                url: loginURL + 'department'
            }
,

            get: {
                method: 'GET',
                url: loginURL + 'department/departmentId/:eId'
            }


        }
    );
}]);
