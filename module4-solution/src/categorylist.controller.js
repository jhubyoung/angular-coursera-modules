(function () {
'use strict';

angular.module('Data')
.controller('CategoryListController', CategoryListController);

CategoryListController.$inject = ['categories'];
function CategoryListController(categories) {
  var categoryList = this;
  categoryList.categories = categories.data;
  // console.log('categoryList.categories: ',categoryList.categories);
}

})();
