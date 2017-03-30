
/**
 * Created by piyush on 27/3/17.
 */
(function() {
    'use strict';

    angular
        .module('emsdashboard')
        .controller('ParentController', ParentController);

    /** @ngInject */
    function ParentController($scope, ParentServ, toastr,$rootScope) {
        //start here
        $rootScope.title = 'parent'
        $scope.fFirstName = '';
        $scope.fLastName = '';
        $scope.mFirstName = '';
        $scope.mLastName = '';
        $scope.address = '';
        $scope.city='';
        $scope.state='';
        $scope.contact='';
        $scope.parent ={
            fatherName: $scope.fFirstName+' '+  $scope.fLastName,
            motherName :$scope.mFirstName+' '+$scope.mLastName ,
            parentAddress : $scope.address,
            city : $scope.city,
            state : $scope.state,
            parentContact : $scope.contact
        }

        $scope.doSave = function () {
            // console.log('in')
            $scope.parent ={
                fatherName: $scope.fFirstName+' '+  $scope.fLastName,
                motherName :$scope.mFirstName+' '+$scope.mLastName ,
                parentAddress : $scope.address,
                city : $scope.city,
                state : $scope.state,
                parentContact : $scope.contact
            }

            console.log($scope.parent)
            ParentServ.add($scope.parent,
                function (response) {
                    console.log(response.data.message);
                }, function (err) {
                    console.log(err.data.message)
                    toastr.error(err.data.message);

                });

          ParentServ.update($scope.parent,
            function (response) {
              console.log(response.data.message);
            }, function (err) {
              console.log(err.data.message)
              toastr.error(err.data.message);

            });


          ParentServ.delete(function (response) {
            console.log(response);
          }, function (err) {
            console.log(err.data.message)
            toastr.error(err.data.message);

          });

          ParentServ.get(function (response) {
            console.log(response);
          }, function (err) {
            console.log(err.data.message)
            toastr.error(err.data.message);

          });
        }
    }

})();
