
/**
 * Created by piyush on 27/3/17.
 */
(function() {
    'use strict';

    angular
        .module('emsdashboard')
        .controller('workHistoryController', workHistoryController);

    /** @ngInject */
    function workHistoryController($scope,$window, WorkHistoryServ, AuthService,toastr,$rootScope) {
      //start here
      $rootScope.title = 'workHistory';
     $scope.data={};

      $scope.doSave = function () {
        WorkHistoryServ.add($scope.data,
          function (response) {
            toastr.success(response.message);
          }, function (err) {
            console.log(err.data.message);
            toastr.error(err.data.message);

          });
      }

      $scope.doUpdate = function () {
        WorkHistoryServ.update($scope.data,
          function (response) {
            console.log(response.data.message);
          }, function (err) {
            console.log(err.data.message);
            toastr.error(err.data.message);

          });
      }
      $scope.doDelete = function () {
      WorkHistoryServ.delete(function (response) {
        console.log(response);
      }, function (err) {
        console.log(err.data.message);
        toastr.error(err.data.message);

      });
    }
         $scope.doGet = function () {
         var eId=$rootScope.eId;
          console.log(eId);
        WorkHistoryServ.get({eId:eId}, function (response) {
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
