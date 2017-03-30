
/**
 * Created by piyush on 27/3/17.
 */
(function() {
    'use strict';

    angular
        .module('emsdashboard')
        .controller('personel_InfoController', personel_InfoController);

    /** @ngInject */
    function personel_InfoController($scope, PersonelInfoServ, toastr,$rootScope) {
        //start here
        $rootScope.title = 'personel_info'
        $scope.FirstName = '';
        $scope.LastName = '';
        $scope.DateofBirth = '';
        $scope.age = '';
        $scope.gender = '';
        $scope.address = '';
        $scope.Email='';
        $scope.city='';
        $scope.state='';
        $scope.postalCode='';
        $scope.contact='';
        $scope.marritalStatus='';
        $scope.quaification='';
        $scope.CurrentExp='';
        $scope.personel_info ={
            name: $scope.fFirstName+' '+  $scope.fLastName,
            DOB :$scope.DateofBirth ,
            age:$scope.age,
            gender:$scope.gender,
            address:$scope.address,
            city:$scope.city,
            Email:$scope.Email,
            state:$scope.state,
            postalCode:$scope.postalCode,
            marritalStatus:$scope.marritalStatus,
            contactNo : $scope.contact,
            quaification:$scope.quaification,
            CurrentExp: $scope.CurrentExp
        }

        $scope.doSave = function () {
            // console.log('in')
            $scope.personel_info ={
                name: $scope.fFirstName+' '+  $scope.fLastName,
                DOB :$scope.DateofBirth ,
                age:$scope.age,
                gender:$scope.gender,
                address:$scope.address,
                city:$scope.city,
                Email:$scope.Email,
                state:$scope.state,
                postalCode:$scope.postalCode,
                marritalStatus:$scope.marritalStatus,
                contactNo : $scope.contact,
                quaification:$scope.quaification,
                CurrentExp: $scope.CurrentExp
            }
          //  console.log($scope.personel_info)
            PersonelInfoServ.add($scope.personel_info,
                function (response) {
                    console.log(response.data.message);
                }, function (err) {
                    console.log(err.data.message)
                    toastr.error(err.data.message);

                });
          PersonelInfoServ.get(function (response) {
              console.log(response);
            }, function (err) {
              console.log(err.data.message)
              toastr.error(err.data.message);

            });
        }
    }

})();
