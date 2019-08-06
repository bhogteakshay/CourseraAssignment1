(function() {
'use strict'

angular.module('LunchCheck', [])
.controller('LunchCheckController', checkInput);

checkInput.$inject = ['$scope'];

function checkInput($scope){

    var resultMessage;
    $scope.items= "";
    $scope.checkOnClick = function(){

        if($scope.items.length == 0){

          $scope.messageValue = "Please enter data first"

            $scope.messageStyle = {
              'color':'red'
            }
            $scope.boxStyle = {
            'border-color':'red'
            }

          }
          else {
                checkCountOfItems($scope.items);
          }
    }

    function checkCountOfItems(stringInput){

          var itemArray = stringInput.split(',');

          if(itemArray.length <= 3)
              $scope.messageValue = "Enjoy!"
          else
            $scope.messageValue = "Too much!"


          $scope.messageStyle = {
            'color':'green'
          }
          $scope.boxStyle = {
          'border-color':'green'
          }
    }
}

})();
