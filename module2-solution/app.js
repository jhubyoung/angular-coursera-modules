(function(){

  angular.module('ShoppingListCheckOff',[])

  .controller('ToBuyController',ToBuyController)
  .controller('AlreadyBoughtController',AlreadyBoughtController)
  .service('ShoppingListCheckOffService',ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService','$scope'];
  function ToBuyController(ShoppingListCheckOffService,$scope){
    $scope.source=ShoppingListCheckOffService;
    var itemList = this;
    itemList.items = ShoppingListCheckOffService.getBuyItems();
    itemList.buyItem = function(itemIndex){
      ShoppingListCheckOffService.buyItem(itemIndex);
    };
  }

  function ShoppingListCheckOffService(){
    var service=this;
    service.showFullBoughtMsg="";
    service.showFullNothingBoughtMsg="no items bought yet";
    var toBuyItems = [
      {itemName:'baguettes', itemQuantity:'20'},
      {itemName:'cheese blocks', itemQuantity:'30'},
      {itemName:'tomatoes', itemQuantity:'50'}
    ];
    var boughtItems = [];
    service.getBuyItems = function(){
      return toBuyItems;
    };
    service.getBoughtItems = function(){
      console.log("getBoughtItems");
      return boughtItems;
    };
    service.buyItem = function(itemIndex){
      boughtItems.push(toBuyItems[itemIndex]);
      toBuyItems.splice(itemIndex,1);
      service.showFullNothingBoughtMsg="";
      if(toBuyItems.length==0){
        service.showFullBoughtMsg="all items are bought";
      }
    };
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService','$scope'];
  function AlreadyBoughtController(ShoppingListCheckOffService,$scope){
    $scope.source=ShoppingListCheckOffService;
    var boughtItems = this;
    boughtItems.items = ShoppingListCheckOffService.getBoughtItems();
  }

})();
