
/**
 * Created by piyush on 27/3/17.
 */
(function() {
    'use strict';

    angular
        .module('emsdashboard')
        .controller('qualificationController', qualificationController);

    /** @ngInject */
    function qualificationController($scope,$window, QualificationServ, DepartmentServ,AuthService,toastr,$state,$rootScope) {
        //start here
        $rootScope.title = 'qualification';
        $scope.data={};
        
        $scope.doSave = function () {
          QualificationServ.add( $scope.data,
            function (response) {
              toastr.success(response.message);
            }, function (err) {
              console.log(err.data.message);
              toastr.error(err.data.message);

            });

        }

      $scope.doUpdate = function () {
        QualificationServ.update($scope.data,
          function (response) {
            console.log(response.data.message);
          }, function (err) {
            console.log(err.data.message);
            toastr.error(err.data.message);

          });
      }

        $scope.doDelete = function () {
          QualificationServ.delete(function (response) {
            console.log(response);
          }, function (err) {
            console.log(err.data.message);
            toastr.error(err.data.message);

          });
        }
          $scope.doNext = function () {
           /* $scope.qualification=AuthService.getUser();
        var eId=$scope.qualification.eId;
        console.log(eId);
        DepartmentServ.get({eId:eId}, function (response) {
          console.log(response);
          AuthService.setUser(response);*/
          $state.go("department");
        }/*, function (err) {
          console.log(err.data.message);
          toastr.error(err.data.message);
        });
        }*/

        $scope.doGet = function () {
         var eId=$rootScope.eId;
          console.log(eId);
        QualificationServ.get({eId:eId}, function (response) {
           if(response.data==null)
          {
            $scope.data='';
            toastr.success(response.message);
          }
          console.log(response);
          $scope.data=response;
        }, function (err) {
          console.log(err.data.message);
          toastr.error(err.data.message);

        });
        }
         $scope.doGet();
          }
    

})();
