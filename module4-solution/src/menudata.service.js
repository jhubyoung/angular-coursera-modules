(function(){
  'use strict';

  angular.module('Data')
  .service('MenuDataService',MenuDataService);

  MenuDataService.$inject = ['$http'];
  function MenuDataService($http){
    var service = this;
    var categoriesEndpoint = 'https://davids-restaurant.herokuapp.com/categories.json';
    var itemsEndpoint =
      'https://davids-restaurant.herokuapp.com/menu_items.json?category=';
    service.getAllCategories = function(){
        var promise = $http({
          url: categoriesEndpoint
        });
        promise.then(function (result){
          // console.log("menudataservice method. result.data: ",result.data);
            return result.data;
          }, function (errorResponse){
            console.log("error message: ", errorResponse.message);
          });
        return promise;
    };

    service.getItemsForCategory = function(categoryShortName){
        var promise = $http({
          url: itemsEndpoint + categoryShortName
        });
        promise.then(function (result){
          // console.log("menudataservice method. result.data: ",result.data);
          return result.data;
          }, function (errorResponse){
            console.log("error message: ", errorResponse.message);
          });
        return promise;
    };

  }

})();
