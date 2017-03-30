
/**
 * Created by piyush on 27/3/17.
 */
(function() {
    'use strict';

    angular
        .module('emsdashboard')
        .controller('workHistoryController', workHistoryController);

    /** @ngInject */
    function workHistoryController($scope, WorkHistoryServ, toastr,$rootScope) {
        //start here
        $rootScope.title = 'workHistory'
        $scope.FirstName = '';
        $scope.LastName = '';
        $scope.cName = '';
        $scope.address = '';
        $scope.city='';
        $scope.state='';
        $scope.MobNo='';
        $scope.off_contactNo='';

        $scope.workHistory ={
            name: this.FirstName+' '+  this.LastName,
            companyName:this.cName,
            address:this.address,
            city:this.city,
            state:this.state,
            employee_mob:this.MobNo,
            officeContact:this.marritoff_contactNoalStatus
        }

        $scope.doSave = function () {
            // console.log('in')
            $scope.workHistory ={
                name: $scope.FirstName+' '+  $scope.LastName,
                companyName:$scope.cName,
                address:$scope.address,
                city:$scope.city,
                state:$scope.state,
                employee_mob:$scope.MobNo,
                officeContact:$scope.marritoff_contactNoalStatus
            }


            console.log($scope.workHistory)
            WorkHistoryServ.add($scope.workHistory,
                function (response) {
                    console.log(response.data.message);
                }, function (err) {
                    console.log(err.data.message)
                    toastr.error(err.data.message);

                });
        }
    }

})();
