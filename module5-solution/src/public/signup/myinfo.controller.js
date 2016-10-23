(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['SignupService'];
function MyInfoController(SignupService) {
  var $ctrl = this;
  $ctrl.user = {};
  $ctrl.user = SignupService.getUserValues();  
  $ctrl.dish = {};
  $ctrl.dish = SignupService.getDishValues();
}

})();
