(function(){
'use strict';

angular.module('Data')
.component('categories',{
  templateUrl: 'templates/categorylist.template.html',
  bindings: {
    categories: '<'
  }
});

})();
