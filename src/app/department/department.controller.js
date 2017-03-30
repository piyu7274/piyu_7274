/**
 * Created by piyush on 27/3/17.
 */
(function() {
    'use strict';

    angular
        .module('emsdashboard')
        .controller('DepartmentController', DepartmentController);

    /** @ngInject */
    function DepartmentController($scope, DepartmentServ, toastr,$rootScope) {
        //start here
        $rootScope.title = 'department'
        $scope.FirstName = '';
        $scope.LastName = '';
        $scope.monthlysalary = '';
        $scope.department = '';
        $scope.designation = '';
        $scope.department ={
           // Name: $scope.FirstName+' '+ $scope.LastName ,
            monthlySalary : $scope.monthlysalary,
             department : $scope.department,
             designation : $scope.designation
        }

        $scope.doSave = function () {
            // console.log('in')
            $scope.department ={
                //Name: $scope.FirstName+' '+ $scope.LastName ,
                monthlySalary : $scope.monthlysalary,
                department : $scope.department,
                designation : $scope.designation
            }
            console.log($scope.department)
            DepartmentServ.add($scope.department,
                function (response) {
                  console.log(response.data.message);
                }, function (err) {
                    console.log(err.data.message)
                    toastr.error(err.data.message);

                });
        }
    }

})();
