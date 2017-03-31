
/**
 * Created by piyush on 27/3/17.
 */
(function() {
    'use strict';

    angular
        .module('emsdashboard')
        .controller('qualificationController', qualificationController);

    /** @ngInject */
    function qualificationController($scope, QualificationServ, toastr,$rootScope) {
        //start here
        $rootScope.title = 'qualification'
        $scope.marks10 = '';
        $scope.marks12 = '';
        $scope.grade_per = '';
        $scope.college = '';
        $scope.university = '';
        $scope.gradType = '';
        $scope.pgradType='';

        $scope.qualification ={
            marks10: $scope.marks10,
            marks12 :$scope.marks12 ,
            grade_per_grade:$scope.grade_per,
            college:$scope.college,
            university:$scope.university,
            grad_Type:$scope.gradType,
            pgrad_Type:$scope.pgradType

        }

        $scope.doSave = function () {
          // console.log('in')
          $scope.qualification = {
            marks10: $scope.marks10,
            marks12: $scope.marks12,
            grade_per_grade: $scope.grade_per,
            college: $scope.college,
            university: $scope.university,
            grad_Type: $scope.gradType,
            pgrad_Type: $scope.pgradType

          }
          console.log($scope.qualification)
          QualificationServ.add($scope.qualification,
            function (response) {
              console.log(response.data.message);
            }, function (err) {
              console.log(err.data.message)
              toastr.error(err.data.message);

            });

        }
      $scope.doUpdate = function () {
        QualificationServ.update($scope.qualification,
          function (response) {
            console.log(response.data.message);
          }, function (err) {
            console.log(err.data.message)
            toastr.error(err.data.message);

          });
      }

        $scope.doDelete = function () {
          QualificationServ.delete(function (response) {
            console.log(response);
          }, function (err) {
            console.log(err.data.message)
            toastr.error(err.data.message);

          });
        }
          $scope.doGet = function () {
          QualificationServ.get(function (response) {
            console.log(response);
          }, function (err) {
            console.log(err.data.message)
            toastr.error(err.data.message);

          });
        }
    }

})();
