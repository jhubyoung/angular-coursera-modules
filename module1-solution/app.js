(function(){

angular.module('LunchCheck',[])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope','$filter'];
function LunchCheckController($scope,$filter){
  $scope.foods = "";
  $scope.message = "";

  $scope.displayMessage = function(){
    var msg = setMessage($scope.foods);
    $scope.message = msg;
  };

  function setMessage(string){
    var foodArray = string.split(",");
    var foodCount = foodArray.length;
    var msg="";
    if(string == 0){ msg="Please enter data first"}
    else if(foodCount > 3){ msg = "Too much!"; }
    else{ msg="Enjoy!"; }
    return msg;
  }
}

})();
