(function(){
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'templates/home.template.html'
  })

  // Category list page
  .state('categoryList', {
    url: '/category-list',
    templateUrl: 'templates/main-categorylist.template.html',
    controller: 'CategoryListController as categoryList',
    resolve: {
      categories: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  .state('itemList', {
    url: '/item-list/{categoryShortName}',
    templateUrl: 'templates/main-itemlist.template.html',
    controller: "ItemListController as itemList",
    resolve:{
      items: ['$stateParams','MenuDataService',
        function($stateParams,MenuDataService){
          return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
    }]
    }
  });

}

})();
