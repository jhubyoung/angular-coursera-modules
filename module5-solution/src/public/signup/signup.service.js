(function(){
'use strict';

angular.module('public')
.service('SignupService',SignupService);

SignupService.$inject = ['$http'];
function SignupService($http){
  var service = this;

  service.setUserValues = function(user){
    service.user = user;
    service.user.saved = "true";
    service.user.userMsg = "Your information has been saved";
  };

  service.getUserValues = function(){
    return service.user;
  };

  service.setDishValues = function(dish){
    service.dish = dish;
  };

  service.getDishValues = function(){
    return service.dish;
  }

  service.getDish = function(dishShortName){
    var menuUrl = "http://jhubyoung-course5.herokuapp.com/menu_items";
    menuUrl = menuUrl + "/"+dishShortName+".json";
    var promise = $http({
      url: menuUrl
    });
    promise.then(function(result){
      return result.data;
    }, function(errorResponse){
      return errorResponse;
    });
    return promise;
  };

}

})();
