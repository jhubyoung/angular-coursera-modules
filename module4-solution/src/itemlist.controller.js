(function () {
'use strict';

angular.module('Data')
.controller('ItemListController', ItemListController);

ItemListController.$inject = ['items'];
function ItemListController(items) {
  var itemList = this;
  itemList.items = items.data.menu_items;
  // console.log('controller: itemList.items: ',itemList.items);
}

})();
