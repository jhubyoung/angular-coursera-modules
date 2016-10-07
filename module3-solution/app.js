(function(){
  'use strict';

  angular.module('NarrowItDownApp',[])

  .controller('NarrowItDownController',NarrowItDownController)
  .service('MenuSearchService',MenuSearchService)
  .directive('foundItems',FoundItems);

  function FoundItems(){
    var ddo={
      templateUrl: 'itemDesc.html',
      scope: {
        // first term is label used in template, second term used in html
        list: '<items',
        onRemove: '&'
      }
    };
    return ddo;
  }

  MenuSearchService.$inject = ['$http'];
  function MenuSearchService($http){
    var service = this;
    var endpoint = 'https://davids-restaurant.herokuapp.com/menu_items.json';
    var searchIsEmpty=false;
    service.getMatchedMenuItems = function(searchTerm){
        searchIsEmpty=false;
        if(searchTerm=="" || searchTerm===undefined || searchTerm==null){
            searchIsEmpty=true;
        }
        var promise = $http({
          url: endpoint
        });

        promise.then(function (result){
            var foundItems=[];
            var responseItems = result.data;
            for(var i=0; i<responseItems.menu_items.length; i++){
              var desc = responseItems.menu_items[i].description;
              if(desc.search(searchTerm) != -1){
                foundItems.push(responseItems.menu_items[i]);
              }
            }
            if(searchIsEmpty==true){
              foundItems = [];
            }
            result.data = foundItems;
            return foundItems;
          }, function (errorResponse){
            console.log("error message: ", errorResponse.message);
          });
        return promise;
    };
  }

  NarrowItDownController.$inject = ['MenuSearchService','$scope'];
  function NarrowItDownController(MenuSearchService,$scope){
    var found = this;
    var foundItems = [];

    found.getMatchedMenuItems = function(){
      var promise = MenuSearchService.getMatchedMenuItems(found.searchTerm);
      promise.then(function(response){
        found.foundItems = response.data;
      });
    };
    found.removeItem = function(itemIndex){
      found.foundItems.splice(itemIndex,1);
    };
  }

})();
