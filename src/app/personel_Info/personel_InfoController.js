
/**
 * Created by piyush on 27/3/17.
 */
(function() {
    'use strict';

    angular
        .module('emsdashboard')
        .controller('personel_InfoController', personel_InfoController);

    /** @ngInject */
    function personel_InfoController($scope, PersonelInfoServ,$stateParams, toastr,$rootScope,LoginServ,$http,$state,AuthService) {
        //start here
          var eId=$rootScope.eId;
          console.log(eId);
        $rootScope.title = 'personel_info';
       $scope.data={};
       

        $scope.doSave = function () {
          
          PersonelInfoServ.add($scope.data,
            function (response) {
              $rootScope.eId=response.eId;
              toastr.success(response.message);
            }, function (err) {
              console.log(err.data.message);
              toastr.error(err.data.message);

            });
        }
      $scope.doUpdate = function () {
        PersonelInfoServ.update($scope.personel_info,
          function (response) {
            console.log(response.data.message);
          }, function (err) {
            console.log(err.data.message);
            toastr.error(err.data.message);

          });
      }

      
      $scope.doNext = function () {
       /* var eId=$scope.data.eId;
        console.log(eId);
        QualificationServ.get({eId:eId}, function (response) {
          console.log(response);
          $scope.data=response;
          AuthService.setUser(response);
          console.log("=====================================");
          console.log($scope.data);
          console.log("=====================================");*/
           $state.go("qualification");
        }/*, function (err) {
          console.log(err.data.message);
          toastr.error(err.data.message);

        });
        }
*/

         $scope.doGet = function () {
         var eId=$rootScope.eId;
          console.log(eId);
        PersonelInfoServ.get({eId:eId}, function (response) {
          if(response.data==null)
          {
            $scope.data='';
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
