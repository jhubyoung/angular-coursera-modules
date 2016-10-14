(function(){
'use strict';

angular.module('Data')
.component('items',{
  templateUrl: 'templates/itemlist.template.html',
  bindings: {
    items: '<'
  }
});

})();
