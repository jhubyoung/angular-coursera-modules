(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['SignupService'];
function SignupController(SignupService) {
  var $ctrl = this;
  $ctrl.user = {};
  $ctrl.user.firstname = "";
  $ctrl.user.lastname = "";
  $ctrl.user.email = "";
  $ctrl.user.phone = "";
  $ctrl.user.favdish = "";
  $ctrl.user.saved = "false";
  $ctrl.user.userMsg = "";
  $ctrl.dish = {};
  $ctrl.dish.name = "";
  $ctrl.dish.description = "";

  $ctrl.signupAction = function(){
    // confirm that favorite dish exists
    var promise = SignupService.getDish($ctrl.user.favdish);
    promise.then(function(response){
      $ctrl.dish = response.data;
      SignupService.setDishValues($ctrl.dish);
      SignupService.setUserValues($ctrl.user);
    })
    .catch(function(response){
      $ctrl.user.userMsg = "No such menu number exists";
      $ctrl.user.favdish = "";
    });

  }

}

})();
